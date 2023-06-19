import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ReALTA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category/vestido_de_banio">Vestidos de baño</Nav.Link>
            <Nav.Link href="/category/bodiesyalgomas">Bodies y algo más</Nav.Link>
            
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
