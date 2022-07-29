'use strict';

const { OrderSchema, ORDER_TABLE } = require('../models/orders');
const { ProductSchema, PRODUCT_TABLE } = require('../models/products');
const { SuborderSchema, SUBORDER_TABLE } = require('../models/suborders');
const { SuborderProductSchema, SUBORDER_PRODUCT_TABLE } = require('../models/subordersProducts');

module.exports = {
  up: async (queryInterface) => {
	await queryInterface.createTable(ORDER_TABLE, OrderSchema);
	await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
	await queryInterface.createTable(SUBORDER_TABLE, SuborderSchema);
	await queryInterface.createTable(SUBORDER_PRODUCT_TABLE, SuborderProductSchema);
  },

  down: async (queryInterface) => {
	  await queryInterface.dropTable(SUBORDER_PRODUCT_TABLE);
	  await queryInterface.dropTable(SUBORDER_TABLE);
	  await queryInterface.dropTable(PRODUCT_TABLE);
	await queryInterface.dropTable(ORDER_TABLE);
  }
};
