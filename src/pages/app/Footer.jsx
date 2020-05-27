import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
    <div className="footer" >
        <Container fluid >
            <Row>
                <Col sm={{ size: 3, offset: 0 }} >
                    <a href="https://www.bmbf.de/en/index.html">
                        <img className="img-thumbnail" width="220px" src="/images/logos/bmbf-logo-eng.jpg" alt="BMBF Logo" />
                    </a>
                </Col>
                <Col sm={{ size: 7, offset: 0 }} >
                    <p>
                        <a href="http://genomics.uni-regensburg.de/">
                            Institute of Functional Genomics
                        </a>
                        <span> - Statistical Bioinformatics Department
                        </span>
                    </p>
                    <p>
                        <a href="http://www.uni-regensburg.de/">
                            University of Regensburg

                        </a>
                    </p>
                    <Link to="/contact" href="/contact" >
                        Contact/Impressum
                    </Link>
                    <span> · </span>
                    <Link to="/disclaimer" href="/disclaimer" >
                        Legal Notice
                    </Link>
                    <span> · </span>
                    <Link to="/privacy" href="/privacy" >
                        Privacy Policy
                    </Link>
                </Col>
                <Col sm="2">
                    <p> ©{(new Date()).getFullYear()} </p>
                    <span>Version {process.env.version}</span>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Footer;

