import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, Route , createBrowserRouter , createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetail from './pages/ProductDetail.jsx';
import './index.css'
import App from './App.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="products" element={<Products/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="product" element={<ProductDetail/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
