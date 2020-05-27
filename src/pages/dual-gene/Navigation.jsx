import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';

import Info from './pages/Info';
import Correlation from './pages/Correlation';


const Result = () => (
    <Container fluid>
        <Row className="py-3">
            <Col xs="5" sm="4" md="3" xl="2">
                <Sidebar />
            </Col>
            <Col>
                <Switch>
                    <Route
                        path="/r/:token/correlation"
                        component={Correlation}
                    />
                    <Route
                        path="/"
                        component={Info}
                    />
                </Switch>
            </Col>
        </Row>
    </Container>
);

export default withRouter(Result);
