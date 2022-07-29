const Joi = require('joi');

const id = Joi.number().integer();
const numberPeople = Joi.number().integer().min(1);
const total = Joi.number().integer().min(10000);
const approvedGratuity = Joi.number().integer().min(1000);

const createOrderSchema = Joi.object({
	numberPeople: numberPeople.required(),
	total: total.required(),
	approvedGratuity: approvedGratuity.required(),
});

const getOrderSchema = Joi.object({
	id: id.required(),
});

const updateOrderSchema = Joi.object({
	numberPeople,
	total,
	approvedGratuity
});

module.exports = { createOrderSchema, getOrderSchema, updateOrderSchema };
