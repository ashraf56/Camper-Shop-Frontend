import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-full min-h-screen relative">
            <div className="bg-transparent  absolute z-20 w-full h-16">navbar</div>
            <Outlet></Outlet>
            footer
        </div>
    );
};

export default MainLayout;