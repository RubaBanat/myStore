import React, { useState, useEffect } from 'react';
import Product from './../product/product';

const productsArr = [
	{
		id: 1,
		title: 'Anything',
		description: 'anything',
		price: '1000$',
		image:
			'https://alhootplus.com/wp-content/uploads/2021/03/iphone-12-pro-blue-hero.png',
	},
	{
		id: 2,
		title: 'Anything',
		description: 'anything',
		price: '100$',
		image:
			'https://alhootplus.com/wp-content/uploads/2021/03/iphone-12-pro-blue-hero.png',
	},
	{
		id: 3,
		title: 'Anything',
		description: 'anything',
		price: '10$',
		image:
			'https://alhootplus.com/wp-content/uploads/2021/03/iphone-12-pro-blue-hero.png',
	},
	{
		id: 4,
		title: 'Anything',
		description: 'anything',
		price: '10000$',
		image:
			'https://alhootplus.com/wp-content/uploads/2021/03/iphone-12-pro-blue-hero.png',
	},
];

function Products({ addToCart }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts([...productsArr]);
	}, []);

	return (
		<>
			{products.length ? (
				<div>
					{products.map((product) => {
						return (
							<Product
								key={product.id}
								product={product}
								addToCart={addToCart}
							/>
						);
					})}
				</div>
			) : (
				<h1>There are no products</h1>
			)}
		</>
	);
}

export default Products;
