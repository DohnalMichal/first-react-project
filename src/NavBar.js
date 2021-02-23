/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/react";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  const [spinTime, setSpinTime] = useState(1);

  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: 15px;
      `}>
      <Link to="/">Adopt Me!</Link>

      <span
        onClick={() => setSpinTime(spinTime - 0.2)}
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: ${spinTime}s ${spin} linear infinite;
        `}
        role="img"
        aria-label="logo">
        🐈
      </span>
    </header>
  );
};

export default NavBar;
