
const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Activity = sequelize.define('Activity', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  type: { type: DataTypes.ENUM('note','call','meeting','email'), defaultValue: 'note' },
  note: { type: DataTypes.TEXT }
}, { tableName: 'activities' });

module.exports = Activity;
