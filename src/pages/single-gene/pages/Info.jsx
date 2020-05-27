import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    IdentifierInfo,
    NcbiInfo,
    StringIdentifiers,
    AnnotationInfo,
    Plot,
} from 'lyra-library';


const Info = () => (
    <Container fluid>
        <Row>
            <Col sm="6">
                <IdentifierInfo />
                <NcbiInfo parameters={{ species: 'homo sapiens' }} />
            </Col>
            <Col sm="6">
                <AnnotationInfo dataset="annotation_human">
                    <Plot name="lymmml.general.cytobands" height={200} />
                </AnnotationInfo>
                <StringIdentifiers dataset="string_human" />
            </Col>
        </Row>
    </Container>
);

export default Info;
