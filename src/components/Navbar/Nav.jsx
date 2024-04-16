// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MobileNav from "./MobileNav/MobileNav";
import Header from '../Header/Header';
import "./Nav.css"

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  // const [active, setActive] = useState

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrap'>
        <div className='nav-content'>
          <Header />
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

          <button className='menu-btn' onClick={toggleMenu}>
            <span
              className='btn-symbols'
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? <img src="assets/close.svg" alt="" /> : <img src="assets/menu.svg" alt="" />}
            </span>
          </button>

        </div>
      </nav>
    </>
  );
}

// <Navbar
//   links={[



//   ]}
// />