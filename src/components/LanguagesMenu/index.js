import React from "react";

import { LanguagesMenuStyles } from "./styles";
function Languages() {
  function handleChangeLanguage(event) {
    const language = event.target.getAttribute("data-language");

    localStorage.setItem("i18nextLng", language);
    window.location.reload();
  }
  return (
    <LanguagesMenuStyles className="languages">
      <ul className="languages--list">
        <li className="languages--list--item">
          <button
            className="languages--list--item--button"
            onClick={handleChangeLanguage}
          >
            <img
              className="languages--list--item--button--image"
              src="/images/languages/br.svg"
              alt="ptBR"
              data-language="ptBR"
            />
          </button>
        </li>
        <li className="languages--list--item">
          <button
            className="languages--list--item--button"
            onClick={handleChangeLanguage}
          >
            <img
              className="languages--list--item--button--image"
              src="/images/languages/usa.svg"
              alt="enUS"
              data-language="enUS"
            />
          </button>
        </li>
      </ul>
    </LanguagesMenuStyles>
  );
}

export default Languages;
