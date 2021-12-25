import React from "react";
import { NavStyles } from "./styles";

function Nav() {
  return (
    <NavStyles class="navbar">
      <ul class="navbar--list">
        <img
          className="navbar--list--bars"
          src="/images/bars-top.svg"
          alt="bars-top"
        />
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#">
            ABOUT ME
          </a>
        </li>
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#">
            WORKS
          </a>
        </li>
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#">
            DARK
          </a>
        </li>
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#">
            SKILLS
          </a>
        </li>
        <li className="navbar--list--item">
          <a className="navbar--list--item--link" href="#">
            CONTACT
          </a>
        </li>
        <img
          className="navbar--list--bars"
          src="/images/bars-bottom.svg"
          alt="bars-bottom"
        />
      </ul>
    </NavStyles>
  );
}

export default Nav;
