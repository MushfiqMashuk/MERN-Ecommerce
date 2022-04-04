import { Badge } from "@material-ui/core";
import { SearchTwoTone, ShoppingCartTwoTone } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  const cartQuantity = useSelector((state) => state.cart.quantity);

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
          <Logo>MERN Ecommerce</Logo>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>LOGIN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge color="secondary" badgeContent={cartQuantity}>
                <ShoppingCartTwoTone />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
