const express = require('express');
const routes = express.Router();
// const UserController = require('./app/controllers/UserController');
const AdController = require('./app/controllers/AdController');
const controllers = require('./app/controllers');
const authMiddleware = require('./app/middlewares/auth');

routes.post('/users', controllers.UserController.store);
routes.post('/sessions', controllers.SessionController.store);
routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }));
routes.use(authMiddleware); // a partir daqui garante que usuario esteja autenticado
//Ads
routes.get('/ads', controllers.AdController.index);
routes.get('/ads/:id', controllers.AdController.show);
routes.post('/ads', controllers.AdController.store);
routes.put('/ads/:id', controllers.AdController.update);
routes.delete('/ads/:id', controllers.AdController.destroy);

//Purchase
routes.post('/purchases', controllers.PurchaseController.store);

module.exports = routes;
