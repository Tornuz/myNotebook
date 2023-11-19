import React, {useContext} from "react";
import {Card} from 'react-bootstrap';
import noteContext from "../context/notes/NoteContext";



const NoteItem = (props) => {
    const { note, updateNote } = props;
    const context = useContext(noteContext)
    const { deleteNote } = context;

    const handleDelete = () => {
      deleteNote(note._id)
    }

  return (
    <div className="col-md-3 my-3">
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          {note.description}
        </Card.Text>
        <i onClick={handleDelete} className="fa-solid fa-trash-can mx-2"></i>
        <i onClick={() => {updateNote(note)}} className="fa-sharp fa-regular fa-pen-to-square mx-2"></i>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default NoteItem;
