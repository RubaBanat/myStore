const connection = require('./../../database/database');

function getProducts(req, res) {
	const query = `SELECT * FROM product;`;

	connection.query(query, (err, result) => {
		if (err) return res.status(400).json(err);

		res.status(200).json(result);
	});
}

function productDetails(req, res) {
	const productId = req.params.id;
	const query = `SELECT * FROM product WHERE product_id =?;`;
	const data = [productId];

	connection.query(query, data, (err, result) => {
		if (err) return res.status(400).json(err);

		return res.status(200).json(result);
	});
}

function createProduct(req, res) {
	const { title, description, price, image } = req.body;
	const query = `INSERT INTO product (title, description, price, image) VALUES (?,?,?,?);`;
	const data = [title, description, price, image];

	connection.query(query, data, (err, result) => {
		if (err) return res.status(400).json(err);

		return res.status(201).json('Created Successfully');
	});
}

function updateProduct(req, res) {
	const productId = req.params.id;
	const { title, description, price, image } = req.body;
	const query = `UPDATE product SET title = ?, description = ? , price = ?,  image = ? WHERE product_id = ?;`;
	const data = [title, description, price, image, productId];

	connection.query(query, data, (err, result) => {
		if (err) return res.status(400).json(err);

		return res.status(200).json('Updated Successfully');
	});
}

function deleteProduct(req, res) {
	const productId = req.params.id;
	const query = `DELETE FROM product WHERE product_id = ?;`;
	const data = [productId];

	connection.query(query, data, (err, result) => {
		if (err) return res.status(400).json(err);

		return res.status(200).json('Deleted Successfully');
	});
}

module.exports = {
	getProducts,
	productDetails,
	createProduct,
	updateProduct,
	deleteProduct,
};
