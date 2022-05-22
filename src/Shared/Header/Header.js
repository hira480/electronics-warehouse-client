import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import LogoImg from '../../images/LogoImg.png';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark" className='nav'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={LogoImg} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            user && <>
                                <Nav.Link as={Link} to="manageItems">Manage Items</Nav.Link>
                                <Nav.Link as={Link} to="addItems">Add Items</Nav.Link>
                                <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                            </>
                        }
                        {
                            user ?
                                <Button variant="link" style={{ color: 'rgba(255,255,255,.55)', fontSize: '18px' }} className='text-decoration-none' onClick={handelSignOut}>Sign Out</Button>
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