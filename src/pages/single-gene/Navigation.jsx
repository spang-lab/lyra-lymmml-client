import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';
import Sidebar from './Sidebar';
import Header from './Header';

// Result Components
import Info from './pages/Info';
import LymphomaExpressionResult from './pages/LymphomaExpression';
import ChromosomalBreaksResult from './pages/CBreaks';
import NormalCellsResult from './pages/NormalCells';
import CelllineResult from './pages/Celllines';
import MacrophagesResult from './pages/Macrophages';
import ImmunologicalResult from './pages/Immunological';
import SurvivalResult from './pages/Survival';
import StringResult from './pages/String';
import DistributionResult from './pages/Distribution';

const SingleResults = () => (
    <Container fluid>
        <Row>
            <Col md={12}>
                <Header />
            </Col>
        </Row>
        <Row>
            <Col xs="5" sm="4" md="3" xl="2">
                <Sidebar />
            </Col>
            <Col xs="7" sm="8" md="9" xl="10">
                <Switch>
                    <Route
                        path="/r/:token/distribution"
                        component={DistributionResult}
                    />
                    <Route
                        path="/r/:token/expression"
                        component={LymphomaExpressionResult}
                    />
                    <Route
                        path="/r/:token/cbreaks"
                        component={ChromosomalBreaksResult}
                    />
                    <Route
                        path="/r/:token/normalcells"
                        component={NormalCellsResult}
                    />
                    <Route
                        path="/r/:token/cellines"
                        component={CelllineResult}
                    />
                    <Route
                        path="/r/:token/macrophages"
                        component={MacrophagesResult}
                    />
                    <Route
                        path="/r/:token/immunological"
                        component={ImmunologicalResult}
                    />
                    <Route
                        path="/r/:token/survival"
                        component={SurvivalResult}
                    />
                    <Route
                        path="/r/:token/string"
                        component={StringResult}
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
export default withRouter(SingleResults);
