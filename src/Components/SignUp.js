import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const SignUp = (props) => {

  let navigate = useNavigate()
const [credential, setCredential] = useState({name: "", email: "", password: "", cpassword: ""})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: credential.name, email: credential.email, password: credential.password})
    });
    const json = await response.json()
    console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken)
      navigate("/home")
      props.showAlert("You have Succesfully Signed Up", "success")

    }else {
      props.showAlert("Invalid Credentials", "danger")
    }

  }

  const onChange = (e) => {
    setCredential({...credential, [e.target.name]: e.target.value})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Full Name</Form.Label>
        <Form.Control type="text" value={credential.name} onChange={onChange} name='name' placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={credential.email} onChange={onChange} name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={credential.password} minLength={5} required onChange={onChange} name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" value={credential.cpassword} minLength={5} required onChange={onChange} name='cpassword' placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SignUp