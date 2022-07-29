const { Order, OrderSchema } = require('./orders');
const { Suborder, SuborderSchema } = require('./suborders');
const { Product, ProductSchema } = require('./products');
const { SuborderProduct, SuborderProductSchema } = require('./subordersProducts');

const setupModels = sequelize => {
	Order.init(OrderSchema, Order.config(sequelize));
	Suborder.init(SuborderSchema, Suborder.config(sequelize));
	Product.init(ProductSchema, Product.config(sequelize));
	SuborderProduct.init(SuborderProductSchema, SuborderProduct.config(sequelize));


	Order.associate(sequelize.models);
	Suborder.associate(sequelize.models);
};

module.exports = setupModels;
