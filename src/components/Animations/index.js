import { gsap } from "gsap";
import { useEffect } from "react";
import React from "react";

// import { Container } from './styles';

function Animations() {
  useEffect(() => {
    gsap.fromTo(
      ".animations-move-left",
      {
        x: 100,
      },
      {
        delay: 1,
        x: 0,
      }
    );
    gsap.fromTo(
      ".animations-move-right",
      {
        x: -100,
        opacity: 0,
      },
      {
        delay: 1,
        x: 0,
        opacity: 1,
      }
    );
  }, []);
  return <></>;
}

export default Animations;
