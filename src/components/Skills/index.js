import React, { useState } from "react";

import {
  SkillsStyles,
  Orbit,
  Skill,
  Universe,
  ContainerSkills,
  WaveTop,
  SkillsStylesNoBackground,
} from "./styles";
import i18next from "../../translates/i18next";
function Skills() {
  const [zoom, setZoom] = useState(false);
  const screenWidth = window.screen.width;

  const universe = document.querySelector("#universe");
  const orbits = document.querySelectorAll(".orbit");
  const background = document.querySelector("#skills");

  const universeZoom = () => {
    setZoom(!zoom);

    if (zoom) {
      universe.style.transform = `scale(${screenWidth / 1000 / 6})`;
      background.style.backgroundSize = "100% 100%";

      for (let orbit of orbits) {
        orbit.style.border = "10px solid rgba(255, 255, 255, 0.1)";
      }
    } else {
      universe.style.transform = "scale(1)";
      background.style.backgroundSize = "120% 120%";

      for (let orbit of orbits) {
        orbit.style.border = "2px solid rgba(255, 255, 255, 0.1)";
      }
    }
  };

  return (
    <ContainerSkills>
      {screenWidth > 1000 ? (
        <SkillsStyles id="skills" className="skills">
          <Universe id="universe" onClick={universeZoom}>
            <h1 className="skills__title">{i18next.t("skills.title")}</h1>
            <Orbit className="orbit" size={400} speed={11}>
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
            <Orbit className="orbit" size={2000} speed={17}>
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
      ) : (
        <SkillsStylesNoBackground
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
        </SkillsStylesNoBackground>
      )}
    </ContainerSkills>

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
