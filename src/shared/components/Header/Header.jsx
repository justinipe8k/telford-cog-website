import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import logo from './images/logo_full_dark_750x200.png';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbar'>
        <Navbar.Brand className='navbarHeader' href="/"  >
			
		<div className="nav-logo-div">
					<div className="nav-logo-subDiv1">
						<img alt='logo' className='logo_image_n' src={logo}  />
					</div>
					<div className="nav-logo-subDiv2 text3d">
						<div>Mahanaim Church of God</div>
						<div>Telford - UK</div>
					</div>

				</div>

		</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight:"20px"}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/kidsandyouth">Kids and Youth</Nav.Link>
            <Nav.Link href="/sermons">Sermons</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/leadership">Our Leadership</Nav.Link>
            <Nav.Link href="/contact">	Contact Us</Nav.Link>
          </Nav>         
        </Navbar.Collapse>
    </Navbar>
  );
}


export default Header;