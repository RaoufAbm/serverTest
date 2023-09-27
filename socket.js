const net = require('net');

const server = net.createServer(socket => {
  console.log('Client connected');

  // Handle data received from the client
  socket.on('data', data => {
    console.log(`Received data from client: ${data}`);
    socket.write('Server received your data.');
  });

  // Handle socket closure
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const port = 2000;
server.listen(port, () => {
  console.log(`TCP server is listening on port ${port}`);
});
