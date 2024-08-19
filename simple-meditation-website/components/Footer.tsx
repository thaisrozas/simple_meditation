import React from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Image,
  Nav,
} from "react-bootstrap";
//css only imported in global files
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import NavbarItem from "./NavbarItem";

export default function Footer() {
  return (
    <>
      <footer>
        <Container className="footer-container">
          <section className="">
            <Image
              className="logo-footer"
              src="simple-meditation-logo-removebg.png"
            />
            <h4 className="logo-heading marginDefault">Simple meditation</h4>
            <p className="textFooter">
            Join the Simple Meditation community and discover the power of meditation to transform your life. Relieve stress, improve your focus, and achieve inner peace. Sign up now to start your journey towards well-being and tranquility.
            </p>
            {/* not based on the component navbaritem */}
            <Nav as="ul">
              <NavItem as="li" className="navbar__footer-itens-item">
                <NavLink href="/">
                  <Image
                    src="instagram.svg"
                    className="navbar__footer-itens-item__svg"
                  />
                </NavLink>
              </NavItem>
              <NavItem as="li" className="navbar__footer-itens-item">
                <NavLink href="/">
                  <Image
                    src="facebook.svg"
                    className="navbar__footer-itens-item__svg"
                  />
                </NavLink>
              </NavItem>
              <NavItem as="li" className="navbar__footer-itens-item">
                <NavLink href="/">
                  <Image
                    src="twitter.svg"
                    className="navbar__footer-itens-item__svg"
                  />
                </NavLink>
              </NavItem>
              <NavItem as="li" className="navbar__footer-itens-item">
                <NavLink href="/">
                  <Image
                    src="pinterest.svg"
                    className="navbar__footer-itens-item__svg"
                  />
                </NavLink>
              </NavItem>
              <NavItem as="li" className="navbar__footer-itens-item">
                <NavLink href="/">
                  <Image
                    src="linkedin.svg"
                    className="navbar__footer-itens-item__svg"
                  />
                </NavLink>
              </NavItem>
            </Nav>
          </section>
          <section>
            <h5 className="navbar__footer-headings">Company</h5>
            <Nav as="ul" className="navbar__footer-headings-itens">
              <NavbarItem
                classNav=""
                classLink="navbar__footer-headings-itens-link"
                link=""
                item="About"
              ></NavbarItem>
              <NavbarItem
                classNav=""
                classLink="navbar__footer-headings-itens-link"
                link=""
                item="Careers"
              ></NavbarItem>
              <NavbarItem
                classNav=""
                classLink="navbar__footer-headings-itens-link"
                link=""
                item="For companies"
              ></NavbarItem>
            </Nav>
          </section>
          <section>
            <h5 className="navbar__footer-headings">Services</h5>
            <Nav as="ul" className="navbar__footer-headings-itens">
              <NavbarItem
                classNav=""
                classLink="navbar__footer-headings-itens-link"
                link=""
                item="Blog"
              ></NavbarItem>
              <NavbarItem
                classNav=""
                classLink="navbar__footer-headings-itens-link"
                link=""
                item="Join us"
              ></NavbarItem>
            </Nav>
          </section>
          <section>
            <h5 className="navbar__footer-headings">Contact us</h5>
            <Nav>
              <NavbarItem
                classNav=""
                classLink="navbar__footer-headings-itens-link"
                link=""
                item="Contacts"
              ></NavbarItem>
            </Nav>
          </section>
        </Container>
      </footer>
    </>
  );
}
