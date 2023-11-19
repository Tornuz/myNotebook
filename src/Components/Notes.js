import React, { useState, useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import {Button, Modal, Form} from 'react-bootstrap';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote, getNotes, editNote } = context;

  // Modal
  const [show, setShow] = useState(false);

  // Modal Form 

  const [note, setNote] = useState({id: "", eTitle: "", eDescription: "", eTag: ""})
  const handleClose = () => setShow(false)

  const handleClick = () => {
    editNote(note.id, note.eTitle, note.eDescription, note.eTag)
    setShow(false)
  }

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value })
  }


  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  
  const updateNote = (currentNote) => {
    setShow(true)
    setNote({id: currentNote._id, eTitle: currentNote.title, eDescription: currentNote.description, eTag: currentNote.tag})
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="my-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={note.eTitle} name='eTitle' minLength={5} required placeholder="Enter Title" onChange={onChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={note.eDescription} name='eDescription' minLength={5} required placeholder="Description"  onChange={onChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tag</Form.Label>
            <Form.Control type="text" value={note.eTag} name='eTag' placeholder="Tag"  onChange={onChange}/>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container row">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "No Notes To dispplay"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
