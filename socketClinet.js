
const net = require('net');

const client = new net.Socket();

const port = 2000;
const host = '127.0.0.1';


client.connect( port, host, () => {
  console.log('Connected to server');
  client.write('Hello, server!');
});

client.on('data', data => {
  console.log(`Received data from server: ${data}`);
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server');
});
