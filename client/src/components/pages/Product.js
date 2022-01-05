import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../handlers/requestMethods";
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

  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();

  const [count, setCount] = useState(1);
  console.log(selectedColor, selectedSize);
  useEffect(() => {
    const getProductInfo = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await publicRequest.get(
          `http://localhost:5000/product/find/${productId}`
        );

        const data = response.data;

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

  const handleCount = (param) => {
    if (param === "dec") {
      count > 1 && setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <Layout>
      {loading && <h3>Loading Product Details...</h3>}
      {error && <h3>There is an error!</h3>}
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
                {product.color &&
                  product.color.map((c) => (
                    <FilterColor
                      key={c}
                      color={c}
                      onClick={() => setSelectedColor(c)}
                    />
                  ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSelectedSize(e.target.value)}>
                  {product.size &&
                    product.size.map((s) => (
                      <FilterSizeOption key={s}>
                        {s.toUpperCase()}
                      </FilterSizeOption>
                    ))}
                </FilterSize>
              </Filter>
            </FilterContainer>

            <AddContainer>
              <AmountContainer>
                <Remove
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCount("dec")}
                />
                <Amount>{count}</Amount>
                <Add
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCount("inc")}
                />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
    </Layout>
  );
}
