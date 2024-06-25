import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newNote } from "../redux/notesSlice";
import { message } from "antd";

function NewNote({ setTab }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClickAddNote = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      dispatch(newNote({ title, description }));
      setTitle("");
      setDescription("");
      setTab(0);
    }else {
        message.error("Please enter a valid value")
       }
  };

  return (
    <Container margin="0" padding="0">
      <Heading className="pageTitle" as="h2">
        Add a note
      </Heading>
      <Input
        color="#333"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        mt="50px"
        backgroundColor="rgb(194 255 243)"
        size="lg"
        placeholder="Enter a title"
      />
      <Textarea
        color="#333"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        minHeight="140px"
        size="lg"
        backgroundColor="rgb(194 255 243)"
        mt="20px"
        placeholder="Enter a note"
      />
      <Button
        className="addNoteBtn"
        onClick={handleClickAddNote}
        mt="20px"
        width="100%"
        color="white"
      >
        Add note
      </Button>
    </Container>
  );
}

export default NewNote;
