import React from 'react';
import {NavLink} from "react-router-dom";
import a from './navbar.module.css';
const Navbar = () => {
    return <nav className={a.nav}>
        <div>
            <NavLink to="/List" activeClassName={a.activs}>List</NavLink>
        </div>

    </nav>

}
export default Navbar;