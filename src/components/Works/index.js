import React from "react";

import { WorksStyles } from "./styles";
import HeaderSection from "../HeaderSection";

function Works() {
  return (
    <WorksStyles id="works" className="works">
      <HeaderSection title="WORKS" />
      <div className="works--row">
        <div className="works--row--item--omega works--row--item works--row--item__size-1 mr-50">
          <div className="works--row--item--header">
            <h4 className="works--row--item--header--title">
              Movimento <br />
              Luz Livre
            </h4>
            <h5 className="works--row--item--header--subtitle">
              Omega <br />
              2021
            </h5>
          </div>
          <img
            className="works--row--item--omega--image"
            alt="Omega Movimento Luz Livre"
            src="/images/works/omega.png"
          />
        </div>
        <div className="works--row--item--netflix works--row--item works--row--item__size-2">
          <div className="works--row--item--header">
            <h4 className="works--row--item--header--title">
              Almanaque <br />
              Tudum
            </h4>
            <h5 className="works--row--item--header--subtitle">
              Netflix <br />
              2021
            </h5>
          </div>
          <img
            className="works--row--item--omega--image"
            alt="Almanque Tudum Netflix"
            src="/images/works/netflix.png"
          />
        </div>
      </div>
      <div className="works--row mt-50">
        <div className="works--row--item--spotify works--row--item works--row--item__size-2">
          <div className="works--row--item--header">
            <h4 className="works--row--item--header--title">
              Top <br />
              Podcasters
            </h4>
            <h5 className="works--row--item--header--subtitle">
              Spotify <br />
              2021
            </h5>
          </div>
          <img
            className="works--row--item--omega--image"
            alt="Spotify Top Podcasters"
            src="/images/works/spotify.png"
          />
        </div>
        <div className="works--row--item--other works--row--item works--row--item__size-1 ml-50">
          <div className="works--row--item--header works--row--item--other--content">
            <img alt="logo" width="64px" src="/images/logo.svg" />
            <p className="works--row--item--header--title">COMING SOON</p>
          </div>
        </div>
      </div>
    </WorksStyles>
  );
}

export default Works;
