import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

function ProductDetail(product, addToCart) {
	return (
		<Jumbotron>
			<h2 class="productName"> {product.title}</h2>
			<div className='imgBx3'>
				<img src={product.image} alt="product image" width='200' />
			</div>
			<p>
			{product.description}
			</p>
			<p>
				<Button onClick={() => addToCart(product)} variant="primary">Add To Cart</Button>
			</p>
		</Jumbotron>
	)
}

export default ProductDetail;
