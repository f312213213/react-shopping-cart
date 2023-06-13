// @ts-ignore
import { CartProvider } from 'react-shopping-cart'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <CartProvider>
          <App />
      </CartProvider>
  </React.StrictMode>
)
