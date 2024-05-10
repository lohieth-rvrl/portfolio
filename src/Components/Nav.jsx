import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleHalfStroke,faMasksTheater} from "@fortawesome/free-solid-svg-icons"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="py-2" fixed="top" id="navb">
      <Container className="px-2">
        <Navbar.Brand href="#"><FontAwesomeIcon icon={faMasksTheater} size="2x"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >Menu</Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="menu d-flex align-item-center px-2 gap-4">
            <Nav.Link href="#con">Home</Nav.Link>
            <Nav.Link href="#body1">About</Nav.Link>
            <Nav.Link href="#body2">Skills</Nav.Link>
            <Nav.Link href="#body3">Service</Nav.Link>
            <Nav.Link href="#body4">Projects</Nav.Link>
            <Nav.Link href="#body5">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;