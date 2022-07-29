const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');

const SuborderProductService = require('../services/subordersProducts');

const {
	createSuborderProductSchema,
	getSuborderProductSchema,
	updateSuborderProductSchema,
} = require('../schemas/subordersProducts');

const router = express.Router();

const service = new SuborderProductService();

router.get('/', async (req, res, next) =>
{
	try
	{
		const subordersProducts = await service.find();

		res.json(subordersProducts);
	}

	catch (error)
	{
		next(error);
	}
});

router.get('/:id',
	validatorHandler(getSuborderProductSchema, 'params'),
	async (req, res, next) =>
	{
		try
		{
			const { id } = req.params;

			const suborderProduct = await service.findOne(id);

			res.json(suborderProduct);
		}

		catch (error)
		{
			next(error);
		}
	}
);

router.post('/',
	validatorHandler(createSuborderProductSchema, 'body'),
	async (req, res, next) =>
	{
		try
		{
			const body = req.body;

			const newSuborderProduct = await service.create(body);

			res.status(201).json(newSuborderProduct);
		}

		catch (error)
		{
			next(error);
		}
	}
);

router.patch('/:id',
	validatorHandler(getSuborderProductSchema, 'params'),
	validatorHandler(updateSuborderProductSchema, 'body'),
	async (req, res, next) =>
	{
		try
		{
			const { id } = req.params;
			const body = req.body;

			const suborderProduct = await service.update(id, body);

			res.json(suborderProduct);
		}

		catch (error)
		{
			next(error);
		}
	}
);

router.delete('/:id',
	validatorHandler(getSuborderProductSchema, 'params'),
	async (req, res, next) =>
	{
		try
		{
			const { id } = req.params;

			await service.delete(id);

			res.status(201).json({ id });
		}

		catch (error)
		{
			next(error);
		}
	}
);

module.exports = router;
