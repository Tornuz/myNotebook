import React, { useState } from 'react'
import NoteContext from './NoteContext';


const NoteState = (props) => {
    const state = [
        {
          "_id": "651313bd68d89442e37dcaa7",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night",
          "description": "You cannot escape the night",
          "tag": "personal/global",
          "date": "2023-09-26T17:24:13.065Z",
          "__v": 0
        },
        {
          "_id": "651837f5c78df909ae2dff40",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night rises",
          "description": "You cannot escape the Darkness",
          "tag": "personal/global",
          "date": "2023-09-30T15:00:05.583Z",
          "__v": 0
        },{
          "_id": "651313bd68d8944e37dcaa7",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night",
          "description": "You cannot escape the night",
          "tag": "personal/global",
          "date": "2023-09-26T17:24:13.065Z",
          "__v": 0
        },
        {
          "_id": "651837f5c78d909ae2dff40",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night rises",
          "description": "You cannot escape the Darkness",
          "tag": "personal/global",
          "date": "2023-09-30T15:00:05.583Z",
          "__v": 0
        },{
          "_id": "651313b68d89442e37dcaa7",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night",
          "description": "You cannot escape the night",
          "tag": "personal/global",
          "date": "2023-09-26T17:24:13.065Z",
          "__v": 0
        },
        {
          "_id": "65837f5c78df909ae2dff40",
          "user": "650d6bec40622531172b9c3c",
          "title": "Dark Night rises",
          "description": "You cannot escape the Darkness",
          "tag": "personal/global",
          "date": "2023-09-30T15:00:05.583Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(state)

      // Add a Note

      const addNote = (title, description, tag) => {

        const note = [
          {"_id": "65837f5c78df90339aesd2dff40",
          "user": "650d6bec4062332531172b9c3c",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-09-30T15:00:05.583Z",
          "__v": 0}
        ]
        setNotes(notes.concat(note))
      }
      

      // Delete a Note

      const deleteNote = (id) => {

        const newNote = notes.filter((note) => {return note._id !== id})
        setNotes(newNote)
      }

      // Edit a Note

      const editNote = () => {

      }


  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState
