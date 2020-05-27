import React, { useContext } from 'react';

import { Container, Row, Col } from 'reactstrap';
import {
    IdentifierLink,
    IdentifierInfo,
    NcbiInfo,
    GlobalContext,
} from 'lyra-library';

const Info = () => {
    const { identifiers } = useContext(GlobalContext);
    if (identifiers.length !== 2) {
        return '';
    }
    return (
        <Container fluid>
            <Row>
                <Col className="mx-3">
                    <IdentifierLink
                        lyStyle="large"
                        identifier={identifiers[0]}
                    />
                    <hr />
                    <IdentifierInfo identifierIndex={0} />
                    <NcbiInfo
                        identifierIndex={0}
                        parameters={{ species: 'homo sapiens' }}
                    />
                </Col>
                <Col className="mx-3">
                    <IdentifierLink
                        lyStyle="large"
                        identifier={identifiers[1]}
                    />
                    <hr />
                    <IdentifierInfo identifierIndex={1} />
                    <NcbiInfo
                        identifierIndex={1}
                        parameters={{ species: 'homo sapiens' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
export default Info;
