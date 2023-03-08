import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  flex: 3;
  width: 100%;
`;

const Text = styled.h1`
  color: #333;
  font-size: 60vw;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`;

const GreetText = () => {
  return (
    <Container>
      <Text>Hi</Text>
    </Container>
  );
};

export default GreetText;
