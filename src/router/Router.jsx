import { createBrowserRouter } from "react-router-dom";
// import { Products } from "../pages/Products";
// import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
// import { Register } from "../pages/Register";
// import { SingleProduct } from "../pages/SingleProduct";
import { Layout } from "../layout/Layout";

export const route = createBrowserRouter([
    {
        path: "/",
    element: <Layout />, 
    children: [
      {
         index: true, 
        element: <Home/>
      },   
    //   {path:'products' , element:<Products/>},
            // // http://localhost:5173/products/id
            // {path:'products/:id' , element:<SingleProduct/>},
            // {path:"login" , element:<Login/>},
            // {path:"register" , element:<Register/>}


        ]
    }])