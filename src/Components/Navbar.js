import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const NavbarHome = () => {
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

          <Form className="d-flex">
          <LinkContainer to="/login">
            <Nav.Link className='btn btn-primary mx-2' href="/login">LogIn</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link className='btn btn-primary mx-2' href="/signup">SignUp</Nav.Link>
          </LinkContainer>
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHome