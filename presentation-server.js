const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server, {
  cors: { origin: '*' }
});

let currentSlide = 0;

io.on('connection', (socket) => {
  socket.emit('slideUpdate', currentSlide);

  socket.on('nextSlide', () => {
    currentSlide++;
    io.emit('slideUpdate', currentSlide);
  });

  socket.on('prevSlide', () => {
    currentSlide = Math.max(0, currentSlide - 1);
    io.emit('slideUpdate', currentSlide);
  });

  socket.on('changeSlide', (idx) => {
    currentSlide = idx;
    io.emit('slideUpdate', currentSlide);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Presentation server listening on ${PORT}`);
});
