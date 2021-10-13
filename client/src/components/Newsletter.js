import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  background-color: blanchedalmond;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  font-weight: 600;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  flex: 8;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your Email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
