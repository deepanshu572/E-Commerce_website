import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Components/Context/ProductContext.jsx'
import { CartProvider } from './Components/Context/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
       <CartProvider>
       <App /> 
    </CartProvider>
    </AppProvider>
   
   
  </React.StrictMode>,
  
)
