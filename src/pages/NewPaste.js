import React from "react";
import Section from "../components/Section";
import Divider from "../components/Divider";
import MainHeadline from "../components/MainHeadline";
import PasteForm from "../components/PasteFrom";
import styled from "styled-components";

const StyledSection = styled(Section)`
  width: 80%;
  margin: 0 auto;
  align-items: stretch;
`;

function NewPaste() {
  return (
    <StyledSection>
      <MainHeadline>Was sagst Du dazu?</MainHeadline>
      <Divider />
      <PasteForm />
    </StyledSection>
  );
}

export default NewPaste;
