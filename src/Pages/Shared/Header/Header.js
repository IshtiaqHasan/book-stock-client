import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.jpg'
import './Header.css'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
        navigate('/login');
    }

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
                            {
                                user ?
                                    <button className='btn btn-link text-secondary fw-bolder text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;