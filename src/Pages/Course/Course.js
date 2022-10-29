import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { _id, title, details, picture, rating, author, total_enroll } = courseDetails[0];
    console.log(courseDetails);
    return (
        <Container>

            <Row>
                <h1>Course Details</h1>
                <Col>

                    <Card>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{details}</Card.Text>
                            <Link className="text-decoration-none text-light" to={`/checkout/${_id}`}>
                                <Button variant="dark">Get Premium Access</Button>
                            </Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated {(Math.random() * 10).toFixed()} days ago
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <h4>{title}</h4>
                    <div className="d-flex my-3">
                        <Image src={author[0].img} rounded width={50}></Image>
                        <p className="my-3 mx-2"> {author[0].name}</p>
                    </div>
                    <p><strong>Rating:</strong> {rating[0].number}</p>
                    <p><strong>Total Enrolled:</strong> {total_enroll} Students</p>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;
