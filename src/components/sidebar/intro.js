import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Social from "./social";

const intro = () => (
    <div className="intro">
    <div className="intro-scene">
        {/* <div className="intro-image-container">
            <div className="intro-image">
                <img src="https://placehold.it/150x150" className="intro-image--img"/>
            </div>
        </div>
        <div className="intro-desc-container">
            <div className="intro-desc">
                <p>Intro desc here</p>
            </div>
        </div> */}

        <div className="intro-card-wrapper">
            <div className="intro-card intro-card--front">
                <div className="intro-card__head">
                    <span className="intro-card__name">Maomonium</span>
                    <span className="intro-card__lvl">lvl. 26</span>
                </div>
                <div className="intro-card__image-container">
                    <img src="https://placehold.it/400x250" className="intro-card__image" />
                </div>
                <div className="intro-card__details">
                    <p>
                        <strong>something</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p> 
                    <p>
                        <strong>something else</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                </div>
            </div>

            <div className="intro-card intro-card--back">
                <div className="intro-card__back-inner">
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </div>
            </div>

        </div>
            <div className="intro-card__behind">

            </div>
    </div>
        <Social/>
    </div>
)


export default intro;
