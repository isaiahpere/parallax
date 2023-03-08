import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 100vh;
  background: url("./images/bg1.png");
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 8vw;
  color: #6d6b6b;
`;

const Job = () => {
  return (
    <Container>
      <Title>A Software Engineer</Title>
    </Container>
  );
};

export default Job;
