import React from "react";
import {Button, Card} from 'react-bootstrap';


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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default NoteItem;
