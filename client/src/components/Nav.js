import { Search } from "@material-ui/icons";
import React from "react";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Right,
  SearchContainer,
  Wrapper,
} from "../styles/NavbarStyles";

export default function Nav() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search />
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}
