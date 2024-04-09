const express = require('express');
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const authRouter = require('./auth.router');
const formsRouter = require('./forms.router');
const fillRouter = require('./fill.router');
const signatureRouter = require('./signature.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/auth', authRouter);
  router.use('/forms', formsRouter);
  router.use('/fills', fillRouter);
  router.use('/signature', signatureRouter);

}

module.exports = routerApi;
