import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const GreetImage = () => {
  return (
    <Container>
      <Image src="./images/person.png" alt="" />
    </Container>
  );
};

export default GreetImage;
