const Joi = require("joi");

const userByIdSchema = (req, res, next) => {
  let output = {};
  let { params } = req;
  let schema = Joi.object({
    id: Joi.string(),
  });
  let { error } = schema.validate(params);
  if (error) {
    output.message = error.details[0].message;
    output.data = [];
    output.status = 422;
    return res.status(422).send(output);
  }
  next();
};

const userCreateSchema = (req, res, next) => {
  let output = {};
  let { body } = req;
  let schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    middle_name: Joi.string(),
    dob: Joi.string(),
    email: Joi.string().required(),
    mobile_no: Joi.string().required(),
    password: Joi.string().required(),
    occupation: Joi.string(),
    company: Joi.string(),
  });
  let { error } = schema.validate(body);
  if (error) {
    output.message = error.details[0].message;
    output.data = [];
    output.status = 422;
    return res.status(422).send(output);
  }
  next();
};

const updateCreateSchema = (req, res, next) => {
  let output = {};
  let { body } = req;
  let schema = Joi.object({
    id: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    middle_name: Joi.string(),
    dob: Joi.string(),
    email: Joi.string().required(),
    mobile_no: Joi.string().required(),
    occupation: Joi.string(),
    company: Joi.string(),
  });
  let { error } = schema.validate(body);
  if (error) {
    output.message = error.details[0].message;
    output.data = [];
    output.status = 422;
    return res.status(422).send(output);
  }
  next();
};

const deleteuserSchema = (req, res, next) => {
  let output = {};
  let { params } = req;
  let schema = Joi.object({
    id: Joi.string(),
  });
  let { error } = schema.validate(params);
  if (error) {
    output.message = error.details[0].message;
    output.data = [];
    output.status = 422;
    return res.status(422).send(output);
  }
  next();
};

const loginSchema = (req, res, next) => {
  let output = {};
  let { body } = req;
  let schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  let { error } = schema.validate(body);
  if (error) {
    output.message = error.details[0].message;
    output.data = [];
    output.status = 422;
    return res.status(422).send(output);
  }
  next();
};


module.exports = {
  userByIdSchema,
  userCreateSchema,
  updateCreateSchema,
  loginSchema,
  deleteuserSchema,
};