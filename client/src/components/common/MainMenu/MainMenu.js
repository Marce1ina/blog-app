import React from "react";
import { Link } from "react-router-dom";
import "./MainMenu.scss";

const MainMenu = ({ links }) => (
    <div>
        {links.map(({ path, title }, index) => (
            <Link className="link" key={index} to={path}>
                {title}
            </Link>
        ))}
    </div>
);

export default MainMenu;
