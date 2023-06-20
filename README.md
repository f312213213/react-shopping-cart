# react-shopping-cart

A react hook to make shopping cart easier.

## Install

```
npm i @f312213213/react-shopping-cart
```

## Quick start

```javascript
import { CartProvider } from '@f312213213/react-shopping-cart';

const Store = () => {
  return (
      <CartProvider>
        <YourStoreRelatedComponents />
      </CartProvider>
  )
}
```

```javascript
import { useCartContext } from '@f312213213/react-shopping-cart';

const OtherComponents = () => {
  const { cartItems, addItemToCart } = useCartContext()
  return (
      <div>
        <button onClick={() => addItemToCart(productId)}>
          add to cart
        </button>
        {
          cartItems.map(cartItem => {
            return (
                <div>
                  {
                    cartItem.id
                  }
                </div>
            )
          })
        }
      </div>
  )
}

```