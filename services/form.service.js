const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class FormService {

  constructor() {}

  async createForm(data) {
    try {
      const newForm = await models.Form.create(data);
      return newForm;
    } catch (error) {
      throw boom.badImplementation('Error al crear el formulario', error);
    }
  }
  async findAll() {
    try {
      const forms = await models.Form.findAll({
        attributes: ['name', 'code'] // Obtener solo los campos 'name' y 'code'
      });
      return forms;
    } catch (error) {
      throw boom.badImplementation('Error al buscar los formularios', error);
    }
  }
  async findOneByCode(code) {
    try {
      const form = await models.Form.findOne({
        where: {
          code: code
        }
      });
      if (!form) {
        throw boom.notFound('Formulario no encontrado');
      }
      return form;
    } catch (error) {
      throw boom.badImplementation('Error al buscar el formulario', error);
    }
  }
  async deleteByCode(code) {
    try {
      const form = await models.Form.findOne({
        where: {
          code: code
        }
      });
      if (!form) {
        throw boom.notFound('Formulario no encontrado');
      }
      await form.destroy();
      return { message: 'Formulario eliminado correctamente' };
    } catch (error) {
      throw boom.badImplementation('Error al eliminar el formulario', error);
    }
  }
}

module.exports = FormService;
