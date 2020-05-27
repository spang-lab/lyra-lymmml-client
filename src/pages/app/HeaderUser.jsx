/* global window */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { getLoginUrl, getLogoutUrl, GlobalContext } from 'lyra-library';

import {
    NavItem,
    Button,
} from 'reactstrap';

const User = (props) => {
    const login = () => {
        const { location } = props;
        const origin = location.pathname;
        const loginUrl = getLoginUrl('lymmml', origin);
        window.location.href = loginUrl;
    };
    const logoutUrl = getLogoutUrl('lymmml');
    const { user, getUser } = useContext(GlobalContext);
    useEffect(() => {
        getUser();
    }, []);
    if (!user) {
        return (
            <React.Fragment>
                <NavItem className="px-3">
                    <Button
                        color="primary"
                        onClick={() => login()}
                    >
                        Login
                    </Button>
                </NavItem>
                <NavItem className="px-4" />
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <NavItem className="px-3">
                <Button>
                    {user.name}
                </Button>
            </NavItem>
            <NavItem className="px-3">
                <Button
                    onClick={() => { window.location.href = logoutUrl; }}
                >
                    Logout
                </Button>
            </NavItem>
        </React.Fragment>
    );
};

User.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};
export default withRouter(User);
