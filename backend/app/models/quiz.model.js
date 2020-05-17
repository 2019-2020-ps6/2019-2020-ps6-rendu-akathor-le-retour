const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')


module.exports = new BaseModel('Quiz', {
  theme: Joi.object().required(),
  name: Joi.string().required(),
  difficulte: Joi.string(),
})
