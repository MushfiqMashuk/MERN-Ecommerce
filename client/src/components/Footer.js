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
import {
  Center,
  ContactItem,
  Container,
  Description,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "../styles/FooterStyles";

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
