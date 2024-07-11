import Navbar from "@/page/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-full min-h-screen relative">
     
                <Navbar></Navbar>
            <Outlet></Outlet>
            footer
        </div>
    );
};

export default MainLayout;