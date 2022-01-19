import React from "react";

import { AboutMeStyles } from "./styles";
import HeaderSection from "../HeaderSection";
function AboutMe() {
  return (
    <AboutMeStyles id="about-me" className="about-me">
      <div className="about-me--texts">
        <HeaderSection title="ABOUT ME" />
        <div className="about-me--profile-picture__mobile">
          <img
            className="about-me--profile-picture__mobile--photo"
            alt="José Victor"
            src="./images/profile-picture.png"
          />
        </div>
        <h4
          className="about-me--texts--title"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Hi, I’m José Victor. Nice to meet you!
        </h4>
        <p
          className="about-me--texts--paragraph"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          I started programming in 2017 and graduated as a Computer Technician
          at the IFRN. I liked to program, it was an interesting challenge, but
          I took a real rush when I got to the web development part.
        </p>
        <p
          className="about-me--texts--paragraph"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          When I got to know the front-end and saw the infinite sea of
          possibilities, I fell in love, I always liked the visual and creative
          side of things, so I started to interact with the community, working
          as a team, meeting and exchanging knowledge with new people.
          essential.
        </p>
        <p
          className="about-me--texts--paragraph"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Today, I'm studying Information Systems at UFRN. I want to be a great
          developer and I am every day studying and striving more and more to
          become one.
        </p>
      </div>
      <div className="about-me--profile-picture__desktop" data-aos="fade-right">
        <img
          className="about-me--profile-picture__desktop--photo"
          alt="José Victor"
          src="./images/profile-picture.png"
        />
      </div>
    </AboutMeStyles>
  );
}

export default AboutMe;
