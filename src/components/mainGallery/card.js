import React from "react";
import {Link} from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const card = (props) => {
    let data = props.props;
    // console.log(data);
    
    const handleClick = () => {
        console.log("test click from component");
    }

    return (
        <div className="card">
            <div className="card-wrapper">
                <div className="card-header">
                    <div className="card-header--title-area">
                        <span className="card-header--title">
                            {data.title}
                        </span>
                    </div>
                    <div className="card-header--social-area">
                        {data.social.twitter && <span className="card-header--social-icon">
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </span>}
                        {data.social.tumblr && <span className="card-header--social-icon">
                            <a href="#"><FontAwesomeIcon icon={faTumblr} /></a>
                        </span>}
                        {data.social.instagram && <span className="card-header--social-icon">
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </span>}
                    </div>
                    <div className={`card-header--label card-header--label-${data.category}`}>
                        <span className="card-header--label-wrapper"><img src="https://placehold.it/50x50" className="card-header--label-icon"/></span>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-image-wrapper">
                        <img src={data.thumbnail} className="card-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default card;