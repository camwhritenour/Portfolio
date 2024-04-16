import { Link } from 'react-router-dom';
import React from "react";
import "./MobileNav.css"

const MobileNav = ({ isOpen, toggleMenu }) => {



    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <img className="logo" src="assets/portrait.svg" alt="" />

                    <ul>
                        <li>
                            <Link key={1} className="nav-item" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link key={2} className="nav-item" to="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link key={3} className="nav-item" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link key={3} className="nav-item" to="/resume">
                                Resume
                            </Link>
                        </li>

                        <button className='contact-btn' onClick={() => { }}>
                            Hire Me
                        </button>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;