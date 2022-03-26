import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";
import { Button, Form, Input, Title, Wrapper } from "../../styles/LoginStyles";

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

  &:hover {
    text-decoration: underline;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Error = styled.p`
  color: red;
  margin: 5px 0px;
`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN HERE</Title>
        <Form>
          <Input
            placeholder="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button signup onClick={handleClick} disabled={isFetching}>
            SIGN IN
          </Button>
          {error && <Error>Something went wrong! Please try again</Error>}
          <LinkContainer>
            <Link>Forgot Password?</Link>
            <Link>Don't have an account? Signup here</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
}
