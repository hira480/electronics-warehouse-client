import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">ELECTRONICS WAREHOUSE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About</Nav.Link>
                        {
                            user ?
                                <Button variant="link" style={{ color: 'rgba(255,255,255,.55)' }} className='text-decoration-none' onClick={handelSignOut}>Sign Out</Button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;