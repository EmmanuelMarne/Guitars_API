const express = require("express");
const routers = require("./routes");
const cors = require('cors');

const server = express();

// desactivar informacion de express en el header
server.disable('x-powered-by');

server.use(cors());
server.use(express.json());
server.use(routers);

// cuando no existe una ruta
server.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = server;
