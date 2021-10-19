import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("images/welcome1.jpg") center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 17px;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px 20px;
  border: none;
  background-color: #4fff84;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 500;

  margin: ${(props) => props.signup && "30px 0px"};

  &:hover {
    background-color: #022333;
    color: white;
  }
`;

const components = {
  Container,
  Wrapper,
  Form,
  Title,
  Input,
  Agreement,
  Button,
};

export default components;
