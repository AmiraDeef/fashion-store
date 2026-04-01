import { createBrowserRouter } from "react-router-dom"
import { Products } from "../pages/Products";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home"
import { Register } from "../pages/Register"
import { Contact } from "../pages/Contact"
import { SingleProduct } from "../pages/SingleProduct"
import { Layout } from "../layout/Layout"
import {Account} from "../pages/Account"

export const route = createBrowserRouter([
    {
        path: "/",
    element: <Layout />, 
    children: [
      {
         index: true, 
        element: <Home/>
      },   
        {path:'contact' , element:<Contact/>},
         {path:'products' , element:<Products/>},
         { path: 'categories/:categoryName', element: <Products /> },
          
         {path:'products/:id' , element:<SingleProduct/>},
         {path:'account' , element:<Account/>},
            
        ]
    },

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])