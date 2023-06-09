import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 300px;
  border-radius: 20px;
  margin-bottom:180px;
  background-color: ${(props) => props.backgroundColor};
`;
const H2 = styled.h2`
  margin-bottom: 30px;
  color: ${(props) => props.color};
  font-size: 50px;
`;
const H3 = styled.h3`
  font-size: 30px;
  margin-bottom: 30px;
`;
const P = styled.p``;
const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  object-fit: cover;
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  padding: 25px;
  line-height: 25px;
`;
const Img = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
`;

export { Container, H2, H3, P, Image, Content, Img };
