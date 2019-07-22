import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  background: red;
  width: 200px;
  height: 50px;
  font-size: 30px;
  margin-bottom: 30px;
`;

function ButtonLink({ children, to, ...other }) {
  return (
    <Link to={to}>
      <StyledButton {...other}>{children}</StyledButton>
    </Link>
  );
}

export default ButtonLink;
