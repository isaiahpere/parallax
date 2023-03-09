import React from "react";
import styled from "styled-components/macro";
import GreetImage from "./GreetImage";
import GreetText from "./GreetText";
import Job from "./Job";
import Name from "./Name";

const Section = styled.section``;

const Greet = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 768px){
    flex-direction: row;
  }
`;

const Intro = () => {
  return (
    <Section>
      <Greet>
        <GreetText />
        <GreetImage />
      </Greet>
      <Name />
      <Job />
    </Section>
  );
};

export default Intro;
