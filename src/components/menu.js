import React from "react";
import { Link } from 'gatsby';

const menu = () => (
    <div className="menu">
        <ul className="menu-container">
            <li className="menu-item">
                <Link to="/schedule/">
                <span className="menu-item--icon">
                    <img src="https://placehold.it/40x30" className="menu-item--svg"/>
                </span>
                    <span className="menu-item--label">Schedule</span>
                </Link>
            </li>

            <li className="menu-item">
                <Link to="/about/">
                <span className="menu-item--icon">
                    <img src="https://placehold.it/40x30" className="menu-item--svg"/>
                </span>
                    <span className="menu-item--label">About</span>
                </Link>
            </li>

            <li className="menu-item">
                <Link to="/contact/">
                <span className="menu-item--icon">
                    <img src="https://placehold.it/40x30" className="menu-item--svg"/>
                </span>
                    <span className="menu-item--label">Contact</span>
                </Link>
            </li>
        </ul>
    </div>
)

export default menu;