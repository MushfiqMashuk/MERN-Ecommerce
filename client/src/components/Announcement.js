import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bolder;
  word-spacing: 0.1cm;
`;

export default function Announcement() {
  return <Container>SUPER DEAL! 30% cashback on orders over $50!</Container>;
}
