'use strict'

const Koa = require('koa')
const logger = require('winston')
const router = require('./router/router');

const app = new Koa()

app.on('error', (err) => {
  logger.error('Server error', { error: err.message })
})

router.get('/hello', (ctx, next) => {
	return ctx.res('Hello Node.js!')
});

app
	.use(router.routes())
	.use(router.allowedMethods());

module.exports = app