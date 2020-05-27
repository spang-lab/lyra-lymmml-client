import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
} from 'reactstrap';


const Contact = () => (
    <Container fluid >
        <Row>
            <Col>
                <h2> Contact </h2>
            </Col>
        </Row>
        <Row>
            <Col sm={{ size: 3, offset: 1 }} >
                <Card body >
                    <CardTitle> Adress: </CardTitle>
                    <address>
                        <strong>Institute of Functional Genomics</strong><br />
                        University of Regensburg <br />
                        Am BioPark 9<br />
                        93053 Regensburg, Germany <br />
                        <abbr title="Phone">P:</abbr> +49 941 943 5054 <br />
                        <abbr title="Email">M:</abbr> sekretariat.genomik@ur.de
                    </address>
                </Card>
            </Col>
            <Col sm="3" >
                <Card body >
                    <CardTitle> Maintainer: </CardTitle>
                    <address>
                        <strong>Michael Huttner</strong><br />
                        Institute of Functional Genomics <br />
                        <br />
                        <br />
                        <br />
                        <abbr title="Email">M:</abbr> sysprog@mhuttner.com
                    </address>
                </Card>
            </Col>
        </Row>
    </Container>
);
export default Contact;
