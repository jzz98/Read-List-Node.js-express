const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/homeCotroller');

homeRouter.get('/', homeController.list);

homeRouter.post('/agregar-usuario', homeController.add);

module.exports = homeRouter;