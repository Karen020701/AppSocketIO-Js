// index.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Crear una aplicación Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Configurar el servidor de Socket.IO
io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  // Emitir un mensaje cuando un cliente se conecta
  socket.emit('message', 'Hola Mundo con Socket.IO!');

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
