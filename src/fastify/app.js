
const fastify = require('fastify');
const { fastifyHandler } = require('lambda-request-handler');

const build = (options) => {
  const app = fastify(options)

  app.get('/', async (request, reply) => {
    return {
      message: 'Hello from Fastify!',
    }
  })

  return app;
}

module.exports = fastifyHandler(build)
