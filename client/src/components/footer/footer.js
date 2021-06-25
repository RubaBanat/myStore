import React from 'react';
import "./footer.css";
import logo from './logo1.png';

function Footer() {
	return (
		<div className="main-footer">
		  <div className="container">
			<div className="row">
			  <div className="col">
				<h2>About us</h2>
				<h6 className="list-unstyled">
				  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
				</h6>
			  </div>

			  <div className="col">
				<h2>Stuff</h2>
				<ui className="list-unstyled">
				  <li>RUBA STUFF</li>
				  <li>WALEED STUFF</li>
				  <li>OTHER STUFF</li>
				</ui>
			  </div>
			  <div className="col">
				 <img
				 style={{}}
                    src={logo}
                    width="250"
                    alt="little"/>
			  </div>
			  <div className="col">
				<h2>Contact us</h2>
				<ui className="list-unstyled">
				  <li>RUBA BANAT</li>
				  <li>OTHER STUFF</li>
				  <li>GUD STUFF</li>
				</ui>
			  </div>
			  <div className="col">
				<h2>Reach us</h2>
				<h5 className="list-unstyled">
				  <li>079-999-6969</li>
				  <li>Jordan, Amman</li>
				  <li>123 Streeet South North</li>
				</h5>
			  </div>
			</div>
			<hr />
			<div className="row">
			  <p className="col-sm">
				&copy;{new Date().getFullYear()} My Little Shop | All rights reserved |
				Terms Of Service | Privacy
			  </p>
			</div>
		  </div>
		</div>
	  );
}

export default Footer;
