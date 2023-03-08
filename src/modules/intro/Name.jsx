import React from "react";
import styled from "styled-components/macro";
import { useWindowPosition } from "../../hooks";

const Container = styled.div`
  height: 100vh;
  background-color: #3e223e;
  overflow: hidden;
`;

const Text = styled.h2`
  font-size: 15vw;
  line-height: 100vh;
  text-align: flex-start;
  color: #807e7e;
  cursor: default;

  @media (min-width: 1440px){
    ${props => props.scrollPosition && `
    transform: translateX(calc(160vh - ${props.scrollPosition * 1.2}px));
  `}
  }
  
`;

const Name = () => {
  const yPosition = useWindowPosition()

  return (
    <Container>
      <Text scrollPosition={yPosition}>I'm Isaiah</Text>
    </Container>
  );
};

export default Name;
