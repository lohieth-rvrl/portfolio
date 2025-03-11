import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faMasksTheater, faGlobe, faCrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function CollapsibleExample() { 
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="py-2" fixed="top" id="navb">
      <Container className="px-2">
        <Navbar.Brand href="/portfolio/">
          <FontAwesomeIcon icon={faCrown} className="crown" size="2x" />Lr
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">Menu</Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="menu d-flex align-items-center px-2 gap-4">
            <Nav.Link as={Link} to="head"  spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="body1" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="body2" path="/about" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="body3" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="body4" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="body5" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;
