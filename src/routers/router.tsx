import App from "@/App";
import Aboutus from "@/page/Aboutus";
import Carts from "@/page/Carts";
import Home from "@/page/Home";
import ProductDetail from "@/page/ProductDetail";
import Productmanagment from "@/page/Productmanagment";
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
            },
            {
                path:'productmanager',
                element:<Productmanagment/>
            },
            {
                path:'carts',
                element:<Carts/>
            }
        ]
    }
])


