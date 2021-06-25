import React from 'react';

function Cart({ cart, deleteFromCart }) {
	return (
		<>
			{cart.length ? (
				<div>
					{cart.map((product) => {
						return (
							<div key={product.id}>
								<div>
									<img src={product.image} alt="product image" />
								</div>
								<h1>{product.title}</h1>
								<p>{product.description}</p>
								<p>{product.price}</p>
								<button onClick={() => deleteFromCart(product.id)}>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			) : (
				<h1>ما في اشي</h1>
			)}
		</>
	);
}

export default Cart;
