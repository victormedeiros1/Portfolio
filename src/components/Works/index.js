import React from "react";

import { WorksStyles } from "./styles";
import HeaderSection from "../HeaderSection";
import i18next from "../../translates/i18next";
import Container from "../Container";

function Works() {
  return (
    <Container>
      <WorksStyles id="works" className="works">
        <HeaderSection title={i18next.t("works.title")} />
        <div className="works__row mb-50">
          <div
            className="works__row__item works__row__item__size-1 works__row__item__rose mr-50 mb-50-sm"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h4 className="works__row__item__title">
              Movimento <br />
              Luz Livre
            </h4>
            <h5 className="works__row__item__subtitle">
              Omega <br /> 2021
            </h5>
            <img
              alt="Omega Movimento Luz Livre"
              className="works__row__item__image"
              src="./images/works/omega.png"
            />
          </div>
          <div
            className="works__row__item works__row__item__size-2 works__row__item__blue mb-50-sm"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <h4 className="works__row__item__title">
              Almanaque <br />
              Tudum
            </h4>
            <h5 className="works__row__item__subtitle">
              Netflix <br /> 2021
            </h5>
            <img
              alt="Almanaque Tudum Netflix"
              className="works__row__item__image"
              src="./images/works/netflix.png"
            />
          </div>
        </div>
        <div className="works__row">
          <div
            className="works__row__item works__row__item__size-2 works__row__item__yellow mb-50-sm"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <h4 className="works__row__item__title">
              Top <br />
              Podcasters
            </h4>
            <h5 className="works__row__item__subtitle">
              Spotify <br /> 2021
            </h5>
            <img
              alt="Spotify Top Podcasters"
              className="works__row__item__image"
              src="./images/works/spotify.png"
            />
          </div>
          <div
            className="works__row__item works__row__item__size-1 works__row__item__purple ml-50"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <img
              className="works__row__item__logo"
              alt="Coming Soon"
              src="./images/logo.svg"
            />
            <h4
              style={{ marginLeft: "-5px" }}
              className="works__row__item__title"
            >
              {i18next.t("works.comingSoon")}
            </h4>
          </div>
        </div>
      </WorksStyles>
    </Container>
  );
}

export default Works;
