const express = require('express')

const app = express()

app.get('/inspect', (_req, res) => {
  res.json({hello: 'world'})
})

module.exports = app
