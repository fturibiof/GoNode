const express = require('express');
const validate = require('express-validation');
const handle = require('express-async-handler');
const routes = express.Router();
// const UserController = require('./app/controllers/UserController');
const AdController = require('./app/controllers/AdController');
const controllers = require('./app/controllers');
const authMiddleware = require('./app/middlewares/auth');
const validators = require('./app/validators');

routes.post('/users', validate(validators.User), handle(controllers.UserController.store));
routes.post('/sessions', validate(validators.Session), handle(controllers.SessionController.store));
routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }));
routes.use(authMiddleware); // a partir daqui garante que usuario esteja autenticado
//Ads
routes.get('/ads', handle(controllers.AdController.index));
routes.get('/ads/:id', handle(controllers.AdController.show));
routes.post('/ads', validate(validators.Ad), handle(controllers.AdController.store));
routes.put('/ads/:id', validate(validators.Ad), handle(controllers.AdController.update));
routes.delete('/ads/:id', handle(controllers.AdController.destroy));

//Purchase
routes.post('/purchases', validate(validators.Purchase), handle(controllers.PurchaseController.store));

module.exports = routes;
