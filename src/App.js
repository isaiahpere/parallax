import styled from "styled-components/macro";

import Intro from "./modules/intro";
import Projects from "./modules/projects";
import Github from "./modules/github";

const Container = styled.div`
  background-color: #111;
`;

const App = () => {
  return (
    <Container>
      <Intro />
      <Projects />
      <Github />
    </Container>
  );
};

export default App;
