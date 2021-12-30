import React from "react";

import { HeaderSectionStyles } from "./styles";

function HeaderSection({ title }) {
  return (
    <HeaderSectionStyles className="header-section">
      <img
        className="header-section--bars"
        src="./images/bars-top-b.svg"
        alt="bars-top"
      />
      <h3 className="header-section--title">{title}</h3>
      <img
        className="header-section--bars mt-15"
        src="./images/bars-bottom-b.svg"
        alt="bars-bottom"
      />
    </HeaderSectionStyles>
  );
}

export default HeaderSection;
