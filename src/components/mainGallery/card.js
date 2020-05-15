import React from "react";
import {Link} from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const card = (props) => {

    const handleClick = () => {
        console.log("test click from component");
    }

    return (
        <div className="card" onClick={props.onClick}>
            <div className="card-wrapper">
                <div className="card-header">
                    <div className="card-header--title-area">
                        <span className="card-header--title">
                            Title here
                        </span>
                    </div>
                    <div className="card-header--social-area">
                        <span className="card-header--social-icon">
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </span>
                        <span className="card-header--social-icon">
                            <a href="#"><FontAwesomeIcon icon={faTumblr} /></a>
                        </span>
                        <span className="card-header--social-icon">
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </span>
                    </div>
                    <div className="card-header--label">
                        <span className="card-header--label-wrapper"><img src="https://placehold.it/50x50" className="card-header--label-icon"/></span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-image-wrapper">
                        <img src="https://placehold.it/500x300" className="card-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default card;