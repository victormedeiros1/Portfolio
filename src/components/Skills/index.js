import React from "react";

import { SkillsStyles, Orbit, Skill, Universe } from "./styles";
import i18next from "../../translates/i18next";

function Skills() {
  return (
    <SkillsStyles id="skills" className="skills">
      <Universe>
        <h1 class="skills__title">{i18next.t("skills.title")}</h1>
        <Orbit size={400}>
          <Skill src="/images/skills/html.svg"></Skill>
        </Orbit>
        <Orbit size={800}>
          <Skill src="/images/skills/css.svg"></Skill>
        </Orbit>
        <Orbit size={1200}>
          <Skill src="/images/skills/javascript.svg"></Skill>
        </Orbit>
        <Orbit size={1600}>
          <Skill src="/images/skills/react.svg"></Skill>
        </Orbit>
        <Orbit size={2000}>
          <Skill src="/images/skills/git.svg"></Skill>
        </Orbit>
        <Orbit size={2400}>
          <Skill src="/images/skills/figma.svg"></Skill>
        </Orbit>
        <Orbit size={2800}>
          <Skill src="/images/skills/bootstrap.svg"></Skill>
        </Orbit>
      </Universe>
    </SkillsStyles>

    // Old COmponent
    // <SkillsStyles
    //   id="skills"
    //   className="skills"
    //   data-aos="zoom-in"
    //   data-aos-delay="300"
    // >
    //   <h3 className="skills--title">{i18next.t("skills.title")}</h3>
    //   <img
    //     className="skills--circle"
    //     alt="Skills Circle"
    //     src="./images/skills.svg"
    //   />
    // </SkillsStyles>
  );
}

export default Skills;
