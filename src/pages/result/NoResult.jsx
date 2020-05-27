import React from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
} from 'reactstrap';


const NoResult = () => (
    <Container fluid className="m-3">
        <Row>
            <Col sm={{ size: 10, offset: 1 }}>
                <Jumbotron>
                    <h1> No Result Page available </h1>
                    <p>
                        Sorry, we do not currently handle identifiers of
                        this type. You may want to look at these related ones:
                    </p>
                </Jumbotron>
            </Col>
        </Row>
    </Container>
);

export default NoResult;
