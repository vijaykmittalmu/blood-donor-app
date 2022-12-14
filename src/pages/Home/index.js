import React from "react";
import styled from "styled-components";

import BannerImg from "../../assets/images/banner.jpg";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/Card/Card.styled";
import { HeaderTitle, Typography } from "../../components/Title/Title.styled";
import { Button } from "../../components/Button/Button.styled";

const Content = styled.div`
  width: 98%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <>
      <section>
        <img src={BannerImg} width="100%" />
      </section>
      <Content>
        <Card>
          <CardHeader>
            <HeaderTitle>live feed</HeaderTitle>
          </CardHeader>
          <CardContent>
            <Typography txt="dark">
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            </Typography>
          </CardContent>
          <CardFooter>
            <Button bg="red" txt="light">
              Explore
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <HeaderTitle>Compatiblity</HeaderTitle>
          </CardHeader>
          <CardContent>
            <Typography txt="dark">
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            </Typography>
          </CardContent>
          <CardFooter>
            <Button bg="red" txt="light">
              Explore
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <HeaderTitle>Blood Request</HeaderTitle>
          </CardHeader>
          <CardContent>
            <Typography txt="dark">
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            </Typography>
          </CardContent>
          <CardFooter>
            <Button bg="red" txt="light">
              Explore
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <HeaderTitle>Search Donor</HeaderTitle>
          </CardHeader>
          <CardContent>
            <Typography txt="dark">
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
              Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum
            </Typography>
          </CardContent>
          <CardFooter>
            <Button bg="red" txt="light">
              Explore
            </Button>
          </CardFooter>
        </Card>
      </Content>
    </>
  );
};

export { Home };
