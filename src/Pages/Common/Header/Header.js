import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./Header.css";
import { ThemeContext } from "../../../Contexts/Theme";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.error(error));
    };

    return (
        <Navbar expand="lg" className="header shadow">
            <Container className="gap-3">
                <Navbar.Brand>
                    <Link
                        to="/"
                        className="text-decoration-none text-dark fw-bold"
                    >
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
                                <Button
                                    variant="secondary"
                                    onClick={handleLogOut}
                                    size="sm"
                                >
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
                                    style={{ height: "2rem", width: "2rem" }}
                                    roundedCircle
                                    src={user?.photoURL}
                                    className="my-auto mx-2"
                                ></Image>
                            </OverlayTrigger>
                        ) : (
                            <FaUser className="my-auto mx-2"></FaUser>
                        )}
                        <Button variant="transparent" onClick={toggleTheme}>
                            {theme === "text-dark bg-light" ? (
                                <HiOutlineLightBulb size={25}/>
                            ) : (
                                <HiLightBulb size={25}/>
                            )}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
