const express = require('express');

const cartController = require('./../controllers/cartController');

const cartRouter = express.Router();

cartRouter.get('/', cartController.getCartProducts);
cartRouter.post('/', cartController.createCartProduct);
cartRouter.delete('/:productId', cartController.deleteCartProduct);

module.exports = cartRouter;
