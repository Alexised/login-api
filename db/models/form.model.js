const { Model, DataTypes, Sequelize } = require('sequelize');

const FORM_TABLE = 'forms';

const FormSchema = {
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  code: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true,
  },
  activities: {
    type: DataTypes.JSONB,
    defaultValue: [],
    allowNull: true
  }
};

class Form extends Model {

  static config(sequelize) {
    return {
      sequelize,
      tableName: FORM_TABLE,
      modelName: 'Form',
      timestamps: false
    };
  }
}

module.exports = { Form, FormSchema, FORM_TABLE };
