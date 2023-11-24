const { Router } = require("express");

const routers = Router();

routers.get("/", (req, res) => {
  res.send("hi");
});

module.exports = routers;
