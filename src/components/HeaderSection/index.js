import React from "react";

import { HeaderSectionStyles } from "./styles";

function HeaderSection({ title }) {
  return (
    <HeaderSectionStyles class="header-section">
      <img
        class="header-section--bars"
        src="/images/bars-top-xl.svg"
        alt="bars-top"
      />
      <h3 class="header-section--title">{title}</h3>
      <img
        class="header-section--bars mt-15"
        src="/images/bars-bottom-xl.svg"
        alt="bars-bottom"
      />
    </HeaderSectionStyles>
  );
}

export default HeaderSection;
