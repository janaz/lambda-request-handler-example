const lambdaRequestHandler = require('lambda-request-handler')
const app = require('./app')

const h = lambdaRequestHandler(app);
const handler = async (ev) => {
  console.log("REQ", JSON.stringify(ev))
  const res = await h(ev);
  console.log("RES", JSON.stringify(res))
  return res;
}

module.exports = { handler }
