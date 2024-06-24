import { createSlice } from "@reduxjs/toolkit";


export const notesSelector = (state) => state.notes.items
export const statusSelector = (state) => state.notes.status
export const errorSelector = (state) => state.notes.error



const notesSlice = createSlice({
    name:"notes",
    initialState:{
        items:[],
        status:"idle",
        error:null
    },
    reducers:{
        newNote:(state,action)=>{
            const note = {
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
            const deleteNote = state.items.find(action.payload)
            state.items.splice(deleteNote,1)
            localStorage.setItem("notes",JSON.stringify(state.items))
        }
    }
})

export const {newNote,editNote,deleteNote} = notesSlice.actions


export default notesSlice.reducer