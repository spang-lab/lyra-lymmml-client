/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';


import {
    Spinner,
    GlobalContext,
} from 'lyra-library';

import NoResult from './NoResult';
import SingleGeneResults from '../single-gene/Navigation';
import DualGeneResults from '../dual-gene/Navigation';

const ResultNavigation = (props) => {
    const { identifiers, getIdentifiers } = useContext(GlobalContext);
    const { match } = props;
    const { token } = match.params;
    useEffect(() => {
        getIdentifiers(token);
    }, [token]);

    if (!identifiers || !identifiers.length) {
        return <Spinner />;
    }
    if (identifiers.every(i => i.type === 'gene name')) {
        if (identifiers.length === 1) {
            return <SingleGeneResults />;
        }
        if (identifiers.length === 2) {
            return <DualGeneResults />;
        }
    }
    return <NoResult />;
};

ResultNavigation.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired,
        }),
    }).isRequired,
};

export default withRouter(ResultNavigation);
