import React from "react";
import styled from "styled-components";
import components from "../../styles/LoginStyles";

const { Button, Form, Input, Title, Wrapper } = components;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("images/login1.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Link = styled.a`
  cursor: pointer;
  color: #1877f2;

  &:hover{
      text-decoration: underline;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN HERE</Title>
        <Form>
          <Input placeholder="Username" required />
          <Input placeholder="Password" required />

          <Button signup>SIGN IN</Button>
          <LinkContainer>
            <Link>Forgot Password?</Link>
            <Link>Don't have an account? Signup here</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
}
