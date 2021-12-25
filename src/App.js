import "./global/global.css";
import "./global/palette.css";

import Container from "./components/Container";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav></Nav>
        <Main></Main>
      </Container>
    </div>
  );
}

export default App;
