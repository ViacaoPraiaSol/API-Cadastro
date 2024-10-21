import joi from 'joi';


const ClearanceValidation = joi.object({
  levelName: joi.string().required()
});

const Company = joi.object({
  companyName: joi.string().required(),
  alias: joi.string().required(),
  companyIndex: joi.string().required(),
  acronym: joi.string().required(),
});

const User = joi.object({
  userName:  joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  clearance: joi.string().required(),
});


export =  {Company, ClearanceValidation, User};