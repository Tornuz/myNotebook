import React from "react";
import Alert from 'react-bootstrap/Alert';

const AlertTop = (props) => {
  return (
    <div>
      <Alert variant="info">{props.message}</Alert>
    </div>
  );
};

export default AlertTop;
