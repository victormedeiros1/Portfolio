import React from "react";

import { SkillsStyles } from "./styles";

function Skills() {
  return (
    <SkillsStyles className="skills">
      <h3 className="skills--title">SKILLS</h3>
      <img
        className="skills--circle-s"
        alt="small circle"
        src="/images/skills.svg"
      />
    </SkillsStyles>
  );
}

export default Skills;
