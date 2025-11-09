
const { Sequelize } = require('sequelize');
const connectionString = process.env.DATABASE_URL || 'postgres://crmuser:crmpass@localhost:5432/crmdb';
const sequelize = new Sequelize(connectionString, { dialect: 'postgres', logging: false });

module.exports = { sequelize };
