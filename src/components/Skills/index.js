import React, { useState, useEffect } from "react";

import {
  SkillsStyles,
  Orbit,
  Skill,
  Universe,
  ContainerSkills,
  SkillsStylesNoBackground,
  Meteors,
  Meteor,
} from "./styles";
import i18next from "../../translates/i18next";
function Skills() {
  const [zoom, setZoom] = useState(false);
  const screenWidth = window.screen.width;

  const universeZoom = () => {
    const universe = document.querySelector("#universe");
    const orbits = document.querySelectorAll(".orbit");
    const background = document.querySelector("#skills");

    setZoom(!zoom);

    if (zoom) {
      universe.style.transform = "scale(1)";
      background.style.backgroundSize = "120% 120%";

      for (let orbit of orbits) {
        orbit.style.border = "2px solid rgba(255, 255, 255, 0.1)";
      }
    } else {
      universe.style.transform = `scale(${screenWidth / 1000 / 6})`;
      background.style.backgroundSize = "100% 100%";

      for (let orbit of orbits) {
        orbit.style.border = "10px solid rgba(255, 255, 255, 0.1)";
      }
    }
  };

  return (
    <ContainerSkills>
      {screenWidth > 1000 ? (
        <SkillsStyles id="skills" className="skills">
          <Universe id="universe" onClick={universeZoom}>
            <Meteors>
              <Meteor className="meteor-1" src="/images/skills/meteor1.png" />
              <Meteor className="meteor-2" src="/images/skills/meteor2.png" />
              <Meteor className="meteor-3" src="/images/skills/meteor3.png" />
              <Meteor className="meteor-4" src="/images/skills/meteor4.png" />
              <Meteor className="meteor-5" src="/images/skills/meteor5.png" />
              <Meteor className="meteor-6" src="/images/skills/meteor6.png" />
            </Meteors>
            <h1 className="skills__title">{i18next.t("skills.title")}</h1>
            <Orbit className="orbit" size={400} speed={11}>
              <Skill src="/images/skills/html.svg" rotateSpeed={11} />
            </Orbit>
            <Orbit className="orbit" size={800} speed={20}>
              <Skill src="/images/skills/css.svg" rotateSpeed={20} />
            </Orbit>
            <Orbit className="orbit" size={1200} speed={12}>
              <Skill src="/images/skills/javascript.svg" rotateSpeed={12} />
            </Orbit>
            <Orbit className="orbit" size={1600} speed={10}>
              <Skill src="/images/skills/react.svg" rotateSpeed={10} />
            </Orbit>
            <Orbit className="orbit" size={2000} speed={17}>
              <Skill src="/images/skills/git.svg" rotateSpeed={17} />
            </Orbit>
            <Orbit className="orbit" size={2400} speed={22}>
              <Skill src="/images/skills/figma.svg" rotateSpeed={22} />
            </Orbit>
            <Orbit className="orbit" size={2800} speed={30}>
              <Skill src="/images/skills/bootstrap.svg" rotateSpeed={30} />
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
          <h3 className="skills__title">{i18next.t("skills.title")}</h3>
          <img
            className="skills__circle"
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
    //   <h3 className="skills__title">{i18next.t("skills.title")}</h3>
    //   <img
    //     className="skills__circle"
    //     alt="Skills Circle"
    //     src="./images/skills.svg"
    //   />
    // </SkillsStyles>
  );
}

export default Skills;
