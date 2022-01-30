import { NavStyles } from "./styles";
import { useEffect, useState } from "react";
import i18next from "../../translates/i18next";

function Nav() {
  useEffect(() => {
    const aboutMeDistance = document.querySelector("#about-me").offsetTop;
    const worksDistance = document.querySelector("#works").offsetTop;
    const skillsDistance = document.querySelector("#skills").offsetTop;
    const contactDistance = document.querySelector("#contact").offsetTop;

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
      if (window.screen.width > 800) {
        const scrollDistance = window.scrollY;

        if (scrollDistance >= aboutMeDistance && scrollDistance < worksDistance)
          aboutMeNavItem.style.color = "var(--green)";
        else aboutMeNavItem.style.color = "var(--black)";

        if (scrollDistance >= worksDistance && scrollDistance < skillsDistance)
          worksNavItem.style.color = "var(--green)";
        else worksNavItem.style.color = "var(--black)";

        if (
          scrollDistance >= skillsDistance &&
          scrollDistance < contactDistance
        )
          skillsNavItem.style.color = "var(--green)";
        else skillsNavItem.style.color = "var(--black)";

        if (scrollDistance >= contactDistance)
          contactNavItem.style.color = "var(--green)";
        else contactNavItem.style.color = "var(--black)";
      }
    });
  }, []);
  const [darkTheme, setDarkTheme] = useState(true);

  function changeTheme() {
    const html = document.querySelector("html");
    setDarkTheme(!darkTheme);
    darkTheme
      ? html.classList.add("dark-mode")
      : html.classList.remove("dark-mode");
  }

  return (
    <NavStyles className="navbar TL-move-left" data-aos="fade-left">
      <ul className="navbar--list">
        <svg
          className="navbar--list--bars"
          width="30"
          height="11"
          viewBox="0 0 30 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-0.5"
            x2="10"
            y2="-0.5"
            transform="matrix(-1 0 0 1 10 1)"
            stroke="#2F2F2F"
          />
          <line
            y1="-0.5"
            x2="20"
            y2="-0.5"
            transform="matrix(-1 0 0 1 20 6)"
            stroke="#2F2F2F"
          />
          <line
            y1="-0.5"
            x2="30"
            y2="-0.5"
            transform="matrix(-1 0 0 1 30 11)"
            stroke="#2F2F2F"
          />
        </svg>

        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--about-me"
            href="#about-me"
          >
            {i18next.t("navbar.aboutMe")}
          </a>
        </li>
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--works"
            href="#works"
          >
            {i18next.t("navbar.works")}
          </a>
        </li>
        <li className="navbar--list--item">
          <span
            onClick={changeTheme}
            className="navbar--list--item--link navbar--list--item--link--dark"
            href="#"
          >
            {i18next.t("navbar.theme")}
          </span>
        </li>
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--skills"
            href="#skills"
          >
            {i18next.t("navbar.skills")}
          </a>
        </li>
        <li className="navbar--list--item">
          <a
            className="navbar--list--item--link navbar--list--item--link--contact"
            href="#contact"
          >
            {i18next.t("navbar.contact")}
          </a>
        </li>
        <svg
          className="navbar--list--bars"
          width="30"
          height="11"
          viewBox="0 0 30 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10" y1="10.5" y2="10.5" stroke="#2F2F2F" />
          <line x1="20" y1="5.5" y2="5.5" stroke="#2F2F2F" />
          <line x1="30" y1="0.5" y2="0.5" stroke="#2F2F2F" />
        </svg>
      </ul>
    </NavStyles>
  );
}

export default Nav;
