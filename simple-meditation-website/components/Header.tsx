import React, { useState } from "react";
//css only imported in global files
//import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/NavLink";
import { Navbar, NavbarBrand, NavItem, NavbarCollapse, NavbarToggle, NavDropdown, DropdownItem, Dropdown, DropdownMenu, DropdownToggle } from "react-bootstrap";
import Container from "react-bootstrap/Container";


export default function Header() {

    // const [hover, setHover] = useState("hide");


    return (
        <Navbar className="head">
            <NavbarBrand className="head-logo-name" href="#">
                <img className="logo" src="simple-meditation-logo.png" alt="Simple meditation logo" />
                <h4 className="heading4">Simple meditation</h4>
            </NavbarBrand>

            <Nav activeKey="/home" className="nav-itens" as="ul">
                <NavItem as="li" className="nav-itens-item">
                    <NavLink href="#" className="heading5">About</NavLink>
                </NavItem>
                <NavItem as="li" className="nav-itens-item">
                    <NavLink href="#" className="heading5">Community</NavLink>
                </NavItem>
                <NavItem as="li" className="nav-itens-item">
                    <NavLink href="#" className="heading5">Meditation</NavLink>
                </NavItem>
                <NavItem as="li" className="nav-itens-item">
                    <NavLink href="#" className="heading5">Plans</NavLink>
                </NavItem>
                <NavItem as="li" className="nav-itens-item">
                    <NavLink href="#" className="heading5">Sign In</NavLink>
                </NavItem>
                <NavItem as="li" className="nav-itens-item">
                    <NavLink href="#" className="register heading6">Register</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}