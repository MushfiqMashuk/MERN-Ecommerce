import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.7;
  z-index: 2;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;

  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px 40px;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
`;

export {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  InfoContainer,
  Image,
  Title,
  Description,
  Button,
};
