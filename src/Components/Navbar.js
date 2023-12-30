import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from 'react-router-dom';


const NavbarHome = () => {

  let navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/login")
  }

  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="#">iNotebook</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <LinkContainer to="/home">
            <Nav.Link href="/home">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link href="/about">About</Nav.Link>
          </LinkContainer>
          </Nav>

          <Nav>

          {!localStorage.getItem('token')?<Form className="d-flex">
          <LinkContainer to="/login">
            <Nav.Link className='btn btn-primary' href="/login">LogIn</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link className='btn btn-primary mx-2' href="/signup">SignUp</Nav.Link>
          </LinkContainer>
          </Form>: <Button onClick={handleLogout} className='btn btn-primary'>LogOut</Button> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHome