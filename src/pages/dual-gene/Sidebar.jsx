
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router';
import {
    Nav,
    Card,
} from 'reactstrap';
import {
    SearchHistory,
    SidebarHeader,
    SidebarItem,
    SidebarContext,
} from 'lyra-library';

const getPane = (path, currentPane = 'info') => {
    const match = matchPath(path, {
        path: '/r/:token/:selectKey',
    });
    if (match && match.params.selectKey) {
        return match.params.selectKey;
    }
    return currentPane;
};

const Sidebar = (props) => {
    const [pane, setPane] = useState('info');
    const { location } = props;

    useEffect(() => {
        const { pathname } = location;
        const newPane = getPane(pathname, pane);
        setPane(newPane);
    }, [location, pane]);

    return (
        <Card body>
            <Nav pills vertical>
                <SidebarContext.Provider
                    value={pane}
                >
                    <SidebarItem
                        name="info"
                        label="Overview"
                    />
                    <SidebarItem
                        name="correlation"
                        label="Correlation"
                    />
                </SidebarContext.Provider>
                <SidebarHeader> Lymphoma Datasets </SidebarHeader>
                <SidebarHeader> Search History </SidebarHeader>
            </Nav>
            <SearchHistory />
        </Card>
    );
};


Sidebar.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

export default withRouter(Sidebar);
