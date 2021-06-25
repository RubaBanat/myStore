import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
// import logo from './logo1.png';

function Header() {
	return (
		<div>
			<div class="container">

				<div class="header-bar">
					{/* <img
                    src={logo}
                    width="100"
                    alt="little"/> */}
					<h1 class="logo">My Little Shop</h1>
					<ul class="slider-menu">
						<li><Link to="/">Products</Link></li>
						<li><Link to="/cart">My Cart</Link></li>
					</ul>
				</div>
			</div>

		</div>
	);
}

export default Header;
