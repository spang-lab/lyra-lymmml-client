import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Plot } from 'lyra-library';

const LymphomaExpressionResult = () => (
    <Container fluid >
        <Row>
            <Col sm="6" >
                <Plot name="lymmml.mmml.bl.histogram" height={500} />
            </Col>
            <Col sm="6" >
                <Plot name="lymmml.mmml.bl.qqplot" height={500} />
            </Col>
        </Row>
        <Row>
            <Col sm="6" >
                <Plot name="lymmml.mmml.dlbcl.histogram" height={500} />
            </Col>
            <Col sm="6" >
                <Plot name="lymmml.mmml.dlbcl.qqplot" height={500} />
            </Col>
        </Row>
        <Row>
            <Col sm="6" >
                <Plot name="lymmml.lenz.chop.histogram" height={500} />
            </Col>
            <Col sm="6" >
                <Plot name="lymmml.lenz.chop.qqplot" height={500} />
            </Col>
        </Row>
        <Row>
            <Col sm="6" >
                <Plot name="lymmml.lenz.rchop.histogram" height={500} />
            </Col>
            <Col sm="6" >
                <Plot name="lymmml.lenz.rchop.qqplot" height={500} />
            </Col>
        </Row>
        <Row>
            <Col sm="6" >
                <Plot
                    name="lymmml.reddy.qqplot"
                    height={500}
                    dataset="ziepert"
                />
            </Col>
            <Col sm="6" >
                <Plot
                    name="lymmml.reddy.histogram"
                    height={500}
                    dataset="ziepert"
                />
            </Col>
        </Row>
    </Container>
);

export default LymphomaExpressionResult;

