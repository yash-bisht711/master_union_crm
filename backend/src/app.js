require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');

// Use our new models/index.js
const { sequelize } = require('./models/index.js');

const { setupSockets } = require('./sockets');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/leads', require('./routes/leads'));

setupSockets(io);

// health check
app.get('/api/v1/ping', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('✅ Postgres connected');

    // Sync tables
    await sequelize.sync({ alter: true }); // safe for development

    server.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
  } catch (err) {
    console.error('❌ Startup error:', err);
    process.exit(1);
  }
}

start();

module.exports = app;
