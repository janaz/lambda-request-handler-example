
const Hapi = require('@hapi/hapi');
const { HapiListener } = require('lambda-request-handler');

const listener = new HapiListener()

const server = Hapi.server({listener});

server.route({
    method: 'GET',
    path: '/',
    handler: (_request, h) => {
        h.state('coconut', 'cookie_from_hapi', {isSecure: false});
        return h.response('Hello from Hapi. I set a cookie for you');
    }
});

const app = async () => {
  await server.start()
  return listener.handler
}

module.exports = app
