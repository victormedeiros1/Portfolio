import React from "react";
import { MainStyles } from "./styles";
import BigLogo from "../BigLogo";
import i18next from "../../translates/i18next";
import Container from "../Container";
function Main() {
  return (
    <Container>
      <MainStyles id="main" className="main">
        <header className="main--header">
          <div className="main--header--left">
            <h1 className="main--header--left--h1" data-aos="fade-right">
              {i18next.t("main.title")}
            </h1>
            <h2
              className="main--header--left--h2"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {i18next.t("main.subtitle")}
            </h2>
            <a
              className="main--header--left--discover"
              href="#about-me"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              {i18next.t("main.discover")}
            </a>
          </div>
          <div className="main--header--right">
            <BigLogo />
          </div>
        </header>
      </MainStyles>
    </Container>
  );
}

export default Main;
