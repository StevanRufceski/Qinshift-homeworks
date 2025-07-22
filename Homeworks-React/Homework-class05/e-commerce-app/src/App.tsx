import './App.css'
import { Navigation } from './components/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import {Products} from './pages/Products'
import { ProductsContextProvider } from './context/products.context'


function App() {

  return (
    <main>
      <BrowserRouter>
      <ProductsContextProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
        </ProductsContextProvider>
      </BrowserRouter>
    </main>
  )
  
}

export default App
