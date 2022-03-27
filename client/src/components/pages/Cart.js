import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import {
  Amount,
  AmountContainer,
  Bottom,
  Button,
  Details,
  Hr,
  Image,
  Info,
  Price,
  Product,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
} from "../../styles/CartStyles";
import Logo from "../../styles/images/logo.svg";
import Layout from "../Layout";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const { products, total } = cart;
  const navigate = useNavigate();

  const KEY = process.env.REACT_APP_STRIPE_KEY;
  const baseUrl = process.env.REACT_APP_SERVER_URL;

  const onToken = (token) => {
    setStripeToken(token);
    console.log(stripeToken);
  };

  console.log(stripeToken);

  useEffect(() => {
    // Make request to the server with the Token returned to the frontend to create a charge in Stripe

    const makeRequest = async () => {
      try {
        // const response = await privateRequest.post("/checkout/payment", {
        //   tokenId: stripeToken.id,
        //   amount: total * 1000,
        // });
        const body = {
          tokenId: stripeToken.id,
          amount: total * 1000,
        };
        const response = await fetch(`${baseUrl}/checkout/payment`, {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${KEY}`,
          },
          body: JSON.stringify(body),
        });

        const data = await response.json();

        navigate("/success", { state: { data, cart } });
      } catch (err) {
        console.error(err);
      }
    };

    stripeToken && total > 0 && makeRequest();
  }, [stripeToken, total]);

  return (
    <div>
      <Layout cart>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <Link to="/">
              <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
            <TopTexts>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {products && products.length > 0 ? (
                <div>
                  {products.map((product) => (
                    <Product key={product._id}>
                      <ProductDetail>
                        <Image src={product.img}></Image>
                        <Details>
                          <ProductName>
                            <b>Product:</b> {product.title}
                          </ProductName>
                          <ProductId>
                            <b>ID:</b> {product._id}
                          </ProductId>
                          <ProductColor color={product.color} />
                          <ProductSize>
                            <b>Size:</b> {product.size}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <Price>
                        <AmountContainer>
                          <Add style={{ cursor: "pointer" }} />
                          <Amount>{product.quantity}</Amount>
                          <Remove style={{ cursor: "pointer" }} />
                        </AmountContainer>
                        <ProductPrice>
                          $ {product.price * product.quantity}
                        </ProductPrice>
                      </Price>
                      <Hr />
                    </Product>
                  ))}
                </div>
              ) : (
                <h2>Your Cart is Empty!</h2>
              )}
            </Info>
            <Summary className="hide">
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 4.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -4.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {total}</SummaryItemPrice>
              </SummaryItem>
              {total > 0 && (
                <StripeCheckout
                  name="MERN E-commerce"
                  image={Logo}
                  billingAddress
                  shippingAddress
                  description={`Your total is $${total}`}
                  amount={total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <Button>CHECKOUT NOW</Button>
                </StripeCheckout>
              )}
            </Summary>
          </Bottom>
        </Wrapper>
      </Layout>
    </div>
  );
}
