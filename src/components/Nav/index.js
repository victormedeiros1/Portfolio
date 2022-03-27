import { NavStyles } from "./styles";
import { useEffect, useState } from "react";
import i18next from "../../translates/i18next";

function Nav() {
  useEffect(() => {
    const height = {
      main: document.querySelector("#main").offsetHeight,
      aboutMe: document.querySelector("#about-me").offsetHeight,
      works: document.querySelector("#works").offsetHeight,
      skills: document.querySelector("#skills").offsetHeight,
      contact: document.querySelector("#contact").offsetHeight,
    };

    const distance = {
      main: 0,
      aboutMe: height.main,
      works: height.main + height.aboutMe,
      skills: height.main + height.aboutMe + height.works,
      contact: height.main + height.aboutMe + height.works + height.skills,
    };

    const navItem = {
      bars: document.querySelectorAll("line"),
      aboutMe: document.querySelector(".navbar__list__item__link__about-me"),
      works: document.querySelector(".navbar__list__item__link__works"),
      theme: document.querySelector(".navbar__list__item__link__theme"),
      skills: document.querySelector(".navbar__list__item__link__skills"),
      contact: document.querySelector(".navbar__list__item__link__contact"),
    };

    document.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      scroll >= distance.aboutMe && scroll < distance.works
        ? (navItem.aboutMe.style.color = "var(--green)")
        : (navItem.aboutMe.style.color = "var(--dark)");

      scroll >= distance.works && scroll < distance.skills
        ? (navItem.works.style.color = "var(--green)")
        : (navItem.works.style.color = "var(--dark)");

      if (scroll >= distance.skills && scroll < distance.contact) {
        navItem.bars.forEach((element) => {
          element.style.stroke = "var(--white)";
        });

        navItem.aboutMe.style.color = "var(--white)";
        navItem.works.style.color = "var(--white)";
        navItem.theme.style.color = "var(--white)";
        navItem.skills.style.color = "var(--green)";
        navItem.contact.style.color = "var(--white)";
      } else {
        navItem.bars.forEach((element) => {
          element.style.stroke = "var(--dark)";
        });

        navItem.aboutMe.style.color = "var(--dark)";
        navItem.works.style.color = "var(--dark)";
        navItem.theme.style.color = "var(--dark)";
        navItem.skills.style.color = "var(--dark)";

        scroll >= distance.contact
          ? (navItem.contact.style.color = "var(--green)")
          : (navItem.contact.style.color = "var(--dark)");
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
      <ul className="navbar__list">
        <svg
          className="navbar__list__bars"
          width="30"
          height="11"
          viewBox="0 0 30 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="-0.5" x2="10" y2="-0.5" transform="matrix(-1 0 0 1 10 1)" />
          <line y1="-0.5" x2="20" y2="-0.5" transform="matrix(-1 0 0 1 20 6)" />
          <line
            y1="-0.5"
            x2="30"
            y2="-0.5"
            transform="matrix(-1 0 0 1 30 11)"
          />
        </svg>

        <li className="navbar__list__item">
          <a
            className="navbar__list__item__link navbar__list__item__link__about-me"
            href="#about-me"
          >
            {i18next.t("navbar.aboutMe")}
          </a>
        </li>
        <li className="navbar__list__item">
          <a
            className="navbar__list__item__link navbar__list__item__link__works"
            href="#works"
          >
            {i18next.t("navbar.works")}
          </a>
        </li>
        <li className="navbar__list__item">
          <span
            onClick={changeTheme}
            className="navbar__list__item__link navbar__list__item__link__theme"
            href="#"
          >
            {i18next.t("navbar.theme")}
          </span>
        </li>
        <li className="navbar__list__item">
          <a
            className="navbar__list__item__link navbar__list__item__link__skills"
            href="#skills"
          >
            {i18next.t("navbar.skills")}
          </a>
        </li>
        <li className="navbar__list__item">
          <a
            className="navbar__list__item__link navbar__list__item__link__contact"
            href="#contact"
          >
            {i18next.t("navbar.contact")}
          </a>
        </li>
        <svg
          className="navbar__list__bars"
          width="30"
          height="11"
          viewBox="0 0 30 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10" y1="10.5" y2="10.5" />
          <line x1="20" y1="5.5" y2="5.5" />
          <line x1="30" y1="0.5" y2="0.5" />
        </svg>
      </ul>
    </NavStyles>
  );
}

export default Nav;
