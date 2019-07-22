import React from "react";
import styled from "styled-components";
import { postPaste, getPaste } from "../utils/pasteApi";
import { Redirect } from "react-router-dom";
import { nullLiteral } from "@babel/types";

const Form = styled.form``;

const Input = styled.input`
  display: block;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 20px;
  width: 100%;
`;

const Textarea = styled.textarea`
  display: block;
  height: 300px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 20px;
  width: 100%;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 35px;
`;

function PasteForm() {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [paste, setPaste] = React.useState(null);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    postPaste({ title, text })
      .then(paste => {
        setPaste(paste);
      })
      .catch(error => {
        console.log(error);
      });
  }

  if (paste) {
    return <Redirect to={`/paste/${paste.id}`} />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={title}
        onChange={handleTitleChange}
        placeholder="Dein Name"
        required
      />
      <Textarea
        rows={8}
        value={text}
        onChange={handleTextChange}
        placeholder="Dein Text"
        required
      />
      <Button disabled={loading}>
        {loading ? "Loading..." : "Klick mich"}
      </Button>
    </Form>
  );
}

export default PasteForm;
