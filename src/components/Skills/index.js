import React from "react";

import { SkillsStyles } from "./styles";
import i18next from "../../translates/i18next";

function Skills() {
  return (
    <SkillsStyles
      id="skills"
      className="skills"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <h3 className="skills--title">{i18next.t("skills.title")}</h3>
      <img
        className="skills--circle"
        alt="Skills Circle"
        src="./images/skills.svg"
      />
    </SkillsStyles>
  );
}

export default Skills;
