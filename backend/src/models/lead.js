import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Lead = sequelize.define("Lead", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "new" },
  });

  return Lead;
};
