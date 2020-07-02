import React from "react";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";


const menu = () => (
    <div className="menu">
        <ul className="menu-container">
            <li className="menu-item">
                <Link to="/schedule/">
                <span className="menu-item--icon">
                    <FontAwesomeIcon icon={faCalendarAlt} className="menu-item--svg" />

                    {/* <img src="https://placehold.it/40x30" className="menu-item--svg"/> */}
                </span>
                    <span className="menu-item--label">Schedule</span>
                </Link>
            </li>

            <li className="menu-item">
                <Link to="/about/">
                <span className="menu-item--icon">
                    <FontAwesomeIcon icon={faUserCircle} className="menu-item--svg" />
                    {/* <img src="https://placehold.it/40x30" className="menu-item--svg"/> */}
                </span>
                    <span className="menu-item--label">About</span>
                </Link>
            </li>

            <li className="menu-item">
                <Link to="/contact/">
                <span className="menu-item--icon">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="menu-item--svg" />
                    {/* <img src="https://placehold.it/40x30" className="menu-item--svg"/> */}
                </span>
                    <span className="menu-item--label">Contact</span>
                </Link>
            </li>
        </ul>
    </div>
)

export default menu;