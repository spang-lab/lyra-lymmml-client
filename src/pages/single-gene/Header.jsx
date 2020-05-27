import React, { useContext } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    FormGroup,
} from 'reactstrap';
import {
    IdentifierLink,
    GlobalContext,
    Typeahead,
} from 'lyra-library';


const ResultHeader = () => {
    const { identifiers, changeIdentifiers } = useContext(GlobalContext);
    const identifier = identifiers[0];
    if (!identifier) {
        return '';
    }
    const addIdentifier = (d) => {
        const newIdentifiers = [...identifiers, ...d];
        changeIdentifiers(newIdentifiers);
    };
    return (
        <Card className="my-3">
            <Container fluid>
                <Row>
                    <Col sm="3">
                        <IdentifierLink lyStyle="large" identifier={identifier} />
                    </Col>
                    <Col sm={{ size: 3, offset: 5 }}>
                        <Form className="m-3">
                            <FormGroup>
                                <Typeahead
                                    selectHandler={addIdentifier}
                                    multiple={false}
                                    placeholder="Add a gene..."
                                    species="homo sapiens"
                                />
                            </FormGroup>
                        </Form>
                    </Col>

                </Row>
            </Container>
        </Card>
    );
};

export default ResultHeader;
