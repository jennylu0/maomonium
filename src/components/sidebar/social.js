import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const social = () => (
    <div className="social">
        <ul className="social-wrapper">
            <li className="social-icon social-icon--tw">
                <a href="#" target="_blank"><span className="social-icon-wrapper"><FontAwesomeIcon icon={faTwitter} /></span></a>
            </li>
            <li className="social-icon social-icon--tumblr">
                <a href="#" target="_blank"><span className="social-icon-wrapper"><FontAwesomeIcon icon={faTumblr} /></span></a>
            </li>
            <li className="social-icon social-icon--insta">
                <a href="#" target="_blank"><span className="social-icon-wrapper"><FontAwesomeIcon icon={faInstagram} /></span></a>
            </li>
        </ul>
    </div>
)


export default social;
