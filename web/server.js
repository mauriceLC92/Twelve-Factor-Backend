'use strict'

const Koa = require('koa')
const logger = require('winston')
const router = require('./router/router');

const app = new Koa()

app
	.use(router.routes())
	.use(router.allowedMethods());

app.on('error', (err) => {
  logger.error('Server error', { error: err.message })
})

module.exports = app