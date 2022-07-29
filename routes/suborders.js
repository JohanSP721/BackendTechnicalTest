const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');

const SuborderService = require('../services/suborders');

const {
	createSuborderSchema,
	getSuborderSchema,
	updateSuborderSchema,
} = require('../schemas/suborders');

const router = express.Router();

const service = new SuborderService();

router.get('/', async (req, res, next) =>
{
	try
	{
		const suborders = await service.find();

		res.json(suborders);
	}

	catch (error)
	{
		next(error);
	}
});

router.get('/:id',
	validatorHandler(getSuborderSchema, 'params'),
	async (req, res, next) =>
	{
		try
		{
			const { id } = req.params;

			const suborder = await service.findOne(id);

			res.json(suborder);
		}

		catch (error)
		{
			next(error);
		}
	}
);

router.post('/',
	validatorHandler(createSuborderSchema, 'body'),
	async (req, res, next) =>
	{
		try
		{
			const body = req.body;

			const newSuborder = await service.create(body);

			res.status(201).json(newSuborder);
		}

		catch (error)
		{
			next(error);
		}
	}
);

router.patch('/:id',
	validatorHandler(getSuborderSchema, 'params'),
	validatorHandler(updateSuborderSchema, 'body'),
	async (req, res, next) =>
	{
		try
		{
			const { id } = req.params;
			const body = req.body;

			const suborder = await service.update(id, body);

			res.json(suborder);
		}

		catch (error)
		{
			next(error);
		}
	}
);

router.delete('/:id',
	validatorHandler(getSuborderSchema, 'params'),
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
