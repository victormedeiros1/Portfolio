import { NavStyles } from "./styles";
import { gsap } from "gsap";
import { useEffect } from "react";

function Nav() {
  useEffect(() => {
    const aboutMeDistance = document.querySelector("#about-me").offsetTop;
    const worksDistance = document.querySelector("#works").offsetTop + 100;
    const skillsDistance = document.querySelector("#skills").offsetTop;
    const contactDistance = document.querySelector("#contact").offsetTop + 500;

    const aboutMeNavItem = document.querySelector(
      ".navbar--list--item--link--about-me"
    );
    const worksNavItem = document.querySelector(
      ".navbar--list--item--link--works"
    );
    const skillsNavItem = document.querySelector(
      ".navbar--list--item--link--skills"
    );
    const contactNavItem = document.querySelector(
      ".navbar--list--item--link--contact"
    );

    document.addEventListener("scroll", () => {
      const scrollDistance = window.scrollY;

      if (scrollDistance >= aboutMeDistance && scrollDistance < worksDistance)
        aboutMeNavItem.style.color = "var(--green)";
      else aboutMeNavItem.style.color = "var(--black)";

      if (scrollDistance >= worksDistance && scrollDistance < skillsDistance)
        worksNavItem.style.color = "var(--green)";
      else worksNavItem.style.color = "var(--black)";

      if (scrollDistance >= skillsDistance && scrollDistance < contactDistance)
        skillsNavItem.style.color = "var(--green)";
      else skillsNavItem.style.color = "var(--black)";

      if (scrollDistance >= contactDistance)
        contactNavItem.style.color = "var(--green)";
      else contactNavItem.style.color = "var(--black)";
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      {
        x: 100,
      },
      {
        delay: 1,
        x: 0,
      }
    );
  });
  return (
    <NavStyles className="navbar">
      <ul className="navbar--list">
        <img
          className="navbar--list--bars"
          src="./images/bars-top-s.svg"
          alt="bars-top"
        />
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--about-me"
            href="#about-me"
          >
            ABOUT ME
          </a>
        </li>
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--works"
            href="#works"
          >
            WORKS
          </a>
        </li>
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--dark navbar--list--item--link__disabled"
            href="#"
          >
            DARK
          </a>
        </li>
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--skills"
            href="#skills"
          >
            SKILLS
          </a>
        </li>
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--contact"
            href="#contact"
          >
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
