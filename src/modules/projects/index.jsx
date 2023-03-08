import React from "react";
import styled from "styled-components/macro";
import { useWindowPosition } from "../../hooks";

import ProjectOne from "./ProjectOne";
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30vh;
  padding: 0px 60px;
  /* overflow: hidden; */
`;

const SectionTitle = styled.h1`
  padding-top: 60px;
  font-size: 10vw;
  color: #686868;
  ${props => props.position && `
    transform: translateY(calc(100vh - ${props.position * 0.3}px));
  `}
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
