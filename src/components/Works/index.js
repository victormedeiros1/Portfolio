import React from "react";

import { WorksStyles } from "./styles";
import HeaderSection from "../HeaderSection";

function Works() {
  return (
    <WorksStyles className="works">
      <HeaderSection title="WORKS" />
      <div className="works--row">
        <div className="works--row--item--omega works--row--item works--row--item__size-1 mr-50">
          <img
            className="works--row--item--omega--image"
            alt="Omega Movimento Luz Livre"
            src="/images/works/omega.png"
          />
        </div>
        <div className="works--row--item--netflix works--row--item works--row--item__size-2">
          <img
            className="works--row--item--omega--image"
            alt="Almanque Tudum Netflix"
            src="/images/works/netflix.png"
          />
        </div>
      </div>
      <div className="works--row mt-50">
        <div className="works--row--item--spotify works--row--item works--row--item__size-2">
          <img
            className="works--row--item--omega--image"
            alt="Spotify Top Podcasters"
            src="/images/works/spotify.png"
          />
        </div>
        <div className="works--row--item--other works--row--item works--row--item__size-1 ml-50"></div>
      </div>
    </WorksStyles>
  );
}

export default Works;
