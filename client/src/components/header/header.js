import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div>
			<div>
				<h2>Logo</h2>
			</div>
			<div>
				<Link to="/">Products</Link>
				<Link to="/cart">My Cart</Link>
			</div>
		</div>
	);
}

export default Header;
