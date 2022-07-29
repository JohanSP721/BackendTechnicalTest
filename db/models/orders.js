const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDER_TABLE = 'orders';

const OrderSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	numberPeople: {
		allowNull: false,
		field: 'number_people',
		type: DataTypes.INTEGER
	},
	total: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	approvedGratuity: {
		allowNull: false,
		type: DataTypes.INTEGER,
		defaultValue: 0,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'created_at',
		defaultValue: Sequelize.NOW
	},
}

class Order extends Model {
	static associate(models) {
		this.hasMany(models.Suborder, {
			as: 'suborders',
			foreignKey: 'orderId',
		});
	}

	static config(sequelize) {
		return {
			sequelize,
			tableName: ORDER_TABLE,
			modelName: 'Order',
			timestamps: false,
		}
	}
}

module.exports = { ORDER_TABLE, OrderSchema, Order };
