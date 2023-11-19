import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const state = []

  // Fetch all Notes

  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZDZiZWM0MDYyMjUzMTE3MmI5YzNjIn0sImlhdCI6MTY5NTM5MTgxMX0.0mahv5gOFcYmaKfMDLL3C8x3lRLLfg8EOSIKgAktvUI"
      },
    });

    const json = await response.json()
    setNotes(json)
  }

  const [notes, setNotes] = useState(state);

  // Add a Note

  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZDZiZWM0MDYyMjUzMTE3MmI5YzNjIn0sImlhdCI6MTY5NTM5MTgxMX0.0mahv5gOFcYmaKfMDLL3C8x3lRLLfg8EOSIKgAktvUI"
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = await response.json()
    setNotes(notes.concat(note));
  };

  // Delete a Note


  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZDZiZWM0MDYyMjUzMTE3MmI5YzNjIn0sImlhdCI6MTY5NTM5MTgxMX0.0mahv5gOFcYmaKfMDLL3C8x3lRLLfg8EOSIKgAktvUI"
      },
    });
    const json = response.json()
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // Edit a Note

  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZDZiZWM0MDYyMjUzMTE3MmI5YzNjIn0sImlhdCI6MTY5NTM5MTgxMX0.0mahv5gOFcYmaKfMDLL3C8x3lRLLfg8EOSIKgAktvUI"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json()

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
