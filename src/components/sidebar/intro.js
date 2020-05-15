import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Social from "./social";

const intro = () => (
    <div className="intro">
        <div className="intro-image-container">
            <div className="intro-image">
                <img src="https://placehold.it/150x150" className="intro-image--img"/>
            </div>
        </div>
        <div className="intro-desc-container">
            <div className="intro-desc">
                <p>Intro desc here</p>
            </div>
        </div>

        <Social/>
    </div>
)


export default intro;
