import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Description,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "../../styles/ProductStyles";
import Layout from "../Layout";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `http://localhost:5000/product/find/${productId}`
        );

        const data = await response.json();

        setLoading(false);
        setProduct(data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    getProductInfo();
  }, [productId]);

  return (
    <Layout>
      {loading && <h2>Loading Product Details...</h2>}
      {error && <h2>There is an error!</h2>}
      {!loading && !error && (
        <Wrapper>
          <ImageContainer>
            <Image src={product.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Description>{product.desc}</Description>
            <Price>{`$ ${product.price}`}</Price>

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
      )}
    </Layout>
  );
}
