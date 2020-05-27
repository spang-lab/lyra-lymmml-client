/* eslint-disable class-methods-use-this */
import React, { useState, useContext } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Button,
} from 'reactstrap';
import {
    HelpIcon,
    Typeahead,
    GlobalContext,
} from 'lyra-library';


const Search = () => {
    const [selection, setSelection] = useState([]);
    const { changeIdentifiers } = useContext(GlobalContext);
    const submit = (e) => {
        e.preventDefault();
        changeIdentifiers(selection);
    };

    return (
        <Container fluid>
            <Row>
                <Col sm={{ size: 6, offset: 3 }}>
                    <Form onSubmit={e => submit(e)}>
                        <FormGroup>
                            <Typeahead
                                selectHandler={d => setSelection(d)}
                                species="homo sapiens"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Container fluid>
                                <Row>
                                    <Col sm={{ size: 3, offset: 2 }}>
                                        <Button type="submit" size="large" color="primary">
                                            Search
                                        </Button>
                                    </Col>
                                    <Col>
                                        <HelpIcon>
                                            {'Enter any type of identifier of query, e.g "MYC" '}
                                        </HelpIcon>
                                    </Col>
                                </Row>
                            </Container>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;
