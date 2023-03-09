import React from 'react'
import styled from 'styled-components/macro'
import { useWindowPosition } from '../../hooks'

const Section = styled.div` 
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  overflow: hidden;
 
  @media (min-width: 1024px){
    height: 100vh;
    flex-direction: row;
    margin: 0;
  }
`

const Phone = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  order: 2;

  @media (min-width: 1440px){
    justify-content: flex-start;
    ${props => props.position && `
    transform: translateX(calc(340vh - ${props.position * 0.8}px));
  `}
  }
`

const PhoneCaseContainer = styled.div`
  position: relative;
`

const PhoneImageContainer= styled.div`
  width: 100%;
  height: 100%;
`

const PhoneCase = styled.img`
  /* width: 100%;
  height: 100%; */
  
`

const ScreenContainer = styled.div`
  position: absolute; 
  background-color: white;
  top: 17px;
  left: 18px;
  width: 264px;
  height: 567px;
  border-radius: 28px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
  overflow: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
  
`

const ScreenImage = styled.img`
  width: 100%;
`

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  order: 1;
  color: #757171;
  padding-top: 10px;

  @media (min-width: 768px){
    padding: 0;
    gap: 50px;
  }
`

const DetailsTitle = styled.h1`
  font-size: 5vw;
`

const Description = styled.p`
  font-size: 12px;
  text-align: justify;
  line-height: 16px;


  @media (min-width: 1024px){
    font-size: 16px;
    line-height: 30px;
  }
`

const Button = styled.button`
  position: relative;
  padding: 10px 30px;
  background-color: transparent;
  border: 1px solid #555;
  color: #555;
  overflow: hidden;
  cursor: pointer;
  margin: 30px 0px;

  &::after {
    content: "View Demo";
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    position: absolute;
    top: 0;
    left: -100%;
    background-color: #636363;
    color: #242424;
    font-weight: 500;
    transition: left 0.6s ease-in-out;
  }

  &:hover::after{
    left: 0;
  }

  @media (min-width: 1024px){
    margin: 0;
  }
`

const ProjectOne= () => {
  const position = useWindowPosition()
  return (
    <Section>
      <Phone position={position}>
        <PhoneCaseContainer>
          <PhoneImageContainer>
          <PhoneCase src="./images/phone.png" alt=""/>
          </PhoneImageContainer>
          <ScreenContainer>
            <ScreenImage src="./images/apple.png" alt="" />
          </ScreenContainer>
        </PhoneCaseContainer>
      </Phone>
      <Details>
        <DetailsTitle>Apple Clone</DetailsTitle>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat sit quam dolore saepe ad magni fugit doloribus omnis vero. 
          Esse placeat cupiditate facere consequatur reiciendis sequi velit ab nulla a.
          Consequatur, ullam voluptates neque deleniti eius voluptate iste modi quod 
          optio nam fugiat sequi exercitationem maxime incidunt! Repellat porro 
          nihil saepe ad illum suscipit rem consequatur, totam deleniti a harum.
        </Description>
        <Button>Learn More</Button>
      </Details>
    </Section>
  )
}

export default ProjectOne