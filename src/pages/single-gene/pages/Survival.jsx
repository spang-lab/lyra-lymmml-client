import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Plot } from 'lyra-library';

const LymphomaSurvival = () => (
    <Container fluid>
        <Row>
            <Col sm="6">
                <Plot name="lymmml.mmml.bl.survival" height={600} />
            </Col>
            <Col sm="6">
                <Plot name="lymmml.mmml.dlbcl.survival" height={600} />
            </Col>
        </Row>
        <Row>
            <Col sm="6">
                <Plot name="lymmml.lenz.chop.survival" height={600} />
            </Col>
            <Col sm="6">
                <Plot name="lymmml.lenz.rchop.survival" height={600} />
            </Col>
        </Row>
    </Container>
);

const NanostringSurvival = () => (
    <Container fluid>
        <Row>
            <Col sm="6">
                <Plot name="lymmml.nanostring.survival_all" height={600} />
            </Col>
            <Col sm="6">
                <Plot name="lymmml.nanostring.survival_smarter" height={600} />
            </Col>
        </Row>
        <Row>
            <Col sm="6">
                <Plot name="lymmml.nanostring.survival_megacoep2" height={600} />
            </Col>
            <Col sm="6">
                <Plot name="lymmml.nanostring.survival_megacoep3" height={600} />
            </Col>
        </Row>
        <Row>
            <Col sm="6">
                <Plot name="lymmml.nanostring.survival_ricover60" height={600} />
            </Col>
            <Col sm="6">
                <Plot name="lymmml.nanostring.survival_ricovernorth" height={600} />
            </Col>
        </Row>
        <Row>
            <Col sm="6">
                <Plot name="lymmml.nanostring.survival_denser" height={600} />
            </Col>
            <Col sm="6">
                <Plot name="lymmml.nanostring.survival_mint" height={600} />
            </Col>
        </Row>
    </Container>
);

const SurvivalResult = () => {
    const [activeTab, setTab] = useState('lymphoma');

    const getContent = (active) => {
        switch (active) {
        case 'lymphoma':
            return (<LymphomaSurvival />);
        case 'nanostring':
            return (<NanostringSurvival />);
        default:
            return (<div> Error </div>);
        }
    };

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        href="#"
                        className={(activeTab === 'lymphoma') ? 'active' : ''}
                        onClick={() => { setTab('lymphoma'); }}
                    >
                        Lymphomas
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#"
                        className={(activeTab === 'nanostring') ? 'active' : ''}
                        onClick={() => { setTab('nanostring'); }}
                    >
                        Staiger et. al.
                    </NavLink>
                </NavItem>
            </Nav>
            {getContent(activeTab)}
        </div>
    );
};

export default SurvivalResult;
