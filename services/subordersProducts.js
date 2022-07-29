const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class SuborderProductService
{
	constructor()
	{ }

	async create(data)
	{
		const newSuborderProduct = await models.SuborderProduct.create(data);

		return newSuborderProduct;
	}

	async find()
	{
		const subordersProducts = await models.SuborderProduct.findAll();

		return subordersProducts;
	}

	async findOne(id)
	{
		const suborderProduct = await models.SuborderProduct.findByPk(id);

		if (!suborderProduct)
		{
			throw boom.notFound('SuborderProduct not found');
		}

		return suborderProduct;
	}

	async update(id, changes)
	{
		const suborderProduct = await this.findOne(id);

		const rta = await suborderProduct.update(changes);

		return rta;
	}

	async delete(id)
	{
		const suborderProduct = await this.findOne(id);

		await suborderProduct.destroy();

		return { id };
	}
}

module.exports = SuborderProductService;
