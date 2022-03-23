import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../handlers/requestMethods";
import { addProduct } from "../../redux/cartRedux";
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

  const [color, setColor] = useState();
  const [size, setSize] = useState();

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

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
      quantity > 1 && setQuantity((prev) => prev - 1);
    } else {
      setQuantity((prev) => prev + 1);
      console.log(quantity);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        color,
        size,
        quantity,
      })
    );
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
                      onClick={() => setColor(c)}
                    />
                  ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
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
                <Amount>{quantity}</Amount>
                <Add
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCount("inc")}
                />
              </AmountContainer>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}
    </Layout>
  );
}
