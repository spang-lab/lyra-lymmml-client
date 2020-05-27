import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Plot } from 'lyra-library';

const NormalCellsResult = () => (
    <Container fluid >
        <Row>
            <Col>
                <Plot name="lymmml.mpi.other_cells.boxplot" height={500} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Plot name="lymmml.victora.gccells.boxplot" height={600} />
            </Col>
        </Row>
    </Container>
);

export default NormalCellsResult;

