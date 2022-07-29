const { Model, DataTypes, Sequelize } = require('sequelize');

const { SUBORDER_TABLE } = require('./suborders');
const { PRODUCT_TABLE } = require('./products');

const SUBORDER_PRODUCT_TABLE = 'suborders-products';

const SuborderProductSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	amount: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	suborderId: {
		field: 'suborder_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: SUBORDER_TABLE,
			key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL'
	},
	productId: {
		field: 'product_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: PRODUCT_TABLE,
			key: 'id'
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL'
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'created_at',
		defaultValue: Sequelize.NOW
	},
}

class SuborderProduct extends Model {
	static config(sequelize) {
		return {
			sequelize,
			tableName: SUBORDER_PRODUCT_TABLE,
			modelName: 'SuborderProduct',
			timestamps: false,
		}
	}
}

module.exports = { SUBORDER_PRODUCT_TABLE, SuborderProductSchema, SuborderProduct };
