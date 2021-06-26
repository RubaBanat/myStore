import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header/header';
import Products from './components/products/products';
import Cart from './components/cart/cart';
import Footer from './components/footer/footer';
import ProductDetail from './components/productDetail/productDetail';

import Slideshow from './components/header/slider';

function App() {
	const history = useHistory();

	const [cart, setCart] = useState([]);
	const [product, setProduct] = useState({});

	//eslint-disable-next-line
	useEffect(async () => {
		const { data } = await axios.get('http://localhost:3030/cart');
		setCart([...cart, ...data]);
		//eslint-disable-next-line
	}, []);

	const addToCart = async (pro) => {
		const product = cart.find(
			(cartPro) => pro.product_id === cartPro.product_id,
		);

		if (!product) {
			await axios.post(`http://localhost:3030/cart?id=${pro.product_id}`);
			setCart([...cart, pro]);
		}
	};

	const deleteFromCart = async (id) => {
		await axios.delete(`http://localhost:3030/cart/${id}`);
		const products = cart.filter((cartPro) => id !== cartPro.product_id);
		setCart([...products]);
	};

	const showDetail = (pro) => {
		setProduct(pro);
		history.push('/productDetail');
	};

	const checkout = async () => {
		for (let index = 0; index < cart.length; index++) {
			await axios.delete(
				`http://localhost:3030/cart/${cart[index].product_id}`,
			);
		}
		setCart([]);
	};

	return (
		<>
			<Header />
			<Slideshow />
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<Products addToCart={addToCart} showDetail={showDetail} />
					)}
				/>
				<Route
					exact
					path="/cart"
					render={() => (
						<Cart
							cart={cart}
							deleteFromCart={deleteFromCart}
							checkout={checkout}
						/>
					)}
				/>
				<Route
					exact
					path="/productDetail"
					render={() => (
						<ProductDetail product={product} addToCart={addToCart} />
					)}
				/>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
