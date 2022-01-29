import React from "react";

import { LanguageStyles } from "./styles";

function Languages() {
  return (
    <LanguageStyles className="languages">
      <ul className="languages--list">
        <li className="languages--list--item">
          <button className="languages--list--item--button">
            <img
              className="languages--list--item--button--image"
              alt="pt-br"
              src="/images/languages/br.svg"
            />
          </button>
        </li>
        <li className="languages--list--item">
          <button className="languages--list--item--button">
            <img
              className="languages--list--item--button--image"
              alt="en"
              src="/images/languages/usa.svg"
            />
          </button>
        </li>
      </ul>
    </LanguageStyles>
  );
}

export default Languages;
