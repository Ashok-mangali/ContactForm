import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>    
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/ChartAndMaps">Chart And Maps</NavLink>
                </li>
                <li>
                    <NavLink to="/SideBar">SideBar</NavLink>
                </li>
            </ul>
        </nav>
    )
}