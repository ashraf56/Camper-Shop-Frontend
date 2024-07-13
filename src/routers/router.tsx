import App from "@/App";
import Aboutus from "@/page/Aboutus";
import Home from "@/page/Home";
import ProductDetail from "@/page/ProductDetail";
import ProductsPage from "@/page/ProductsPage";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'about',
                element:<Aboutus/>
            },
            {
                path:'products',
                element:<ProductsPage/>
            },
            {
                path:'products/:id',
                element:<ProductDetail/>
            }
        ]
    }
])


