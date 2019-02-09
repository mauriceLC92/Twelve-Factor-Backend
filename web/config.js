'use strict'
const joi = require('joi');

// require('dotenv').config(); // this loads the defined variables from .env

// Validation that port is present
const envVarSchema =  joi.object({
	PORT: joi.number().integer().min(0).max(65535)
		.required()
}).unknown()
	.required();

const envVar = joi.attempt(process.env, envVarSchema);


// const env = process.env.NODE_ENV; 

// const dev = {
// 	app: {
// 		port: parseInt(process.env.PORT)
// 	},
// 	db: {
// 		host: process.env.DEV_DB_HOST || 'localhost',
// 		port: parseInt(process.env.DEV_DB_PORT) || 27017,
// 		name: process.env.DEV_DB_NAME || 'db'
// 	}
// };

// const test = {
// 	app: {
// 	  port: parseInt(process.env.TEST_APP_PORT) || 3001
// 	},
// 	db: {
// 	  host: process.env.TEST_DB_HOST || 'localhost',
// 	  port: parseInt(process.env.TEST_DB_PORT) || 27018,
// 	  name: process.env.TEST_DB_NAME || 'test'
// 	}
// };

// ----------> https://codingsans.com/blog/node-config-best-practices


const config = {
	port: envVar,
}

module.exports = config;