import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/home/Home';
import Product from './components/product/Product';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { CustomCursor } from './components/reusable_components/CustomCursor';
import { useSelector } from 'react-redux';
import Products from './components/products/Products';

const Layout = () => {

  const { cursor } = useSelector(data => data);

  return(
    <>
    <CustomCursor cursor={cursor}/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
