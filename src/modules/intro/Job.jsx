import React from "react";
import styled from "styled-components/macro";
import { useWindowPosition } from "../../hooks";

const Container = styled.div`
  height: 100vh;
  background: url("./images/bg1.png");
  display: flex;
  align-items: center;
  overflow: hidden;
  
  @media (min-width: 1440px){
    background-position-y: ${props => props.yPosition * 0.6}px;
  }

`;

// subtract 200vh so we can subtract from the yPosition 
// This will allow the yPosition to basically start at zero
// when yOffset is on this section
const Title = styled.h2`
  font-size: 8vw;
  color: #6d6b6b;

  @media (min-width: 1440px){
    ${props => props.yPosition && `
    transform: translateX(calc(-220vh + ${props.yPosition * 1.2}px));
  `}
  }

`;

const Job = () => {
  const scrollPosition = useWindowPosition()
  return (
    <Container yPosition={scrollPosition}>
      <Title yPosition={scrollPosition}>A Software Engineer</Title>
    </Container>
  );
};

export default Job;
