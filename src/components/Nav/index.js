import { NavStyles } from './styles';
import { useEffect, useState } from 'react';
import i18next from '../../translates/i18next';

function Nav() {
  useEffect(() => {
    const sections = document.querySelectorAll('main, section, footer');

    const sectionsHeight = {
      main: sections[0].offsetHeight,
      aboutMe: sections[1].offsetHeight,
      works: sections[2].offsetHeight,
      skills: sections[3].offsetHeight,
      contact: sections[4].offsetHeight,
    };

    const sectionsDistance = {
      main: 0,
      aboutMe: sectionsHeight.main,
      works: sectionsHeight.main + sectionsHeight.aboutMe,
      skills:
        sectionsHeight.main + sectionsHeight.aboutMe + sectionsHeight.works,
      contact:
        sectionsHeight.main +
        sectionsHeight.aboutMe +
        sectionsHeight.works +
        sectionsHeight.skills,
    };

    const navItem = {
      bars: document.querySelectorAll('line'),
      aboutMe: document.querySelector('.navbar__list__item__link__about-me'),
      works: document.querySelector('.navbar__list__item__link__works'),
      theme: document.querySelector('.navbar__list__item__link__theme'),
      skills: document.querySelector('.navbar__list__item__link__skills'),
      contact: document.querySelector('.navbar__list__item__link__contact'),
    };

    document.addEventListener('scroll', () => {
      const scroll = window.scrollY;

      scroll >= sectionsDistance.aboutMe && scroll < sectionsDistance.works
        ? (navItem.aboutMe.style.color = 'var(--green)')
        : (navItem.aboutMe.style.color = 'var(--gray)');

      scroll >= sectionsDistance.works && scroll < sectionsDistance.skills
        ? (navItem.works.style.color = 'var(--green)')
        : (navItem.works.style.color = 'var(--gray)');

      scroll >= sectionsDistance.skills && scroll < sectionsDistance.contact
        ? (navItem.skills.style.color = 'var(--green)')
        : (navItem.skills.style.color = 'var(--gray)');

      scroll >= sectionsDistance.contact
        ? (navItem.contact.style.color = 'var(--green)')
        : (navItem.contact.style.color = 'var(--gray)');
    });
  }, []);

  const [darkTheme, setDarkTheme] = useState(true);

  function changeTheme() {
    const html = document.querySelector('html');

    setDarkTheme(!darkTheme);

    darkTheme
      ? html.classList.add('dark-mode')
      : html.classList.remove('dark-mode');
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
            {i18next.t('navbar.aboutMe')}
          </a>
        </li>
        <li className="navbar__list__item">
          <a
            className="navbar__list__item__link navbar__list__item__link__works"
            href="#works"
          >
            {i18next.t('navbar.works')}
          </a>
        </li>
        <li className="navbar__list__item">
          <span
            onClick={changeTheme}
            className="navbar__list__item__link navbar__list__item__link__theme"
            href="#"
          >
            {i18next.t('navbar.theme')}
          </span>
        </li>
        <li className="navbar__list__item">
          <a
            className="navbar__list__item__link navbar__list__item__link__skills"
            href="#skills"
          >
            {i18next.t('navbar.skills')}
          </a>
        </li>
        <li className="navbar__list__item">
          <a
            className="navbar__list__item__link navbar__list__item__link__contact"
            href="#contact"
          >
            {i18next.t('navbar.contact')}
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
