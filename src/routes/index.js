const { Router } = require("express");

const routers = Router();

routers.get("/", (req, res) => {
  res.send("Hi, welcome again to server's guitars");
});

module.exports = routers;
