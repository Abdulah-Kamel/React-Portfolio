import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className={`${styles.bg_nav} py-3`}>
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold">GODZILLA</Navbar.Brand>
        <div className={`${styles.toggle} text-white`}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white"/>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-3 mt-lg-0">
            <Link to="/" className={`px-5 py-3 rounded text-decoration-none text-center ${styles.link_hover}`} >Home</Link>
            <Link to="/portfolio" className={`px-5 py-3 rounded text-decoration-none text-center ${styles.link_hover}`} >Portfolio</Link>
            <Link to="/about" className={`px-5 py-3 rounded text-decoration-none text-center ${styles.link_hover}`} >About</Link>
            <Link to="/contact" className={`px-5 py-3 rounded text-decoration-none text-center ${styles.link_hover}`} >Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
