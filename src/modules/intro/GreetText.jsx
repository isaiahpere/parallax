import React from "react";
import styled from "styled-components/macro";
import { useWindowPosition } from "../../hooks";


const Container = styled.div`
  flex: 3;
  width: 100%;
`;

const Text = styled.h1`
  color: #333;
  font-size: 60vw;
  text-align: center;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  @media (min-width: 768px){
    font-size: 55vw;
    text-align: unset;
  }
`;

const GreetText = () => {
  const scrollPosition = useWindowPosition()

  return (
    <Container>
      <Text yOffset={scrollPosition}>Hi</Text>
    </Container>
  );
};

export default GreetText;
