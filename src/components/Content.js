import React from 'react'
import NotesList from './NotesList'
import { Input } from '@chakra-ui/react'

function Content() {
  return (
    <div className='pageContent'>


    <Input size="md" variant='outline'></Input>

        <NotesList/>

    </div>
  )
}

export default Content