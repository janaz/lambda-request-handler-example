const Koa = require('koa');
// import serve from 'koa-static';
// import mount from 'koa-mount';
const Router = require('koa-router');
// import bodyParser from 'koa-bodyparser';
// import path  from 'path';

const koa = new Koa();


const router = new Router();

router.all('*', ctx => {
  ctx.body = "Hello from KOA!"
});

koa.use(router.routes());

module.exports = koa.callback();
