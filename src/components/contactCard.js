import React from "react";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";


const contactCard = () => (
    <div className="contact-container">
       <div className="contact-item">
           <div className="contact-icon">
                <FontAwesomeIcon icon={faTwitter} />
           </div>
           <div className="contact-label">
                <a href="#">@maomonium</a>
           </div>
       </div>
       <div className="contact-item">
           <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
           </div>
           <div className="contact-label">
                <a href="#">jennyluo.jyl@gmail.com</a>
           </div>
       </div>
    </div>
)

export default contactCard;