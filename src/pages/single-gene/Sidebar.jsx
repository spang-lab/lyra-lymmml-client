
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, matchPath } from 'react-router';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavItem,
    NavLink,
    Card,
} from 'reactstrap';
import { SearchHistory, GlobalContext } from 'lyra-library';

const SidebarItem = (props) => {
    const { name, label, activePane } = props;
    const isActive = name === activePane;
    const color = (isActive) ? 'text-white' : '';
    return (
        <NavItem>
            <NavLink
                active={isActive}
                tag="span"
            >
                <Link
                    to={name}
                    className={color}
                >
                    {label}
                </Link>
            </NavLink>
        </NavItem>
    );
};

SidebarItem.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    activePane: PropTypes.string.isRequired,
};

const SidebarHeader = (props) => {
    const { children } = props;
    return (
        <NavItem>
            <NavLink disabled href="#">
                <h6>
                    {children}
                </h6>
            </NavLink>
        </NavItem>
    );
};

SidebarHeader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
SidebarHeader.defaultProps = {
    children: '',
};


const getPane = (path) => {
    const match = matchPath(path, {
        path: '/r/:token/:selectKey',
    });
    if (match && match.params.selectKey) {
        return match.params.selectKey;
    }
    return 'info';
};

const Sidebar = () => {
    const [pane, setPane] = useState('info');
    const { identifiers } = useContext(GlobalContext);
    const [identifier] = identifiers;

    const location = useLocation();
    useEffect(() => {
        const { pathname } = location;
        const newPane = getPane(pathname);
        setPane(newPane);
    }, [location]);

    const renderItem = (name, label) => (
        <SidebarItem
            name={name}
            activePane={pane}
            label={label}
        />
    );
    const renderLink = (name, href) => (
        <NavItem>
            <NavLink href={href} target="_blank">
                {name}
            </NavLink>
        </NavItem>
    );

    return (
        <Card body>
            <Nav pills vertical>
                {renderItem('info', 'Overview')}
                <SidebarHeader> Lymphoma Datasets </SidebarHeader>
                {renderItem('expression', 'Expression in Lymphoma')}
                {renderItem('cbreaks', 'Chromosomal Breaks')}
                {renderItem('survival', 'Survival')}
                {renderItem('normalcells', 'Normal Cells')}
                {renderItem('cellines', 'Cell Lines')}
                {renderItem('macrophages', 'Macrophages')}
                {renderItem('gliomhn', 'MHN Graph')}
                {renderItem('distribution', 'Distributions')}
                <SidebarHeader> Links </SidebarHeader>
                {renderItem('string', 'String')}
                {renderLink('Pubmed Articles', `http://www.ncbi.nlm.nih.gov/pubmed/?term=${identifier.name}+lymphoma`)}
                {renderLink('Genecards', `https://www.genecards.org/cgi-bin/carddisp.pl?gene=${identifier.name}`)}
                {renderLink('Cyclebase', `https://cyclebase.org/CyclebaseSearch?query=${identifier.name}`)}
                {renderLink('GTEx Expression', `https://gtexportal.org/home/gene/${identifier.name}`)}
                <SidebarHeader> Search History </SidebarHeader>
            </Nav>
            <SearchHistory />
        </Card>
    );
};


export default Sidebar;
