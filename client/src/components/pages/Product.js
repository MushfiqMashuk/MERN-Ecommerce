import { Add, Remove } from "@material-ui/icons";
import React from "react";
import components from "../../styles/ProductStyle";
import Layout from "../Layout";

const {
  Button,
  Amount,
  AmountContainer,
  AddContainer,
  FilterSizeOption,
  FilterSize,
  FilterColor,
  FilterTitle,
  Filter,
  FilterContainer,
  Description,
  Price,
  Title,
  InfoContainer,
  ImageContainer,
  Image,
  Wrapper,
} = components;

export default function Product() {
  return (
    <Layout>
      <Wrapper>
        <ImageContainer>
          <Image src="images/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            blanditiis ex repellat consectetur temporibus. Eligendi ea molestiae
            autem mollitia ducimus tempora perspiciatis, iste earum pariatur et,
            sequi ipsam qui asperiores.
          </Description>
          <Price>$ 30</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
              <FilterColor color="black" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XXL</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Layout>
  );
}
