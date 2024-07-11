import App from "@/App";
import Aboutus from "@/page/Aboutus";
import Home from "@/page/Home page/Home";
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
            }
        ]
    }
])


