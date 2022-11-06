import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CourseSummaryCard = ({ course }) => {
    const { _id, title, picture, details } = course;
    return (
        <Card className='mx-3 my-3' style={{width: '20rem'}}>
            <Card.Img variant="top" src={picture} className='h-50' />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details}</Card.Text>
                <Link className='text-decoration-none text-light' to={`/course/${_id}`}><Button variant='dark'>Course Details</Button></Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated {(Math.random() * 10).toFixed()} days ago</small>
            </Card.Footer>
        </Card>
    );
};

export default CourseSummaryCard;