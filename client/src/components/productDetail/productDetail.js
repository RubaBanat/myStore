import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './productDetail.css';

function ProductDetail({ product, addToCart }) {
	console.log(product);
	return (
		<Jumbotron className="container details">

			<h2 className="productName"> {product.title}</h2>
			<div className="imgBx3">
				<img className='imgDetails' src={product.image} alt="product" width="200" />
			</div>
			<p>{product.description}</p>
			<p> Price: {product.price}</p>
			<p>
				<Button onClick={() => addToCart(product)} variant="secondary">
					Add To Cart
				</Button>
			</p>
		</Jumbotron>
	);
}

export default ProductDetail;
