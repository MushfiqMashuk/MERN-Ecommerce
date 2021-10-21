import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Layout from "../Layout";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const Price = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Amount = styled.div`
  font-size: 24px;
  margin: 0px 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  height: fit-content;
  min-height: 50vh;
  border-radius: 10px;
  padding: 20px;
`;

const Hr = styled.hr`
  border: none;
  height: 1.5px;
  background-color: #eee;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  cursor: pointer;
  border: none;
  padding: 15px;
  margin-top: 10px;
`;

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
            <Summary>
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
