import React, { useState, useEffect } from 'react';
import Product from './../product/product';
import axios from 'axios';
import './products.css';

function Products({ addToCart, showDetail }) {
	const [products, setProducts] = useState([]);

	//eslint-disable-next-line
	useEffect(async () => {
		const { data } = await axios.get('http://localhost:3030/products');

		setProducts([...data]);
	}, []);

	return (
		<>
			{products.length ? (
				<div className='cardsDiv'>
					{products.map((product) => {
						return (
							<Product
								key={product.product_id}
								product={product}
								addToCart={addToCart}
								showDetail={showDetail}
							/>
						);
					})}
				</div>
			) : (
				<img
					alt="img"
					style={{ width: '20%', margin: 'auto auto auto 40%' }}
					src="https://beautymarkjo.com/wp-content/uploads/2020/12/NoProductImage-1.png"
				/>
			)}
		</>
	);
}

export default Products;
