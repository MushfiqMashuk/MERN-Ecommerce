import React from "react";
import {
  Button,
  Container,
  Image,
  Info,
  Title,
} from ".././styles/CategoryItemStyle";

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}
