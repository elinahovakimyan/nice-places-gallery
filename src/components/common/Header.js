import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({path}) => {
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            Jouney
          </Link>
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
        {!path.includes("gallery") &&
          <NavItem eventKey={1} href="#">
            Have a Safe Trip!
          </NavItem>}
        {path.includes("gallery") &&
          <NavItem eventKey={1} href="#">
            Enjoy the Gallery!
          </NavItem>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { Header };
