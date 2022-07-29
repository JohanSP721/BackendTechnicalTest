const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const price = Joi.number().integer();
const description = Joi.string().min(3).max(500);
const image = Joi.string().min(3).max(100);

const createProductSchema = Joi.object({
	name: name.required(),
	price: price.required(),
	description: description.required(),
	image: image.required(),
});

const getProductSchema = Joi.object({
	id: id.required(),
});

const updateProductSchema = Joi.object({
	name,
	price,
	description,
	image,
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
