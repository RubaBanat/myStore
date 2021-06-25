import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Products from './components/products/products';
import Cart from './components/cart/cart';
import Footer from './components/footer/footer';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Products} />
				<Route exact path="/cart" component={Cart} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
