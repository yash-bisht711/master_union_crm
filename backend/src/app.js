
/**
 * Minimal Express app with Sequelize setup, Socket.IO, and example routes.
 * Extend controllers and models to implement full features.
 */
require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { sequelize } = require('./models');
const initModels = require('./models/init-models');
const { setupSockets } = require('./sockets');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Initialize models & relations
initModels();

// routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/leads', require('./routes/leads'));

setupSockets(io);

// health
app.get('/api/v1/ping', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
async function start() {
  try {
    await sequelize.authenticate();
    console.log('Postgres connected');
    await sequelize.sync({ alter: true }); // for dev; change for prod
    server.listen(PORT, () => console.log('Server listening on', PORT));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
start();

module.exports = app;
