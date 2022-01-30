import React from "react";

import { LanguagesMenuStyles } from "./styles";
function Languages() {
  function handleChangeLanguage(event) {
    const language = event.target.getAttribute("data-language");
    console.log(language);
    localStorage.setItem("i18nextLng", language);
    window.location.reload();
  }
  return (
    <LanguagesMenuStyles className="languages">
      <ul className="languages--list">
        <li className="languages--list--item">
          <button
            className="pt-BR languages--list--item--button"
            onClick={handleChangeLanguage}
          >
            <img
              className="languages--list--item--button--image"
              alt="pt-br"
              src="/images/languages/br.svg"
              data-language="ptBR"
            />
          </button>
        </li>
        <li className="languages--list--item">
          <button
            className="en-US languages--list--item--button"
            onClick={handleChangeLanguage}
          >
            <img
              className="languages--list--item--button--image"
              alt="en"
              src="/images/languages/usa.svg"
              data-language="enUS"
            />
          </button>
        </li>
      </ul>
    </LanguagesMenuStyles>
  );
}

export default Languages;
