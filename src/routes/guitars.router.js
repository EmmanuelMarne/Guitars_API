const { Router } = require('express');
const postGuitarController = require('../controllers/postGuitar.controller');
const deleteGuitarController = require('../controllers/deleteGuitar.controller');

const guitarsRouter = Router();

guitarsRouter.get('/guitars', (req, res) => {});
guitarsRouter.post('/guitars', postGuitarController);
guitarsRouter.delete('/guitars', deleteGuitarController);

module.exports = guitarsRouter;
