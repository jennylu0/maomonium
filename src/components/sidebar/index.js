import React from "react";
import Logo from './logo';
import Intro from './intro';
import {Link} from 'gatsby';


const sidebar = () => {
    return (
        <div className="sidebar-container">
            <Link to="/"><Logo/></Link>
            <Intro/>
            <footer className="footer">
                <p>© {new Date().getFullYear()}</p>
                <p>Disclaimer blah blah</p>
            </footer>
        </div>
    )
}

export default sidebar;