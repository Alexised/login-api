const { models } = require('../libs/sequelize');


async function createForm(formData) {
  try {
    const form = await models.Fill.create(formData);
    return form;
  } catch (error) {
    throw new Error('Error al crear el formulario');
  }
}

async function getAllForms() {
  try {
    const forms = await models.Fill.findAll();
    return forms;
  } catch (error) {
    throw new Error('Error al obtener todos los formularios');
  }
}

async function getFormById(id) {
  try {
    const form = await models.Fill.findByPk(id);
    if (!form) {
      throw new Error('Formulario no encontrado');
    }
    return form;
  } catch (error) {
    throw new Error('Error al obtener el formulario por ID');
  }
}

async function deleteFormById(id) {
  try {
    const deletedCount = await models.Fill.destroy({
      where: { id },
    });

    // Handle successful deletion (optional)
    if (deletedCount === 0) {
      console.log(`No form found with ID: ${id}`);
    } else {
      console.log(`Successfully deleted ${deletedCount} form(s)`);
    }

    return deletedCount; // Optional: Return the number of deleted rows
  } catch (error) {
    throw new Error('Error al eliminar el formulario');
  }
}

module.exports = { createForm, getAllForms, getFormById,deleteFormById };
