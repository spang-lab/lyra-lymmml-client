import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Card,
    CardImg,
} from 'reactstrap';

const Title = () => (
    <div>
        <Jumbotron className="search" >
            <Container fluid >
                <Row>
                    <Col sm="2" >
                        <Card>
                            <a href="http://www.uni-regensburg.de" >
                                <CardImg
                                    width="300px"
                                    src="/images/logos/uni.jpg"
                                    alt="Logo University of Regensburg"
                                />
                            </a>
                        </Card>
                    </Col>
                    <Col className="text-center" >
                        <h1 className="display-3" > LYMMML </h1>
                        <p className="lead"> the MMMLymphoma Miner </p>
                    </Col>
                    <Col sm="3" >
                        <Card>
                            <a href="https://www.sys-med.de/en/demonstrators/mmml-demonstrators/">
                                <CardImg
                                    width="400px"
                                    src="/images/logos/eMed-logo.jpg"
                                    alt="Logo eMed"
                                />
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </div>
);

export default Title;
