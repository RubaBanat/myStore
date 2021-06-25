import React, { useState, useEffect } from 'react';
import Product from './../product/product';

const productsArr = [
	{
		id: 1,
		title: 'anything',
		description: 'anything',
		price: '100000000$',
		image:
			'',
	},
	{
		id: 2,
		title: 'anything',
		description: 'anything',
		price: '100000000$',
		image:
			'',
	},
	{
		id: 3,
		title: 'anything',
		description: 'anything',
		price: '100000000$',
		image:
			'',
	},
	{
		id: 4,
		title: 'anything',
		description: 'anything',
		price: '100000000$',
		image:
			'',
	},
];

function Products() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		setProducts([...productsArr, ...products]);
	}, []);

	const addToCart = (pro) => {
		const product = cart.find((cartPro) => pro.id === cartPro.id);

		if (!product) setCart([...cart, pro]);
	};

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
