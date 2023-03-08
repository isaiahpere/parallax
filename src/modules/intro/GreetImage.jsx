import React from "react";
import styled from "styled-components/macro";
import { useWindowPosition } from "../../hooks";

const Container = styled.div`
  flex: 1;
  width: 100%;


  @media (min-width: 1440px){
    ${props => props.yPosition && `
    transform: translate(${props.yPosition * 0.4}px, ${props.yPosition * 0.6}px);
  `}
  }
`;

const Image = styled.img`
  width: 100%;
`;

const GreetImage = () => {

  const scrollPosition = useWindowPosition()

  return (
    <Container yPosition={scrollPosition}>
      <Image src="./images/person.png" alt="" />
    </Container>
  );
};

export default GreetImage;
