import React from "react";

import { WorksStyles } from "./styles";
import HeaderSection from "../HeaderSection";

function Works() {
  return (
    <WorksStyles id="works" className="works">
      <HeaderSection title="WORKS" />
      {/* Row 1 */}
      <div className="works--row mb-50">
        {/* Omega */}
        <div className="works--row--item works--row--item__size-1 works--row--item__rose mr-50 mb-50-sm">
          <h4 className="works--row--item--title">
            Movimento <br />
            Luz Livre
          </h4>
          <h5 className="works--row--item--subtitle">
            Omega <br /> 2021
          </h5>
          <img
            alt="Omega Movimento Luz Livre"
            className="works--row--item--image"
            src="/images/works/omega.png"
          />
        </div>

        {/* Netflix */}
        <div className="works--row--item works--row--item__size-2 works--row--item__blue mb-50-sm">
          <h4 className="works--row--item--title">
            Almanaque <br />
            Tudum
          </h4>
          <h5 className="works--row--item--subtitle">
            Netflix <br /> 2021
          </h5>
          <img
            alt="Almanaque Tudum Netflix"
            className="works--row--item--image"
            src="/images/works/netflix.png"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="works--row">
        {/* Spotify */}
        <div className="works--row--item works--row--item__size-2 works--row--item__yellow mb-50-sm">
          <h4 className="works--row--item--title">
            Top <br />
            Podcasters
          </h4>
          <h5 className="works--row--item--subtitle">
            Spotify <br /> 2021
          </h5>
          <img
            alt="Spotify Top Podcasters"
            className="works--row--item--image"
            src="/images/works/spotify.png"
          />
        </div>

        {/* Coming Soon */}
        <div className="works--row--item works--row--item__size-1 works--row--item__green ml-50">
          <img
            className="works--row--item--logo"
            alt="Coming Soon"
            src="/images/logo.svg"
          />
          <h4
            style={{ marginLeft: "-5px" }}
            className="works--row--item--title"
          >
            COMING SOON
          </h4>
        </div>
      </div>
    </WorksStyles>
  );
}

export default Works;
