import React, { useState } from 'react'; import './cart.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { Modal, Button, Form, Col } from 'react-bootstrap'

function Cart({ cart, deleteFromCart }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{cart.length ? (
				<>
					<div>
						{cart.map((product) => {
							return (
								<>
									<div className='cart'>
										<div key={product.id}>
											<div className='cartImgs'>
												<img src={product.image} alt="product image" width='100' />
											</div>
											<div className='title'>
												<h3>{product.title}</h3>
											</div>
											<a style={{ cursor: 'pointer' }} className='delete' onClick={() => deleteFromCart(product.id)}>
												<FaRegTrashAlt size={30} color="#b76e78" />
											</a>
										</div>
										<p className='price'>{product.price}</p>
									</div>

								</>
							);
						})}
					</div>
					<div className='total'>
						<h3>
							Total :
						</h3>
						<Button variant="secondary" onClick={handleShow}>
							Proceed      </Button>

						<Modal show={show} onHide={handleClose} animation={false}>
							<Modal.Header closeButton>
								<Modal.Title>Place Order</Modal.Title>
							</Modal.Header>
							<Modal.Body>


								<Form>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridPassword">
											<Form.Label>Full Name</Form.Label>
											<Form.Control type="text" placeholder="Your name" />
										</Form.Group>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Email</Form.Label>
											<Form.Control type="email" placeholder="Enter email" />
										</Form.Group>

									</Form.Row>

									<Form.Group controlId="formGridAddress1">
										<Form.Label>Address</Form.Label>
										<Form.Control placeholder="1234 Main St" />
									</Form.Group>

									<Form.Group controlId="formGridAddress2">
										<Form.Label>Address 2</Form.Label>
										<Form.Control placeholder="Apartment, studio, or floor" />
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} controlId="formGridCity">
											<Form.Label>City</Form.Label>
											<Form.Control />
										</Form.Group>

										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>State</Form.Label>
											<Form.Control as="select" defaultValue="Choose...">
												<option>Choose...</option>
												<option>...</option>
											</Form.Control>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridZip">
											<Form.Label>Zip</Form.Label>
											<Form.Control />
										</Form.Group>
									</Form.Row>

									<Form.Group id="formGridCheckbox">
										<Form.Check type="radio" name="formHorizontalRadios"
											id="formHorizontalRadios1" label="Cash" />
										<Form.Check type="radio" name="formHorizontalRadios"
											id="formHorizontalRadios2" label="Visa Card" />
									</Form.Group>

									<Button variant="secondary" type="submit">
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
			)
				: (
					<img style={{ width: '40%', margin: 'auto auto auto 30%' }}
						src='https://www.99fashionbrands.com/wp-content/uploads/2020/12/empty_cart-1200x900.png' />

				)}

		</>
	);
}

export default Cart;
