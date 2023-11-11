import React, {useContext} from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
    const context = useContext(noteContext)
    const {notes, addNote} = context;
  return (
    <div className="container row">
    <h2>Your Notes</h2>
    {notes.map((note)=> {
         return (
         <NoteItem key={note._id} note={note} />
         ) 
         })}
    </div>
  )
}

export default Notes