import React from 'react';
import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap';

const NavBar = (props) => {
    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">ProSoln</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/register">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Log In</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBar;