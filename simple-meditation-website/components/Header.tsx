import React, {useState} from "react";
//css only imported in global files
import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/NavLink";


export default function Header(){

    // const [hover, setHover] = useState("hide");
    /*<Nav className="nav-itens">

            </Nav>*/

    return (
        <header className="head">
            <Link href="/" className="head-logo-name">
                <img className="logo" src="simple-meditation-logo.png" alt="Simple meditation logo" />
                <h4 className="heading4">Simple meditation</h4>
            </Link>
            <Nav className="nav-itens">
            <div className="nav-itens-item">
                    <NavLink className="heading5">About</NavLink>
                    <img src="keyboard-arrow-down.svg" alt="" />
                </div>
                <div className="nav-itens-item">
                    <h5 className="heading5">Meditation</h5>
                    <img src="keyboard-arrow-down.svg" alt="" />
                    <NavLink></NavLink>
                </div>
                <div className="nav-itens-item">
                    <h5 className="heading5">Mindfullness</h5>
                    <img src="keyboard-arrow-down.svg" alt="" />
                    <NavLink></NavLink>
                </div>
                <div className="nav-itens-item">
                    <h5 className="heading5">Plans</h5>
                    <img src="keyboard-arrow-down.svg" alt="" />
                    <NavLink></NavLink>
                </div>
                <div className="nav-itens-item">
                    <h5 className="heading5">Sign in</h5>
                    <img src="keyboard-arrow-down.svg" alt="" />
                    <NavLink></NavLink>
                </div>
                <div className="nav-itens-item register">
                    <h5 className="heading6">Register</h5>
                    <NavLink></NavLink>
                </div>

            </Nav>

        </header>
    );
}