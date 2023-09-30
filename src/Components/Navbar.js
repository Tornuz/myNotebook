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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHome