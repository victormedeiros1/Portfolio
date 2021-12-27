import React from "react";

import { AboutMeStyles } from "./styles";
import HeaderSection from "../HeaderSection";
function AboutMe({ children }) {
  return (
    <AboutMeStyles>
      <HeaderSection title="ABOUT ME" />
    </AboutMeStyles>
  );
}

export default AboutMe;
