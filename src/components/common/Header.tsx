import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = { color: "orange" };

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">Bugs Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ml-auto">
            <Nav.Item className="p-2">
              <NavLink activeStyle={activeStyle} exact to="/">
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item className="p-2">
              <NavLink activeStyle={activeStyle} to="/about">
                About
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
