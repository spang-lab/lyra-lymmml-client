import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Plot } from 'lyra-library';

const CelllineResult = () => (
    <Container fluid >
        <Row>
            <Col>
                <Plot name="lymmml.mpi.cell_lines.barplot" height={600} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Plot name="lymmml.mpi.cell_lines.boxplot" height={600} />
            </Col>
        </Row>
    </Container>
);

export default CelllineResult;

