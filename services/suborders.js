const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class SubordersService
{

	constructor()
	{ }

	async create(data)
	{
		const newSuborder = await models.Suborder.create(data);

		return newSuborder;
	}

	async find()
	{
		const suborders = await models.Suborder.findAll();

		return suborders;
	}

	async findOne(id)
	{
		const suborder = await models.Suborder.findByPk(id, {
			include: ['order', 'products']
		});

		if (!suborder)
		{
			throw boom.notFound('Suborder not found');
		}

		return suborder;
	}

	async update(id, changes)
	{
		const suborder = await this.findOne(id);

		const rta = await suborder.update(changes);

		return rta;
	}

	async delete(id)
	{
		const suborder = await this.findOne(id);

		await suborder.destroy();

		return { id };
	}

}

module.exports = SubordersService;
