import React, { useState } from "react";

import { SkillsStyles, Orbit, Skill, Universe } from "./styles";
import i18next from "../../translates/i18next";

function Skills() {
  const [zoom, setZoom] = useState(false);

  const universeZoom = () => {
    console.log("Clicked");
    console.log(zoom);
    const universe = document.querySelector("#universe");
    const orbits = document.querySelectorAll(".orbit");
    setZoom(!zoom);

    if (zoom) {
      universe.style.transform = "scale(0.3)";

      for (let orbit of orbits) {
        orbit.style.border = "6px solid red";
      }
    } else {
      universe.style.transform = "scale(1)";
    }
  };

  return (
    <SkillsStyles id="skills" className="skills">
      <Universe id="universe" onClick={universeZoom}>
        <h1 className="skills__title">{i18next.t("skills.title")}</h1>
        <Orbit className="orbit" size={400} speed={15}>
          <Skill src="/images/skills/html.svg" />
        </Orbit>
        <Orbit className="orbit" size={800} speed={20}>
          <Skill src="/images/skills/css.svg" />
        </Orbit>
        <Orbit className="orbit" size={1200} speed={12}>
          <Skill src="/images/skills/javascript.svg" />
        </Orbit>
        <Orbit className="orbit" size={1600} speed={10}>
          <Skill src="/images/skills/react.svg" />
        </Orbit>
        <Orbit className="orbit" size={2000} speed={28}>
          <Skill src="/images/skills/git.svg" />
        </Orbit>
        <Orbit className="orbit" size={2400} speed={22}>
          <Skill src="/images/skills/figma.svg" />
        </Orbit>
        <Orbit className="orbit" size={2800} speed={30}>
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
