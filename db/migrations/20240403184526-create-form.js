'use strict';

const { FORM_TABLE } = require('./../models/form.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(FORM_TABLE, {
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      code: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.STRING
      },
      activities: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: []
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(FORM_TABLE);
  }
};
