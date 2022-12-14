import React from "react";
import { Link } from "react-router-dom";

import { Container, NavBarSection, NavWrapper } from "./NavBar.styled";
import { LogoTitle } from "../Title/Title.styled";
import { Button } from "../Button/Button.styled";

const navList = [
  { route: "/", name: "Home" },
  { route: "/compatiblity", name: "compatiblity" },
  { route: "/search-donor", name: "search donor" },
  { route: "/live-feed", name: "live feed" },
  { route: "/blood-request", name: "blood request" },
];
const NavBar = () => {
  return (
    <Container>
      <NavBarSection leftSection>
        <LogoTitle white>Blood Donor Help</LogoTitle>
      </NavBarSection>
      <NavBarSection midSection>
        <NavWrapper>
          {navList.map(function (item, index) {
            console.log(item);
            return (
              <Link to={item.route} key={index}>
                {item.name}
              </Link>
            );
          })}
        </NavWrapper>
      </NavBarSection>
      <NavBarSection rightSection>
        <Button bg="light" txt="red">
          Login
        </Button>
      </NavBarSection>
    </Container>
  );
};

export default NavBar;
