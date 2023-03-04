import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 100vh;
  background-color: #3e223e;
`;

const Text = styled.h2`
  font-size: 15vw;
  line-height: 100vh;
  text-align: center;
  color: #807e7e;
  cursor: default;
`;

const Name = () => {
  return (
    <Container>
      <Text>I'm Isaiah</Text>
    </Container>
  );
};

export default Name;
