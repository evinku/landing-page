import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Fullscreen from "../components/Fullscreen";
import MainLogo from "../components/MainLogo";
import MainHeadline from "../components/MainHeadline";
import Section from "../components/Section";
import Divider from "../components/Divider";
import ButtonLink from "../components/ButtonLink";

function Landing() {
  return (
    <>
      <Fullscreen>
        <BackgroundImage src="https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_1280.jpg" />
        <MainLogo />
        <MainHeadline>Krypto ist TOT!</MainHeadline>
      </Fullscreen>
      <Section>
        <h2>Hier siehst du es:</h2>
        <Divider />
        <h3>₿ = 0 $</h3>
        <ButtonLink to="/about">💰About Me</ButtonLink>
      </Section>
    </>
  );
}

export default Landing;
