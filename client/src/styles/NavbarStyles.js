import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  border-bottom: 1px solid gray;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Input = styled.input`
  border-style: none;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export default {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  Input,
  SearchContainer,
};
