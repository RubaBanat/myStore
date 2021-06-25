import React from 'react';
import './product.css'
import { FaEye ,FaCartPlus } from "react-icons/fa";

function Product({ product, addToCart }) {
	return (
		<div className='productsDiv'> 
		<div class="container3">
			<div className='card3'>
			<div className='imgBx3'>
				<img src={product.image} alt="product image" width='200'/>
			</div>
			<div className="content3">
			{/* <p>{product.description}</p> */}
			<p> Price :{product.price}</p>
			<a style={{cursor:'pointer'}} onClick={() => addToCart(product)}><FaCartPlus size={30} color="#b76e78"/> </a>
			<a style={{marginLeft:'20%' , cursor:'pointer'}} > <FaEye size={30} color="#b76e78" /></a>
			</div>
			<h2 class="productName"> {product.title}
	  </h2>
			</div>
		</div>
		</div>

	);
}

export default Product;

