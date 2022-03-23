import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
import Layout from "../Layout";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { products, quantity, total } = cart;

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
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Layout>
    </div>
  );
}
