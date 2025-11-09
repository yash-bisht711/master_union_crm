require('dotenv').config();
const { sequelize } = require('./models/index');
const initModels = require('./models/init-models');

async function syncDB() {
  try {
    initModels();
    await sequelize.sync({ alter: true }); // Creates/updates tables
    console.log("✅ Database synced successfully!");
  } catch (error) {
    console.error("❌ Sync failed:", error);
  } finally {
    process.exit();
  }
}

syncDB();
