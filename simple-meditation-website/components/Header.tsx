import React, { useState } from "react";
//css only imported in global files
//import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/NavLink";
import { Navbar, NavbarBrand, NavItem, NavbarCollapse, NavbarToggle, NavDropdown, DropdownItem, Dropdown, DropdownMenu, DropdownToggle, Container } from "react-bootstrap";
import NavbarItem from "./NavbarItem";

export default function Header() {

    return (
        <Navbar className="navbar__header">
            <Container>
                <NavbarBrand className="navbar__header-logo-name" href="#">
                    <img className="navbar__header-logo" src="simple-meditation-logo.png" alt="Simple meditation logo" />
                    <h4 className="logo-heading">Simple meditation</h4>
                </NavbarBrand>

                <Nav activeKey="/home" className="navbar__header-itens" as="ul">
                    <NavbarItem classLink="navbar__header-text" classNav="navbar__header-itens-item" item="About" link="#"></NavbarItem>
                    <NavbarItem classLink="navbar__header-text" classNav="navbar__header-itens-item" item="Community" link="#"></NavbarItem>
                    <NavbarItem classLink="navbar__header-text" classNav="navbar__header-itens-item" item="Meditation" link="#"></NavbarItem>
                    <NavbarItem classLink="navbar__header-text" classNav="navbar__header-itens-item" item="Plans" link="#"></NavbarItem>
                    <NavbarItem classLink="navbar__header-text" classNav="navbar__header-itens-item" item="Sign In" link="#"></NavbarItem>
                    <NavbarItem classLink="navbar__header-button" classNav="navbar__header-itens-item__register" item="Register" link="#"></NavbarItem>
                </Nav>
            </Container>
        </Navbar>
    );
}