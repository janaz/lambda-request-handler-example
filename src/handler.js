const lambdaRequestHandler = require('lambda-request-handler')
const app = require('./app')

const handler = lambdaRequestHandler(app)

module.exports = { handler }
