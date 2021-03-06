const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const cors = require('cors')
const graphqlServer = require('./graphql')
const koa = require('./koa/app')
const hapi = require('./hapi/app')
const fastify = require('./fastify/app')
const app = express()

const getApp = async () => {
  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, '..', 'views'))
  app.set('trust proxy', 2)

  app.use(cors({origin: true}))
  app.use(cookieParser())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.get('/', (_req, res) => {
    res.render('index')
  })

  app.get('/inspect', (req, res) => {
    res.json({
      body: req.body,
      cookies: req.cookies,
      fresh: req.fresh,
      hostname: req.hostname,
      method: req.method,
      params: req.params,
      protocol: req.protocol,
      query: req.query,
      secure: req.secure,
      signedCookies: req.signedCookies,
      stale: req.stale,
      subdomains: req.subdomains,
      xhr: req.xhr,
      ip: req.ip,
      ips: req.ips,
      originalUrl: req.originalUrl,
      baseUrl: req.baseUrl,
      path: req.path,
      url: req.url,
      xForwardedFor: req.get('x-forwarded-for'),
      version: process.env.VERSION,
      lambdaRequestId: req.header('x-aws-lambda-request-id'),
    })
  })

  app.all('/echo', (req, res) => {
    res.json({ body: req.body})
  })

  app.use("/static", compression({}), express.static(path.join(__dirname, '..', 'public')))

  app.get('/render', (_, res) => {
    res.render('page')
  })

  app.get('/cookies', (_, res) => {
    res.cookie('hackyname', 'h3c/ky=;va{lu]e')
    res.cookie('chocolate', '10')
    res.cookie('peanut_butter', '20')
    res.cookie('cinnamon', '30')
    res.send('cookies set')
  })

  app.get('/user/:id', (req, res) => {
    res.json({name: 'John', id: req.params.id})
  })

  graphqlServer.applyMiddleware({ app, path: '/graphql' })
  // a hacky solution to support "app" stage
  graphqlServer.applyMiddleware({ app, path: '/app/graphql' })

  app.use('/koa', koa)
  const hapiHandler = await hapi()
  app.use('/hapi', hapiHandler)

  const fastifyHandler = await fastify()
  app.use('/fastify', fastifyHandler)

  return app
}

module.exports = getApp
