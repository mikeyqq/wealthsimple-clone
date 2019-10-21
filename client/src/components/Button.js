import React from "react";
import styled from "styled-components";
import { device } from "../../src/responsive/device";

const Button = () => {
  const Button = styled.button`
    @media ${device.tablet} {
      font-family: FuturaBT-Book, sans-serif;
      font-size: 16px;
      font-weight: 300;
      background: #ffb21a;
      border-radius: 50px;
      color: white;
      padding: 16px 20px 15px;
      text-decoration: none;
      white-space: nowrap;
      border: 0px black;
    }
  `;

  return <Button>Start Investing</Button>;
};

export default Button;
