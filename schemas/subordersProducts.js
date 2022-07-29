const Joi = require('joi');

const id = Joi.number().integer();
const amount = Joi.number().integer().min(1);
const suborderId = Joi.number().integer();
const productId = Joi.number().integer();

const createSuborderProductSchema = Joi.object({
	amount: amount.required(),
	suborderId: suborderId.required(),
	productId: productId.required(),
});

const getSuborderProductSchema = Joi.object({
	id: id.required()
});

const updateSuborderProductSchema = Joi.object({
	amount,
	suborderId,
	productId
});

module.exports = {
	createSuborderProductSchema,
	getSuborderProductSchema,
	updateSuborderProductSchema
};
