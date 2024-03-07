const { Router } = require("express");
const guitarsRouter = require('./guitars.router');

const routers = Router();

routers.post('/', async (req, res) => {
  res.send("Hi, welcome again to server's guitars");
});

routers.get('/saludar', (req, res) => {
  res.send('otro saludo');
});

routers.use(guitarsRouter);

module.exports = routers;
