import { Box, Button, Container, Heading, Input, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editNote, newNote } from '../redux/notesSlice'
import { message } from 'antd'

function EditNote({setTab,note,isEditing}) {

    const dispatch = useDispatch()


    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const [id,setId] = useState("")


    const handleClickEditNote = () => {

       if(title.trim() !== "" && description.trim() !== ""){
        const editedNote ={
            id,
            title,
            description
        }

        dispatch(editNote(editedNote))
        setTitle("")
        setDescription("")
        setTab(0)
       }else {
        message.error("Please enter a valid value")
       }
    }

    useEffect(()=> {
        if(note) {
            if(note.title && note.description && note.id){
                setTitle(note.title)
                setDescription(note.description)
                setId(note.id)
            }
        }
    },[note,isEditing])



  return (
    <Container margin="0" padding="0">
    <Heading className='pageTitle' as="h2">Edit note</Heading>
        <Input color="#333" 
        value={title} onChange={(e)=>setTitle(e.target.value)}
         mt="50px"
        backgroundColor="rgb(194 255 243)"
        size="lg"
        placeholder="Enter a title"
      />
      <Textarea color="#333" value={description} onChange={(e)=>setDescription(e.target.value)} minHeight="140px" size="lg" backgroundColor="rgb(194 255 243)" mt="20px" placeholder='Enter a note'/>
      <Button className='addNoteBtn' onClick={handleClickEditNote} mt="20px" width="100%" color="white">Update note</Button>
    </Container>
  )
}

export default EditNote