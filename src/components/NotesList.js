import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNote,
  editNote,
  errorSelector,
  notesSelector,
  statusSelector,
} from "../redux/notesSlice";
import { Card, Col, ConfigProvider, Row } from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function NotesList({setTab,setWillEditedNote}) {
  const notes = useSelector(notesSelector);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [willDeleteNote,setWillDeleteNote] = useState(null)

  const dispatch = useDispatch();

  const handleClickEdit = (note) => {
    setTab(2)
    setWillEditedNote(note)
  };

  const handleClickDelete = (note) => {
    onOpen();
    setWillDeleteNote(note)
  };

  const deleteNoteItem = () => {
    onClose()
    dispatch(deleteNote(willDeleteNote));
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            headerBg: "#ffb6f0",
          },
        },
      }}
    >
      <Box margin="0" padding="0">
        <Heading className="pageTitle" mb="50px" as="h2">
          Notes
        </Heading>

        <Row gutter={16}>
          {notes &&
            notes.map((note, i) => {
              return (
                <Col key={i} span={6}>
                  <Card
                    className="noteCardItem"
                    title={`${note.title}`}
                    extra={
                      <div className="noteCardActionsBox">
                        <button onClick={() => handleClickEdit(note)}>
                            <AiFillEdit />
                        </button>
                        <button onClick={() => handleClickDelete(note)}>
                            <AiFillDelete color="rgb(123 0 0)" />
                          
                        </button>
                      </div>
                    }
                    bordered={true}
                  >
                    {note.description}
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Note will deleted</ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={deleteNoteItem}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ConfigProvider>
  );
}

export default NotesList;
