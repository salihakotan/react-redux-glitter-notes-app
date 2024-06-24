import { Box, Button, Container, Heading, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'

function NewNote() {

    const dispatch = useDispatch()


    const handleClickAddNote = () => {
        dispatch()
    }


  return (
    <Container margin="0" padding="0">
    <Heading as="h2">Add a note</Heading>
        <Input mt="50px"
        backgroundColor="white"
        size="lg"
        variant="outline"
        placeholder="Enter a title"
      />
      <Textarea minHeight="140px" size="lg" backgroundColor="white" mt="20px" placeholder='Enter a note'/>
      <Button onClick={handleClickAddNote} mt="20px" width="100%" color="white" backgroundColor='#35a1ff'>Add note</Button>
    </Container>
  )
}

export default NewNote