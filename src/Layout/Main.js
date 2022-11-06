import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Common/Header/Header';
import './Main.css';
import SideNav from '../Pages/Common/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container fluid>
                <Row className='h-100vh'>
                    <Col lg='2' className='sidebar'>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg='10' className='outlet p-5'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;