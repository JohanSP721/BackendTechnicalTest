const express = require('express');

const orderRouter = require('./orders');
const productRouter = require('./products');
const suborderRouter = require('./suborders');
const suborderProductRouter = require('./subordersProducts');

const routerApi = app =>
{
	const router = express.Router();

	app.use('/api/v1', router);
	router.use('/orders', orderRouter);
	router.use('/products', productRouter);
	router.use('/suborders', suborderRouter);
	router.use('/suborders-products', suborderProductRouter);
}

module.exports = routerApi;
