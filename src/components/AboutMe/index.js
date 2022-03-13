import React from "react";

import { AboutMeStyles } from "./styles";
import HeaderSection from "../HeaderSection";
import i18next from "../../translates/i18next";
import Container from "../Container";

function AboutMe() {
  return (
    <Container>
      <AboutMeStyles id="about-me" className="about-me">
        <div className="about-me--texts">
          <HeaderSection title={i18next.t("aboutMe.title")} />
          <div className="about-me--profile-picture__mobile">
            <img
              className="about-me--profile-picture__mobile--photo"
              alt="José Victor"
              src="./images/profile-picture.png"
            />
          </div>
          <h4
            className="about-me--texts--title"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {i18next.t("aboutMe.subtitle")}
          </h4>
          <p
            className="about-me--texts--paragraph"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {i18next.t("aboutMe.firstParagraph")}
          </p>
          <p
            className="about-me--texts--paragraph"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            {i18next.t("aboutMe.secondParagraph")}
          </p>
          <p
            className="about-me--texts--paragraph"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            {i18next.t("aboutMe.thirdParagraph")}
          </p>
        </div>
        <div
          className="about-me--profile-picture__desktop"
          data-aos="fade-right"
        >
          <img
            className="about-me--profile-picture__desktop--photo"
            alt="José Victor"
            src="./images/profile-picture.png"
          />
        </div>
      </AboutMeStyles>
    </Container>
  );
}

export default AboutMe;
