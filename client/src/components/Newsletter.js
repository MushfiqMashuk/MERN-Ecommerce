import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 60vh;
    background-color: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1``;
const Description = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favourite products.</Description>
      <InputContainer>
        <Input placeholder="Your Email"></Input>
        <Button>
            <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
