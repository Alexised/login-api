const Joi = require('joi');

const name = Joi.string().min(3).max(130);
const code = Joi.string().min(3).max(30);
const activity = Joi.string();

const createFormSchema = Joi.object({
  code: code.required(),
  name: name.required(),
  activities: Joi.array().items(Joi.object({
    activity: activity.required()
  })).min(1).required()
});


module.exports = { createFormSchema };
