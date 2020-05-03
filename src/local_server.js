
const getApp = require('./app')

const init = async () => {
  const app = await getApp();
  app.listen(8080, () => {
    console.log('Listening on http://0.0.0.0:8080/')
  })
}

init()
