import React from "react";
import NavBar from "../../features/navBar/NavBar";

const MainLayout = ({ children }) => (
    <div>
        <NavBar />
        {children}
    </div>
);

export default MainLayout;
