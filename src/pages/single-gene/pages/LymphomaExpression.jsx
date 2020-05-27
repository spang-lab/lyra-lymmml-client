import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Plot,
    DatasetIdentifiers,
    AccessBlock,
    CorrelatedIdentifiers,
} from 'lyra-library';

const LymphomaExpressionResult = () => (
    <Container fluid>
        <AccessBlock access="internal">
            <Row>
                <Col md="9">
                    <Plot name="lymmml.mpi.lymphomas.boxplot" height={500} />
                    <h3> Related Publications </h3>
                    <blockquote className="blockquote">
                        <p className="mb-0">
                            <a href="https://www.ncbi.nlm.nih.gov/pubmed/16760442" target="blank">
                                A biologic definition of Burkitt&#39;s lymphoma
                                from transcriptional and genomic profiling.
                            </a>
                        </p>
                        <footer className="blockquote-footer">
                            Hummel et. al.
                            <cite title="Source Title">
                                N Engl J Med. 2006 Jun 8;354(23):2419-30.
                            </cite>
                        </footer>
                    </blockquote>
                </Col>
                <Col md="3">
                    <CorrelatedIdentifiers
                        dataset="mmml_correlation"
                        name="Correlated Genes in MMML"
                        columns={1}
                    />
                </Col>
            </Row>
        </AccessBlock>
        <Row>
            <Col sm="9">
                <Plot name="lymmml.lenz.boxplot" height={500} />
                <h3> Related Publications </h3>
                <blockquote className="blockquote">
                    <p className="mb-0">
                        <a href="http://www.nejm.org/doi/full/10.1056/NEJMoa0802885" target="blank">
                            Stromal Gene Signatures in Large-B-Cell Lymphomas
                        </a>
                    </p>
                    <footer className="blockquote-footer">
                        Lenz et. al.
                        <cite title="Source Title">
                            N Engl J Med 2008; 359:2313-2323
                        </cite>
                    </footer>
                </blockquote>
            </Col>
            <Col sm="3">
                <CorrelatedIdentifiers
                    dataset="lenz_correlation"
                    name="Correlated Genes in Lenz et al."
                    columns={2}
                />
            </Col>
        </Row>
        <Row>
            <Col sm="9">
                <Plot name="lymmml.reddy.boxplot" height={500} />
            </Col>
            <Col sm="3">
                <DatasetIdentifiers
                    dataset="reddy_expression"
                    name="Available Genes in Reddy et al."
                />
            </Col>
        </Row>
    </Container>
);

export default LymphomaExpressionResult;

