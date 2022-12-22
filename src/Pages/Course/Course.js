import React, { useContext } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { ThemeContext } from "../../Contexts/Theme";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {
        _id,
        title,
        details,
        picture,
        rating,
        author,
        total_enroll,
        duration,
    } = courseDetails[0];
    const ref = React.createRef();
    const { theme } = useContext(ThemeContext);

    return (
        <Container>
            <Row className="gap-4">
                <h1 className="mb-5">Course Details</h1>
                <Col lg="5" sm="12">
                    <Card className={`${theme}`}>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{details}</Card.Text>
                            <Link
                                className="text-decoration-none text-light"
                                to={`/checkout/${_id}`}
                            >
                                <Button variant="secondary">
                                    Get Premium Access
                                </Button>
                            </Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Last updated {(Math.random() * 10).toFixed()}{" "}
                                days ago
                            </small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg="6" sm="12" ref={ref}>
                    <h4>{title}</h4>
                    <div className="d-flex my-3">
                        <Image src={author[0].img} rounded width={50}></Image>
                        <p className="my-3 mx-2"> {author[0].name}</p>
                    </div>
                    <p>
                        <strong>Duration:</strong> {duration} hrs
                    </p>
                    <p>
                        <strong>Rating:</strong> {rating[0].number}
                    </p>
                    <p>
                        <strong>Total Enrolled:</strong> {total_enroll} Students
                    </p>
                </Col>
                <div className="text-end">
                    <Pdf targetRef={ref} filename="course-details.pdf">
                        {({ toPdf }) => (
                            <Button
                                variant="secondary"
                                className="mt-5 w-25"
                                onClick={toPdf}
                            >
                                Generate Pdf
                            </Button>
                        )}
                    </Pdf>
                </div>
            </Row>
        </Container>
    );
};

export default CourseDetails;
