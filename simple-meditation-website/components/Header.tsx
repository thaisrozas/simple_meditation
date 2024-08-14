import React, { useState } from "react";
//css only imported in global files
//import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/NavLink";
import { Navbar, NavbarBrand, NavItem, NavbarCollapse, NavbarToggle, NavDropdown, DropdownItem, Dropdown, DropdownMenu, DropdownToggle } from "react-bootstrap";
import NavbarItem from "./NavbarItem";

export default function Header() {

    return (
        <Navbar className="head">
            <NavbarBrand className="head-logo-name" href="#">
                <img className="logo" src="simple-meditation-logo.png" alt="Simple meditation logo" />
                <h4 className="heading4">Simple meditation</h4>
            </NavbarBrand>

            <Nav activeKey="/home" className="nav-itens" as="ul">
                <NavbarItem classLink="heading5" classNav="nav-itens-item" item="About"></NavbarItem>
                <NavbarItem classLink="heading5" classNav="nav-itens-item" item="Community"></NavbarItem>
                <NavbarItem classLink="heading5" classNav="nav-itens-item" item="Meditation"></NavbarItem>
                <NavbarItem classLink="heading5" classNav="nav-itens-item" item="Plans"></NavbarItem>
                <NavbarItem classLink="heading5" classNav="nav-itens-item" item="Sign In"></NavbarItem>
                <NavbarItem classLink="heading6" classNav="nav-itens-item__register" item="Register"></NavbarItem>
            </Nav>
        </Navbar>
    );
}