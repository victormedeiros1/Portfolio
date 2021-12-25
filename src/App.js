import "./global/global.css";
import "./global/palette.css";

import Container from "./components/Container";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav></Nav>
      </Container>
    </div>
  );
}

export default App;
