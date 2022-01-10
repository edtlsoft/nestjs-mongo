import * as Joi from 'joi';

export default Joi.object({
  API_KEY: Joi.string().required(),
  // JWT_SECRET: Joi.string().required(),
  MONGO_INITDB_ROOT_USERNAME: Joi.string().required(),
  MONGO_INITDB_ROOT_PASSWORD: Joi.string().required(),
  MONGO_DB: Joi.string().required(),
  MONGO_PORT: Joi.number().required(),
  MONGO_HOST: Joi.string().required(),
  MONGO_CONNECTION: Joi.string().required(),
});
