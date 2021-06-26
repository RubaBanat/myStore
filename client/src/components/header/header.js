import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
	return (
		<div>
			<div className="container">
				<div className="header-bar">
					<h1 className="logo">My Little Shop</h1>
					<ul className="slider-menu">
						<li>
							<Link to="/">Products</Link>
						</li>
						<li>
							<Link to="/cart">My Cart</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
