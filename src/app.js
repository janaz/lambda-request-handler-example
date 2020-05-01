const express = require('express')

const app = express()

app.get('/inspect', (_req, res) => {
  res.json({
    hello: 'world',
    version: process.env.VERSION
  })
})

module.exports = app
