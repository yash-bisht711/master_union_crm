import { Sequelize } from "sequelize";
import UserModel from "./user.js";
import LeadModel from "./lead.js";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

// Initialize models
const User = UserModel(sequelize);
const Lead = LeadModel(sequelize);

// Associations
User.hasMany(Lead, { foreignKey: "ownerId", as: "leads" });
Lead.belongsTo(User, { foreignKey: "ownerId", as: "owner" });

export { sequelize, User, Lead };
