import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            navbar 
            <Outlet></Outlet>
            footer
        </div>
    );
};

export default MainLayout;