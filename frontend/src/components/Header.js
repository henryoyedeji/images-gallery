import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
