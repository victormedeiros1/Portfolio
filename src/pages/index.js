import React, { useEffect } from "react";

// Sections
import Main from "../components/Main";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Works from "../components/Works";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import LanguagesMenu from "../components/LanguagesMenu";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
    });
  }, []);

  return (
    <>
      <LanguagesMenu />
      <Nav />
      <Main />
      <AboutMe />
      <Works />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
