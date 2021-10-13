import { Badge } from "@material-ui/core";
import { SearchTwoTone, ShoppingCartTwoTone } from "@material-ui/icons";
import React from "react";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
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
            <SearchTwoTone style={{ fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MASH</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={5}>
              <ShoppingCartTwoTone />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
