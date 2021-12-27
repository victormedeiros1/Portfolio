import React from "react";

import { WorksStyles } from "./styles";
import HeaderSection from "../HeaderSection";

function Works() {
  return (
    <WorksStyles className="works">
      <HeaderSection title="WORKS" />
      <div className="works--row">
        <div className="works--row--item__size-1 works--row--item"></div>
        <div className="works--row--item__size-2 works--row--item"></div>
      </div>
      <div className="works--row">
        <div className="works--row--item__size-2 works--row--item"></div>
        <div className="works--row--item__size-1 works--row--item"></div>
      </div>
    </WorksStyles>
  );
}

export default Works;
