import React from "react";
import { Link } from "react-router-dom";
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "../../styles/LoginStyles";

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" required />
          <Input placeholder="Last Name" required />
          <Input placeholder="Username" required />
          <Input placeholder="Email" required />
          <Input placeholder="Password" required type="password" />
          <Input placeholder="Confirm Password" required type="password" />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Link to="/login">
            <Button>REGISTER NOW</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
