import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' className='header'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} height='50px' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='nav-link' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href='#items' >Items</Nav.Link>
                            <Nav.Link href='#upcoming' >Upcoming</Nav.Link>
                            <Nav.Link href='#preorders' >Pre-order</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="">Inventories</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="login">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;