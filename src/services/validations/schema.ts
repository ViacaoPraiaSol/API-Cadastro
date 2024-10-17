import joi from 'joi';

const clearanceLevel = joi.object({
  levelName: joi.string().required()
})

export = {clearanceLevel}