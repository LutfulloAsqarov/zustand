import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import userStore from "../../zustand/UserStore";

function Navbar() {
    const userData = userStore((state) => state.users);
    return (
        <div className="navbar">
            <h2>Zustand</h2>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/create-user"}>Create user</NavLink>
            <NavLink to={"/all-users"}>
                All users <sup>{userData.length}</sup>
            </NavLink>
            <NavLink to={"/wishlist"}>Wishlist</NavLink>
        </div>
    );
}

export default Navbar;
