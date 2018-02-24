import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Header = () => {
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Nice Gallery
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/">
            Homepage
          </NavItem>
          <NavItem eventKey={2} href="/gallery">
            Gallery
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Have a Safe Trip!
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { Header };
