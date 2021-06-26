import React, { useState, useEffect } from 'react';
import './cart.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Modal, Button, Form, Col } from 'react-bootstrap';

function Cart({ cart, deleteFromCart, checkout }) {
	const [show, setShow] = useState(false);
	const [total, setTotal] = useState(0);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let totalCheckout = 0;

	//eslint-disable-next-line
	useEffect(() => {
		setTotal(totalCheckout);
	});

	return (
		<>
			{cart.length ? (
				<>
					<div>
						{cart.map((product) => {
							let price = Number(
								product.price.slice(0, product.price.length - 1),
							);
							totalCheckout += price;
							return (
								<div className="cart" key={product.product_id}>
									<div>
										<div className="cartImgs">
											<img src={product.image} alt="product" width="70" />
										</div>
										<div className="title">
											<h3>{product.title}</h3>
										</div>
										<span
											style={{ cursor: 'pointer' }}
											className="delete"
											onClick={() => deleteFromCart(product.product_id)}
										>
											<FaRegTrashAlt size={30} color="#b76e78" />
										</span>
									</div>
									<p className="price">{product.price}</p>
								</div>
							);
						})}
					</div>
					<div className="total">
						<h3>Total: {total}</h3>
						<Button variant="secondary" onClick={handleShow}>
							Proceed
						</Button>

						<Modal show={show} onHide={handleClose} animation={false}>
							<Modal.Header closeButton>
								<Modal.Title>Place Order</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridPassword">
											<Form.Label>Full Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Your name"
												required
											/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												placeholder="Enter email"
												required
											/>
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="formGridAddress1">
										<Form.Label>Address</Form.Label>
										<Form.Control placeholder="1234 Main St" required />
									</Form.Group>

									<Form.Group controlId="formGridAddress2">
										<Form.Label>Address 2</Form.Label>
										<Form.Control
											placeholder="Apartment, studio, or floor"
											required
										/>
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridCity">
											<Form.Label>City</Form.Label>
											<Form.Control required />
										</Form.Group>

										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>State</Form.Label>
											<Form.Control
												as="select"
												defaultValue="Choose..."
												required
											>
												<option>Choose...</option>
												<option>...</option>
											</Form.Control>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridZip">
											<Form.Label>Zip</Form.Label>
											<Form.Control required />
										</Form.Group>
									</Form.Row>

									<Form.Group id="formGridCheckbox">
										<Form.Check
											type="radio"
											name="formHorizontalRadios"
											id="formHorizontalRadios1"
											label="Cash"
											required
										/>
										<Form.Check
											required
											type="radio"
											name="formHorizontalRadios"
											id="formHorizontalRadios2"
											label="Visa Card"
										/>
									</Form.Group>

									<Button variant="secondary" type="submit" onClick={checkout}>
										Check Out
									</Button>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									Close
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</>
			) : (
				<img
					alt="img"
					style={{ width: '40%', margin: 'auto auto auto 30%' }}
					src="https://www.99fashionbrands.com/wp-content/uploads/2020/12/empty_cart-1200x900.png"
				/>
			)}
		</>
	);
}

export default Cart;
