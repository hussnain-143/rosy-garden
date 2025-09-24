import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/route'
import CartProvider from './context/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
