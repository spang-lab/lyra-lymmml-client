import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Plot } from 'lyra-library';

const ChromosomalBreaksResult = () => (
    <Container fluid >
        <Row>
            <Col>
                <Plot name="lymmml.mmml.chrom_breaks.myc.boxplot" height={600} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Plot name="lymmml.mmml.chrom_breaks.bcl6.boxplot" height={600} />
            </Col>
        </Row>
    </Container>
);

export default ChromosomalBreaksResult;

