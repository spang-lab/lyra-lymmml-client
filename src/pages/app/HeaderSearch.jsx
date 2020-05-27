import React, { useContext } from 'react';
import { Typeahead, GlobalContext } from 'lyra-library';
import {
    Form,
    FormGroup,
} from 'reactstrap';

const Search = () => {
    const { changeIdentifiers } = useContext(GlobalContext);
    return (
        <Form inline>
            <FormGroup>
                <Typeahead
                    selectHandler={(d, e) => changeIdentifiers(d, e)}
                    multiple={false}
                    size="small"
                    species="homo sapiens"
                />
            </FormGroup>
        </Form>
    );
};
export default Search;
