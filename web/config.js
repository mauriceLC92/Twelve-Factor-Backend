'use strict'
const dotenv = require('dotenv'); // this loads the defined variables from .env
dotenv.config();

const env = NODE_ENV;

const dev = {
	app: {
		port: parseInt(PORT) || 3000
	},
	db: {
		host: DEV_DB_HOST || 'localhost',
		port: parseInt(DEV_DB_PORT) || 27017,
		name: DEV_DB_NAME || 'db'
	}
};




const config = {
  dev
}

module.exports = config[env];
// module.exports = config;