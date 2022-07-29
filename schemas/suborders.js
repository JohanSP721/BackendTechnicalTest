const Joi = require('joi');

const id = Joi.number().integer();
const total = Joi.number().integer().min(10000);
const approvedGratuity = Joi.number().integer().min(1000);
const orderId = Joi.number().integer();


const createSuborderSchema = Joi.object({
	orderId: orderId.required(),
	total: total.required(),
	approvedGratuity: approvedGratuity.required(),
});

const getSuborderSchema = Joi.object({
	id: id.required()
});

const updateSuborderSchema = Joi.object({
	total,
	approvedGratuity,
	orderId,
});

module.exports = { createSuborderSchema, getSuborderSchema, updateSuborderSchema };
