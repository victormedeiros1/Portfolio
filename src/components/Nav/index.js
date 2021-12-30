import React from "react";
import { NavStyles } from "./styles";

function Nav() {
  return (
    <NavStyles className="navbar">
      <ul className="navbar--list">
        <img
          className="navbar--list--bars"
          src="./images/bars-top-s.svg"
          alt="bars-top"
        />
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#about-me">
            ABOUT ME
          </a>
        </li>
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#works">
            WORKS
          </a>
        </li>
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link__disabled"
            disabled
            href="/"
          >
            DARK
          </a>
        </li>
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#skills">
            SKILLS
          </a>
        </li>
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#contact">
            CONTACT
          </a>
        </li>
        <img
          className="navbar--list--bars"
          src="./images/bars-bottom-s.svg"
          alt="bars-bottom"
        />
      </ul>
    </NavStyles>
  );
}

export default Nav;
