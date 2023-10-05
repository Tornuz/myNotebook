import React from "react";
import {Card} from 'react-bootstrap';


const NoteItem = (props) => {
    const { note } = props;
  return (
    <div className="col-md-3 my-3">
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          {note.description}
        </Card.Text>
        <i className="fa-solid fa-trash-can mx-2"></i>
        <i className="fa-sharp fa-regular fa-pen-to-square mx-2"></i>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default NoteItem;
