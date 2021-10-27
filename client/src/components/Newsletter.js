import { Send } from "@material-ui/icons";
import React from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "../styles/NewsletterStyles";

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
