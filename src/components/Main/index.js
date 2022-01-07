import React from "react";

import { MainStyles } from "./styles";
import BigLogo from "../BigLogo";

import "../../Animations";

function Main() {
  return (
    <MainStyles id="main" className="main">
      <header className="main--header">
        <div className="main--header--left">
          <h1 className="main--header--left--h1 TL-move-right">
            JOSÉ
            <br /> VICTOR
          </h1>
          <h2 className="main--header--left--h2 TL-move-right">
            FRONT END DEVELOPER
          </h2>
          <a
            className="main--header--left--discover TL-move-right"
            href="#about-me"
          >
            DISCOVER
          </a>
        </div>
        <div className="main--header--right TL-move-left">
          <BigLogo></BigLogo>
        </div>
      </header>
    </MainStyles>
  );
}

export default Main;
