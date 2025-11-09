
function setupSockets(io) {
  io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
    socket.on('join', (room) => socket.join(room));
  });
}

// expose helper
module.exports = { setupSockets };
