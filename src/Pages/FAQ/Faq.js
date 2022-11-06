import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <h1 className='mb-5'>FAQ</h1>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Can I get lifetime access?</h3></Accordion.Header>
                    <Accordion.Body>
                        Most Certainly!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>Can I get certificate after finishing the course?</h3></Accordion.Header>
                    <Accordion.Body>
                        Yes. But You have to finish all the assignments on time.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>Can I watch videos offline?</h3></Accordion.Header>
                    <Accordion.Body>
                        Yes. In mobile app you can save but only accessible through app.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h3>How often I get updates of a particular course?</h3></Accordion.Header>
                    <Accordion.Body>
                        It depends on the course instructor.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h3>Can I unenroll and get Refund for the course?</h3></Accordion.Header>
                    <Accordion.Body>
                        Yes in 15 days.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Faq;
