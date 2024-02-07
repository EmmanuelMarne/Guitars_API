const express = require("express");
const routers = require("./routes");

const server = express();

// desactivar informacion de express en el header
server.disable('x-powered-by')

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use(routers);

// cuando no existe una ruta
server.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = server;
