const connection = require('./../../database/database');

function getCartProducts(req, res) {
	const query = `SELECT * FROM product INNER JOIN cart ON product.product_id = cart.product_id;`;

	connection.query(query, (err, result) => {
		if (err) return res.status(400).json(err);

		res.status(200).json(result);
	});
}

function createCartProduct(req, res) {
	const productId = req.query.id;
	const query = `INSERT INTO cart (product_id) VALUES (?);`;
	const data = [productId];

	connection.query(query, data, (err, result) => {
		if (err) return res.status(400).json(err.sqlMessage);

		return res.status(201).json('Created Successfully');
	});
}

function deleteCartProduct(req, res) {
	const productCartId = req.params.productId;
	const query = `DELETE FROM cart WHERE product_id = ?;`;
	const data = [productCartId];

	connection.query(query, data, (err, result) => {
		if (err) return res.status(400).json(err.sqlMessage);

		return res.status(200).json('Deleted Successfully');
	});
}

module.exports = {
	getCartProducts,
	createCartProduct,
	deleteCartProduct,
};
