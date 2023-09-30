import React, {useContext} from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
    const notes = useContext(noteContext)
  return (
    <div className="container row">
    <h2>Your Notes</h2>
    {notes.map((note)=> {
         return (
         <NoteItem note={note} />
         ) 
            
            
         })}
    </div>
  )
}

export default Notes