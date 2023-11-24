const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Hi, welcome to server's guitars");
});

module.exports = server;
