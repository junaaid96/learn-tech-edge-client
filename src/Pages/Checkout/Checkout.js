import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { title, picture, author, rating } = course[0];
    console.log(course);
    return (
        <div>
            <h1>Checkout</h1>
            <Container className='p-5'>
                <Row>
                    <Col lg="5">
                        <h4>{title}</h4>
                        <p><strong>Author:</strong> {author[0].name}</p>
                        <p><strong>Rating:</strong> {rating[0].number}</p>
                    </Col>
                    <Col lg="5">
                        <img src={picture} alt="" className='w-100' />
                    </Col>
                </Row>
                <Button variant='dark' className='mt-5'>Confirm Purchase</Button>
            </Container>
        </div>
    );
};

export default Checkout;