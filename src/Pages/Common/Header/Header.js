import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useState } from "react";
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const [theme, setTheme] = useState(false);

    const handleTheme = (event) => {
        setTheme(!theme)

    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.error(error));
    };

    return (
        <Navbar expand="lg" className="header shadow">
            <Container className="gap-3">
                <Navbar.Brand>
                    <Link to="/" className="text-decoration-none text-dark fw-bold">
                        <Image src="logo.png" height={40}></Image>LearnTechEdge
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto me-1 gap-3">
                        <NavLink
                            className="text-decoration-none mx-2 my-auto text-dark fw-bold"
                            to="/"
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            className="text-decoration-none mx-2 my-auto text-dark fw-bold"
                            to="/faq"
                        >
                            FAQ
                        </NavLink>
                        <NavLink
                            className="text-decoration-none mx-2 my-auto text-dark fw-bold"
                            to="/blog"
                        >
                            Blog
                        </NavLink>
                        {user?.email ? (
                            <>
                                <Button variant="dark" onClick={handleLogOut} size="sm">
                                    Log out
                                </Button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    className="text-decoration-none mx-2 my-auto text-dark fw-bold"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    className="text-decoration-none mx-2 my-auto text-dark fw-bold"
                                    to="/registration"
                                >
                                    Registration
                                </NavLink>
                            </>
                        )}
                        {user?.photoURL ? (
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id="tooltip-disabled">
                                        <span>{user?.displayName}</span>
                                    </Tooltip>
                                }
                            >
                                <Image
                                    style={{ height: "2rem", width:"2rem" }}
                                    roundedCircle
                                    src={user?.photoURL}
                                    className="my-auto mx-2"
                                ></Image>
                            </OverlayTrigger>
                        ) : (
                            <FaUser className="my-auto mx-2"></FaUser>
                        )}
                        <Form className="my-auto mx-2">
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label={theme ? 'Dark' : 'Light'}
                                checked={theme}
                                onChange={handleTheme}
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
