import React, {useContext, useState} from 'react'
import { Form, Button } from "react-bootstrap";
import Notes from "./Notes";
import noteContext from "../context/notes/NoteContext";



const AddNote = () => {

    const context = useContext(noteContext)
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: "django"})

    const handleClick = (e) => {
      e.preventDefault();
      addNote(note.title, note.description, note.tag)
    }

    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value })
    }

  return (
    <div>
    <h1 className="my-3">Add a Note</h1>
      <div className="container">
        <Form className="my-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name='title' placeholder="Enter Title" onChange={onChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name='description' placeholder="Description"  onChange={onChange}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleClick}>
            Add Note
          </Button>
        </Form>
      </div>
      <Notes />
    </div>
  )
}

export default AddNote