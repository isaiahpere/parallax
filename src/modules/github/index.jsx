import React from "react";
import styled from "styled-components/macro";


import { boxList } from "../../data/box";

const Section = styled.section`
  height: 100vh;
  background-color: #302f2f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: #625d5d;
`;

const SectionTitle = styled.h1`
  font-size: 60px;
`
const Box = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background-color: #242424;
  transition: all 0.8s ease;

  &:nth-child(2n + 1){
    ${props => props.active && `
      background-color: #195b2c;
    `}
  }
  &:nth-child(2n){
    ${props => props.active && `
      background-color: #063f24;
    `}
  }
`

const GithubChart = styled.div`
  width: 820px;

  &:hover ${Box}:nth-child(2n) {
    background-color: #063f24;
  }
  &:hover ${Box}:nth-child(3n) {
    background-color: #195b2c;
  }

  @media (max-width: 1023px){
    display: none;
  }
`

const DatesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DateMonth = styled.span``

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

`

const GithubTitle = styled.div`
  font-size: 100px;
  text-align: center;
`


const Github = () => {
  
  // creates boxes to show github activity message
  const createBoxes = () => {
    let boxes = []
    for (let i = 0; i < 365; i++ ){
      let el = <Box key={i} active={boxList.includes(i)}/>
      boxes.push(el)
    }
    return boxes
  }

  return (
    <Section>
      <SectionTitle>Checkout My Github</SectionTitle>
      <GithubChart>
        <DatesContainer>
          <DateMonth>Jan</DateMonth>
          <DateMonth>Feb</DateMonth>
          <DateMonth>Mar</DateMonth>
          <DateMonth>Apr</DateMonth>
          <DateMonth>May</DateMonth>
          <DateMonth>Jun</DateMonth>
          <DateMonth>Jul</DateMonth>
          <DateMonth>Aug</DateMonth>
          <DateMonth>Sep</DateMonth>
          <DateMonth>Oct</DateMonth>
          <DateMonth>Nov</DateMonth>
          <DateMonth>Dec</DateMonth>
        </DatesContainer>
        <BoxContainer>
          {createBoxes()}
        </BoxContainer>
        <GithubTitle>ON GITHUB</GithubTitle>
      </GithubChart>
    </Section>
  )
};

export default Github;
