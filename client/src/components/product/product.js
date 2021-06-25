import React from 'react';

function Product({ product, addToCart }) {
	return (
		<div>
			<div>
				<img src={product.image} alt="product image" />
			</div>
			<h1>{product.title}</h1>
			<p>{product.description}</p>
			<p>{product.price}</p>
			<button onClick={() => addToCart(product)}>Add to my Cart</button>
		</div>
	);
}

export default Product;
