import React from "react";
import styled from "styled-components/macro";
import { useWindowPosition } from "../../hooks";

import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  padding: 0px 30px;

  @media (min-width: 1024px){
    padding: 0px 60px;
    gap: 15vh;
  }
`;

const SectionTitle = styled.h1`
  padding-top: 60px;
  font-size: 8vw;
  color: #686868;

  @media (min-width: 1440px){
  /* ${props => props.position && `
    transform: translateY(${props.position * 0.4}px);
  `} */
  }
`

const Projects = () => {
  const position = useWindowPosition()

  return (
    <Section>
      <SectionTitle position={position}>Here are some of my projects</SectionTitle>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </Section>
  )
};

export default Projects;
