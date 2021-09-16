import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Bright from "../advanced/dailyDev/image/bright.JPG";
import Taheebat from "../advanced/dailyDev/image/taheebat.JPG";
import Ibunkun from "../advanced/dailyDev/image/ib.JPG";
import Sam from "../advanced/dailyDev/image/sam.JPG";
import Vero from "../advanced/dailyDev/image/vero.JPG";

const Gallery = () => {
  const [data, setData] = useState([
   
    
  ]);

  const fetchData = async () => {
    const response = await fetch("data.json");
    const user = await response.json();
    console.log(user);
    setData(user);
  };
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <Container>
      <ContainerWrapper className="container">
        {data.map((user) => {
            return (
            <ContainerCard>
              <Img src={user.images.gallery} alt="" />
              <CardText>
                <CardTitle>{user.name}</CardTitle>
                <CardAuthor>{user.source}</CardAuthor>
              </CardText>
            </ContainerCard>
          );
        })}
      </ContainerWrapper>
    </Container>
  );
};
export default Gallery;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: lightblue;
`;
const ContainerWrapper = styled.div`
  padding: 10px;
  -webkit-column-width: 33%;
  column-width: 33%;
  column-count: 3;
  -webkit-count: 3;
`;
const ContainerCard = styled.div`
  width: 100%;
  background:red
  position: relative;
`;

const CardText = styled.div`
  position: relative;
  top: -100px;
  margin: 0px 10px;
  color: red;
  z-index: 999;
`;
const Img = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
`;
const CardTitle = styled.h4``;
const CardAuthor = styled.div``;
