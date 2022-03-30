import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { privateRequest } from "../../handlers/requestMethods";
import { deleteProduct } from "../../redux/cartSlice";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flexdirection: column;
  alignitems: center;
  justifycontent: center;
`;

const Success = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { data, cart } = location.state;

  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (data) {
      const createOrder = async () => {
        try {
          const response = await privateRequest.post("/order", {
            userId: currentUser._id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
            })),
            amount: cart.total,
            address: data.billing_details.address,
          });
          setOrderId(response.data._id);
          dispatch(deleteProduct());
        } catch (err) {
          console.log(err);
        }
      };
      data && createOrder();
    }
  }, [cart, data, currentUser]);

  return (
    <Container>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}

      <Link to="/">
        <button style={{ padding: 10, marginTop: 20, cursor: "pointer" }}>
          Go to Homepage
        </button>
      </Link>
    </Container>
  );
};

export default Success;
