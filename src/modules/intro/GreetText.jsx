import React from "react";
import styled from "styled-components/macro";
import { useWindowPosition } from "../../hooks";


const Container = styled.div`
  flex: 3;
  width: 100%;
`;

const Text = styled.h1`
  color: #333;
  font-size: 55vw;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  ${props => props.yOffset && `
    transform: translateY(${props.yOffset * 1.2}px);
  `}

  @media (min-width: 1440px){
    padding-top: 60px;
  }
`;

const GreetText = () => {

  const scrollPosition = useWindowPosition()
  console.log(scrollPosition)
  

  return (
    <Container>
      <Text yOffset={scrollPosition}>Hi</Text>
    </Container>
  );
};

export default GreetText;
