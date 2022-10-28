import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


const CourseSummaryCard = ({ course }) => {
    const { _id, title, author, picture, details, rating, total_view } = course;
    return (
            <Card className='w-25 mx-3 my-3'>
                <Card.Img variant="top" src={picture} className='h-50'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Button variant="primary">Course Details</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated {(Math.random()*10).toFixed()} days ago</small>
                </Card.Footer>
            </Card>
    );
};

export default CourseSummaryCard;