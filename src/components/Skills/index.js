import React from "react";

import { SkillsStyles, Orbit, Skill, Universe } from "./styles";
import i18next from "../../translates/i18next";

function Skills() {
  return (
    <SkillsStyles id="skills" className="skills">
      <Universe>
        <h1 class="skills__title">{i18next.t("skills.title")}</h1>
        <Orbit size={400} speed={15}>
          <Skill src="/images/skills/html.svg" />
        </Orbit>
        <Orbit size={800} speed={20}>
          <Skill src="/images/skills/css.svg" />
        </Orbit>
        <Orbit size={1200} speed={12}>
          <Skill src="/images/skills/javascript.svg" />
        </Orbit>
        <Orbit size={1600} speed={10}>
          <Skill src="/images/skills/react.svg" />
        </Orbit>
        <Orbit size={2000} speed={28}>
          <Skill src="/images/skills/git.svg" />
        </Orbit>
        <Orbit size={2400} speed={22}>
          <Skill src="/images/skills/figma.svg" />
        </Orbit>
        <Orbit size={2800} speed={30}>
          <Skill src="/images/skills/bootstrap.svg" />
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
