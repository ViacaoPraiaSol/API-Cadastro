import joi from 'joi';

const ClearanceValidation = joi.object({
  levelName: joi.string().required()
})

const Company = joi.object({
  companyName: joi.string().required(),
  alias: joi.string().required(),
  companyIndex: joi.string().required(),
  acronym: joi.string().required(),
})


export = {Company,ClearanceValidation}