const lambdaRequestHandler = require('lambda-request-handler')
const getApp = require('./app')

const h = lambdaRequestHandler.deferred(getApp);

const handler = async (ev) => {
  console.log("REQ", JSON.stringify(ev))
  const res = await h(ev);
  console.log("RES", JSON.stringify(res))
  return res;
}

module.exports = { handler }
