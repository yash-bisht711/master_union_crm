
const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Lead = sequelize.define('Lead', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  status: { type: DataTypes.ENUM('new','contacted','qualified','lost','won'), defaultValue: 'new' }
}, { tableName: 'leads' });

module.exports = Lead;
