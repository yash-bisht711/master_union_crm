
const User = require('./user');
const Lead = require('./lead');
const Activity = require('./activity');

module.exports = function initModels() {
  // relations
  User.hasMany(Lead, { foreignKey: 'ownerId', as: 'leads' });
  Lead.belongsTo(User, { foreignKey: 'ownerId', as: 'owner' });

  Lead.hasMany(Activity, { foreignKey: 'leadId', as: 'activities' });
  Activity.belongsTo(Lead, { foreignKey: 'leadId', as: 'lead' });

  return { User, Lead, Activity };
};
