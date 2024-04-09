const express = require('express');
const router = express.Router();
const { createFormSchema } = require('../schemas/form.schema');
const FormService = require('../services/form.service');
const validationHandler = require('../middlewares/validator.handler');
const password = require('passport');
const { checkRoles } = require('../middlewares/auth.handler');

const formService = new FormService();
router.post('/',
password.authenticate('jwt', {session: false}),
checkRoles(1),
validationHandler(createFormSchema, 'body'),
async (req, res) => {
  try {
    const body = req.body;
    const newForm = await formService.createForm(body);
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/',
password.authenticate('jwt', {session: false}),
async (req, res) => {
  try {
    const forms = await formService.findAll();
    res.status(200).json(forms);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para buscar un formulario por su código
router.get('/:code',
password.authenticate('jwt', {session: false}),
async (req, res) => {
  try {
    const code = req.params.code;
    const form = await formService.findOneByCode(code);
    res.status(200).json(form);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:code',
  password.authenticate('jwt', { session: false }),
  checkRoles(1),
  async (req, res) => {
    try {
      const code = req.params.code;
      const result = await formService.deleteByCode(code);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

module.exports = router;
