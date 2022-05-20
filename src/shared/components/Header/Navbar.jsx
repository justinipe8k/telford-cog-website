import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo_full_dark_750x200.png';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				<div className="nav-logo-div">
					<div className="nav-logo-subDiv1">
						<img alt='logo' className='logo_image' src={logo} />
					</div>
					<div className="nav-logo-subDiv2">
						<div>Mahanaim Church of God</div>
						<div>Telford</div>
					</div>

				</div>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>

			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						About Us
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/beliefs" className="nav-link" onClick={closeMenu}>
						Our Beliefs
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/ministries" className="nav-link" onClick={closeMenu}>
						Our Ministries
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/leadership" className="nav-link" onClick={closeMenu}>
						Our Leadership
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact Us
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;