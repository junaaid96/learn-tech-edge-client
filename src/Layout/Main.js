import { Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Common/Header/Header";
import "./Main.css";
import SideNav from "../Pages/Common/SideNav/SideNav";
import { ThemeContext } from "../Contexts/Theme";

const Main = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <Header></Header>
            <Container fluid>
                <Row className="h-100vh">
                    <Col lg="2" className={`${theme} border-end`}>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="10" className={`p-5 ${theme}`}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;
