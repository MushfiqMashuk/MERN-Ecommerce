import {
  Facebook,
  Instagram,
  MailTwoTone,
  PhoneAndroid,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

console.log(Facebook, Instagram, Twitter);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: burlywood;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  cursor: pointer;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Mushfiq Mashuk</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero
          alias illo id labore temporibus nisi repudiandae magni tenetur
          commodi?
        </Description>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Tracking Order</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Career</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Banglamotor, Dhaka, Bangladesh
        </ContactItem>
        <ContactItem>
          <PhoneAndroid style={{ marginRight: "10px" }} /> +8801555555555
        </ContactItem>
        <ContactItem>
          <MailTwoTone style={{ marginRight: "10px" }} /> contact@mash.dev
        </ContactItem>
        <Payment src="images/payment.png" />
      </Right>
    </Container>
  );
}
