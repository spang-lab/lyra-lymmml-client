import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} from 'reactstrap';

import { useBoolean } from 'lyra-library';

import User from './HeaderUser';
import Search from './HeaderSearch';

const Header = () => {
    const [isOpen, toggle] = useBoolean(false);

    return (
        <Navbar color="dark" dark expand="md">
            <Link to="/" href="/">
                <NavbarBrand tag="span">
                    <img
                        src="/images/logos/lyra_white.png"
                        width="40"
                        alt="Lyra Logo"
                    />
                    <span className="px-2 text-white">
                        Lymmml
                    </span>
                </NavbarBrand>
            </Link>
            <NavbarToggler onClick={() => toggle()} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem className="px-5">
                        <Search />
                    </NavItem>
                    <User />
                </Nav>
            </Collapse>
        </Navbar>
    );
};
export default Header;
