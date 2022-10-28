import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='mb-4 shadow'>
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none text-dark fw-bold'><Image src='logo.png' height={50}></Image>LearnTechEdge</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto me-2">
                        <NavLink className='text-decoration-none mx-2 text-dark fw-bold' to='/'>Courses</NavLink>
                        <NavLink className='text-decoration-none mx-2 text-dark fw-bold' to='/faq'>FAQ</NavLink>
                        <NavLink className='text-decoration-none mx-2 text-dark fw-bold' to='/blog'>Blog</NavLink>
                        <NavLink className='text-decoration-none mx-2 text-dark fw-bold' to='/login'>Login</NavLink>
                        <NavLink className='text-decoration-none mx-2 text-dark fw-bold' to='/registration'>Register</NavLink>
                        {/* <Image roundedCircle style={{ height: '30px' }} src={} ></Image> */}
                        <FaUser className='mx-2 my-1'></FaUser>
                        <p>Toggle</p>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;