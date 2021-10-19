import React from "react";
import components from "../../styles/LoginStyles";

const { Agreement, Button, Container, Form, Input, Title, Wrapper } =
  components;

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
          <Input placeholder="Password" required />
          <Input placeholder="Confirm Password" required />
          <Agreement>
            By Creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>REGISTER NOW</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
