const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_TABLE } = require('./orders');

const SUBORDER_TABLE = 'suborders';

const SuborderSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
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
	orderId: {
		field: 'order_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: ORDER_TABLE,
			key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL'
	}
}

class Suborder extends Model {
	static associate(models) {
		this.belongsTo(models.Order, { as: 'order' });

		this.belongsToMany(models.Product, {
			as: 'products',
			through: models.SuborderProduct,
			foreignKey: 'suborderId',
			otherKey: 'productId',
		});
	}

	static config(sequelize) {
		return {
			sequelize,
			tableName: SUBORDER_TABLE,
			modelName: 'Suborder',
			timestamps: false,
		}
	}
}

module.exports = { SUBORDER_TABLE, 	SuborderSchema, Suborder };
