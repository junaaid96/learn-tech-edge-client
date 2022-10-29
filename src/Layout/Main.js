import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Common/Header/Header';
import LeftSideNav from '../Pages/Common/LeftSideNav/LeftSideNav';
import './Main.css';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container fluid>
                <Row className='h-100vh'>
                    <Col lg='2' className='sidebar'>
                        <LeftSideNav></LeftSideNav>
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