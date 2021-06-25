import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Products from './components/products/products';
import Cart from './components/cart/cart';
import Footer from './components/footer/footer';

function App() {
	const [cart, setCart] = useState([]);

	const addToCart = (pro) => {
		const product = cart.find((cartPro) => pro.id === cartPro.id);

		if (!product) setCart([...cart, pro]);
	};

	const deleteFromCart = (id) => {
		const products = cart.filter((cartPro) => id !== cartPro.id);
		setCart([...products]);
	};

	return (
		<>
			<Header />
			<Switch>
				<Route
					exact
					path="/"
					render={() => <Products addToCart={addToCart} />}
				/>
				<Route
					exact
					path="/cart"
					render={() => <Cart cart={cart} deleteFromCart={deleteFromCart} />}
				/>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
