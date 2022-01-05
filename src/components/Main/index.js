import React from "react";

import { MainStyles } from "./styles";
import BigLogo from "../BigLogo";

function Main() {
  return (
    <MainStyles id="main" className="main">
      <header className="main--header">
        <div className="main--header--left animations-move-right">
          <h1 className="main--header--left--h1">
            JOSÉ
            <br /> VICTOR
          </h1>
          <h2 className="main--header--left--h2">FRONT END DEVELOPER</h2>
          <a className="main--header--left--discover" href="#about-me">
            DISCOVER
          </a>
        </div>
        <div className="main--header--right">
          <BigLogo></BigLogo>
        </div>
      </header>
    </MainStyles>
  );
}

export default Main;
