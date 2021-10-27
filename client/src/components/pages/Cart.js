import { Add, Remove } from "@material-ui/icons";
import React from "react";
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
  return (
    <div>
      <Layout cart>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="images/redbag.png"></Image>
                  <Details>
                    <ProductName>
                      <b>Product:</b> Christian Dior SE Handbag
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 94589578956
                    </ProductId>
                    <ProductColor color="pink" />
                    <ProductSize>
                      <b>Size:</b> M
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <Price>
                  <AmountContainer>
                    <Add style={{ cursor: "pointer" }} />
                    <Amount>2</Amount>
                    <Remove style={{ cursor: "pointer" }} />
                  </AmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </Price>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="images/watch.png"></Image>
                  <Details>
                    <ProductName>
                      <b>Product:</b> Round black Rolex analog watch with
                      bracelet
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 84989578956
                    </ProductId>
                    <ProductColor color="silver" />

                    <ProductSize>
                      <b>Size:</b> L
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <Price>
                  <AmountContainer>
                    <Add style={{ cursor: "pointer" }} />
                    <Amount>2</Amount>
                    <Remove style={{ cursor: "pointer" }} />
                  </AmountContainer>
                  <ProductPrice>$ 200</ProductPrice>
                </Price>
              </Product>
            </Info>
            <Summary className="hide">
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
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
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Layout>
    </div>
  );
}
