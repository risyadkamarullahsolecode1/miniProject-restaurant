import React from 'react';
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <Header expand="lg" className="bg-warning bg-gradient py-4 text-white">
      <Navbar bg="danger" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faUtensils} className="me-2" />
            Restaurant Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto">
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#promotion">Promotion</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Button variant="light" className="me-2">Cart</Button>
            <Button variant="outline-light" href="#register">Register</Button>
            <Button variant="outline-light" href="#login" className="ms-2">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
        <Container className="mt-4 text-center">
          <h1 className="fw-bolder">Welcome to Restaurant Mini Project</h1>
          <p className="lead">This is a Single page Restaurant Website</p>
        </Container>
      </Header>
    </div>
  );
};

export default Header;
