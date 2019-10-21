import React from "react";
import Button from "./Button";
import namelogo from "../../src/assets/images/logo.png";
import namesymbol from "../../src/assets/images/namesymbol.png";
import styled from "styled-components";
import { device } from "../responsive/device";

const Theme = {
  colors: {
    big_bgc: `#fff`,
    small_bgc: `black`
  },
  fonts: {
    heading: `uturaBT-Book,sans-serif;`
  }
};

const Navbar = styled.nav`
  font-family: ${Theme.fonts.heading};
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  display: block;
  background: ${Theme.colors.big_bgc};
`;

const Navbarcontainer = styled.div`
  display: flex;
  @media ${device.mobileL} {
    justify-content: center;
    padding: 10px 0px;
  }
  @media ${device.tablet} {
    justify-content: space-around;
    padding: 0px 50px;
    align-items: center;
  }
  @media ${device.laptop} {
    justify-content: space-between;
    padding: 0px 100px;
    align-items: center;
  }
`;

const Navbarlogocontainer = styled.div`
  justify-content: center;

  @media ${device.laptop} {
    align-items: center;
  }
`;

const Navlogo = styled.img`
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    width: 180px;
    height: 45px;
  }
  @media ${device.laptop} {
    width: 200px;
    height: 45px;
  }
`;

const WealthsimpleLogo = styled.img`
  @media ${device.mobileL} {
    width: 50px;
    height: 45px;
    padding-left: 40px;
  }
  @media ${device.tablet} {
    display: none;
    width: 180px;
    height: 45px;
  }
  @media ${device.laptop} {
    display: none;
    width: 200px;
    height: 45px;
  }
`;

const Subnav = styled.ul`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    justify-content: space-evenly;
    font-size: 18px;
  }
`;

const Subnavitem = styled.p`
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    padding-left: 20px;
  }
  @media ${device.laptop} {
    padding-left: 30px;
  }
`;

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbarcontainer>
        <Navbarlogocontainer>
          <Navlogo src={namelogo} />
          <WealthsimpleLogo src={namesymbol} />
        </Navbarlogocontainer>
        <Subnav>
          <Subnavitem>The Details</Subnavitem>
          <Subnavitem>Magazine</Subnavitem>
          <Subnavitem>Sign in</Subnavitem>
          <Subnavitem>
            <Button />
          </Subnavitem>
        </Subnav>
      </Navbarcontainer>
    </Navbar>
  );
};

export default NavigationBar;
