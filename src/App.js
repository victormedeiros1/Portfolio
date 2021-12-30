import "./global/global.css";
import "./global/theme.css";
import Container from "./components/Container";
import Main from "./components/Main";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav></Nav>
        <Main></Main>
        <AboutMe></AboutMe>
        <Works></Works>
        <Skills></Skills>
        <Contact></Contact>
      </Container>
    </div>
  );
}

export default App;
