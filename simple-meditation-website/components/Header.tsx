import React, {useState} from "react";
//css only imported in global files
//import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/NavLink";
import { Navbar, NavbarBrand, NavItem, NavbarCollapse, NavbarToggle, NavDropdown, DropdownItem, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";


export default function Header(){

    // const [hover, setHover] = useState("hide");


    return (
        <Navbar>
            <Container className="head">
                <NavbarBrand className="head-logo-name" href="#">
                    <img className="logo" src="simple-meditation-logo.png" alt="Simple meditation logo" />
                    <h4 className="heading4">Simple meditation</h4>
                </NavbarBrand>
                
                    <Nav className="nav-itens">
                        <NavLink className="heading5">About</NavLink>
                        <NavLink className="heading5">Community</NavLink>
                        <NavLink className="heading5">Meditation and Mindfulness</NavLink>
                        <NavLink className="heading5">Plans</NavLink>
                        <NavLink className="heading5">Sign In</NavLink>
                        <NavLink className="register heading6">Register</NavLink>
                    </Nav>
            </Container>
        </Navbar>
    );
}