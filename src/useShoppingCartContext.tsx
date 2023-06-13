import React from 'react'
import omit from 'lodash/omit'

interface ICartItem {
  id: string
  quantity: number
}

interface ICart {
  [key: string]: ICartItem
}

interface ICartContext {
  removeCartItem: (id: string) => void
  addItemToCart: (id: string, initialQuantity: number) => void
  increaseItemQuantityById: (id: string, increaseCount: number) => void
  decreaseItemQuantityById: (id: string, decreaseCount: number) => void
  getItemQuantityById: (id: string) => void
  cart: ICart
  cartLength: number
}

const CartContext = React.createContext<ICartContext>({} as ICartContext)

export const useCartContext = () => React.useContext(CartContext)

export const CartProvider = (
  props: any
) => {
  const { children } = props
  const [cart, setCart] = React.useState<ICart>({})

  const removeCartItem = (id: string) => {
    setCart((prevState) => {
      return omit(prevState, id)
    })
  }

  const addItemToCart = (id: string, initialQuantity = 1) => {
    setCart((prevState) => {
      return {
        ...prevState,
        [id]: {
          id,
          quantity: initialQuantity,
        },
      }
    })
  }

  const increaseItemQuantityById = (id: string, increaseCount = 1) => {
    setCart((prevState) => {
      return {
        ...prevState,
        [id]: {
          id,
          quantity: cart[id].quantity + increaseCount,
        },
      }
    })
  }

  const decreaseItemQuantityById = (id: string, decreaseCount = 1) => {
    if (cart[id].quantity <= decreaseCount) {
      removeCartItem(id)
    }
    setCart((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          quantity: (prevState[id]?.quantity ?? 1) - decreaseCount,
        },
      }
    })
  }

  const getItemQuantityById = (id: string) => {
    return cart[id]?.quantity ?? 0
  }

  const data = {
    removeCartItem,
    addItemToCart,
    increaseItemQuantityById,
    decreaseItemQuantityById,
    getItemQuantityById,
    cart,
    cartLength: Object.keys(cart).length,
  }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}
