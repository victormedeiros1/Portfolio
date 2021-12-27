import "./global/global.css";
import "./global/theme.css";

import Container from "./components/Container";
import Main from "./components/Main";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav></Nav>
        <Main></Main>
        <AboutMe></AboutMe>
      </Container>
    </div>
  );
}

export default App;
