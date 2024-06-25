import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid"


export const notesSelector = (state) => state.notes.items

const savedNotes = JSON.parse(localStorage.getItem("notes"))


const notesSlice = createSlice({
    name:"notes",
    initialState:{
        items:savedNotes ? savedNotes : [],
    },
    reducers:{
        newNote:(state,action)=>{
            const note = {
                id:uniqid(),
                title:action.payload.title,
                description:action.payload.description
            }
            state.items.push(note)
            localStorage.setItem("notes",JSON.stringify(state.items))
        },
        editNote:(state,action)=> {
            const index = state.items.findIndex((item)=> item.id === action.payload.id)
            state.items[index] = action.payload
            localStorage.setItem("notes",JSON.stringify(state.items))
        },
        deleteNote:(state,action)=> {
            const index = state.items.findIndex((item)=> item.id === action.payload.id)
            state.items.splice(index,1)
            localStorage.setItem("notes",JSON.stringify(state.items))
        }
    }
})

export const {newNote,editNote,deleteNote} = notesSlice.actions


export default notesSlice.reducer