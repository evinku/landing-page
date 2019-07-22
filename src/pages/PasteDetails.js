import React from "react";
import NotFound from "./NotFound";
import Section from "../components/Section";
import Divider from "../components/Divider";
import Headline from "../components/Headline";
import Content from "../components/Content";
import { getPaste } from "../utils/pasteApi";

function PasteDetails({ match }) {
  const { id } = match.params;
  const [paste, setPaste] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPaste(id)
      .then(paste => {
        setPaste(paste);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (!loading && !paste) {
    return <NotFound />;
  }

  return (
    <Section>
      {!loading && paste && (
        <div>
          <Headline>{paste.title}</Headline>
          <Divider />
          <Content>{paste.text}</Content>
        </div>
      )}
      {loading && <div>Loading...</div>}
    </Section>
  );
}

export default PasteDetails;
