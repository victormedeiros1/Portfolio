import React, { useEffect } from "react";

// Sections
import Container from "../components/Container";
import Main from "../components/Main";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Works from "../components/Works";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import MetaTagsHead from "../components/MetaTagsHead";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Container>
      <MetaTagsHead />
      <Nav></Nav>
      <Main></Main>
      <AboutMe></AboutMe>
      <Works></Works>
      <Skills></Skills>
      <Contact></Contact>
    </Container>
  );
}

export default Home;
