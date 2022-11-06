import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { title, picture, author, rating, details } = course[0];

    const handleToast = () => {
        toast.success('Successfully enrolled!');
    }

    return (
        <div>
            <h1>Checkout</h1>
            <Container className='p-5'>
                <Row className='gap-4'>
                    <Col lg="6" sm="12">
                        <h4>{title}</h4>
                        <p>{details}</p>
                        <p><strong>Author:</strong> {author[0].name}</p>
                        <p><strong>Rating:</strong> {rating[0].number}</p>
                    </Col>
                    <Col lg="5" sm="12">
                        <img src={picture} alt="" className='w-100' />
                    </Col>
                </Row>
                <Button onClick={handleToast} variant='dark' className='mt-5'>Enroll</Button>
            </Container>
        </div>
    );
};

export default Checkout;