import React from "react";
import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";
import Headline from "../components/Headline";
import Divider from "../components/Divider";
import Avatar from "../components/Avatar";

function About() {
  return (
    <Section>
      <Headline>About Me</Headline>
      <Divider />
      <Avatar
        src="https://files.slack.com/files-pri/TJPC72S6P-FLAV533MF/img_20190717_155334.jpg?pub_secret=56e163de5b"
        width="300px"
        height="300px"
      />
      <ButtonLink to="/">Back</ButtonLink>
    </Section>
  );
}

export default About;
