import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Header from "../Header/Header";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar wow fadeInDown">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="images/logo.png" alt="logo" />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                exact="true"
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                exact="true"
                to="/#about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </HashLink>
            </li>

            <li>
              <NavDropdown title="Models" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#download">Download</NavDropdown.Item>
                <NavDropdown.Item href="follow-us">Follow Us</NavDropdown.Item>
              </NavDropdown>
            </li>

            <li className="nav-item">
              <HashLink
                exact="true"
                to="/#slide"
                className="nav-links"
                onClick={handleClick}
              >
                Parts
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                exact="true"
                to="/#commercial"
                className="nav-links"
                onClick={handleClick}
              >
                Commercial
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                exact="true"
                to="#dealers"
                className="nav-links"
                onClick={handleClick}
              >
                Dealers
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink
                exact="true"
                to="/#contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </HashLink>
            </li>

            <li className="icons">
              <GrFacebookOption className="i" />
              <AiFillYoutube className="i" />
              <FaLinkedinIn className="i" />
            </li>
          </ul>

          <div>
            <FiSearch className="search" />
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i
              className={
                click ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"
              }
            ></i>
          </div>
        </div>
      </nav>
      <Header click={click} />
    </>
  );
}

export default NavBar;
