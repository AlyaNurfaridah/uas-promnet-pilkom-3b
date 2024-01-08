import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";

function NavBar(props) {
  const { location } = props;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav" fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="bar">
              <Nav.Link as={Link} to="/" className={`link-nav ${location.pathname === '/' ? 'nav-aktif' : ''}`}>Home</Nav.Link>
              <Nav.Link as={Link} to="/inventory" className={`link-nav ${location.pathname === '/inventory' ? 'nav-aktif' : ''}`}>Data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default withRouter(NavBar);
