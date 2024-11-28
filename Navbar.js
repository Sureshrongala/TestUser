import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MyBrand</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                   <Nav>
                   <Link to="/register"><Nav.Link href="#register">Register</Nav.Link></Link>
                     <Link to="/login"><Nav.Link href="#login">LogIn</Nav.Link></Link>
                   </Nav>
                </Navbar.Collapse>
                
                
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
