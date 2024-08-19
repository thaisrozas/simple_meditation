import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/NavLink";
import { Navbar, NavbarBrand, NavItem, NavbarCollapse, NavbarToggle, NavDropdown, DropdownItem, Dropdown, DropdownMenu, DropdownToggle } from "react-bootstrap";

//which props should this component receive? Class, link and item name
export default function NavbarItem(props) {
    return (
        <NavItem as="li" className={props.classNav}>
            <NavLink href={props.link} className={props.classLink}>{props.item}</NavLink>
        </NavItem>
    );
}