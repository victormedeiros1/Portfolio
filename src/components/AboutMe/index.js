import React from "react";

import { AboutMeStyles } from "./styles";
import HeaderSection from "../HeaderSection";
function AboutMe({ children }) {
  return (
    <AboutMeStyles class="about-me">
      <div className="about-me--texts">
        <HeaderSection title="ABOUT ME" />
        <h4 class="about-me--texts--title">
          Hi, I’m José Victor. Nice to meet you!
        </h4>
        <p className="about-me--texts--paragraph">
          I started programming in 2017 and graduated as a Computer Technician
          at the IFRN. I liked to program, it was an interesting challenge, but
          I took a real rush when I got to the web development part.
        </p>
        <p className="about-me--texts--paragraph">
          When I got to know the front-end and saw the infinite sea of
          possibilities, I fell in love, I always liked the visual and creative
          side of things, so I started to interact with the community, working
          as a team, meeting and exchanging knowledge with new people.
          essential.
        </p>
        <p className="about-me--texts--paragraph">
          Today, I'm studying Information Systems at UFRN. I want to be a great
          developer and I am every day studying and striving more and more to
          become one.
        </p>
      </div>
      <div className="about-me--profile-picture">
        <img
          className="about-me--profile-picture--photo"
          alt="profile picture"
          src="/images/profile-picture.png"
        />
      </div>
    </AboutMeStyles>
  );
}

export default AboutMe;
