import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import compress from 'koa-compress';
import cors from 'koa-cors';
import convert from 'koa-convert';
import api from './api';
import errorHandler from './middlewares/errors';
import config from './modules/config';
import './modules/defaults';

const app = new Koa();

app.use(bodyParser());
app.use(logger());
app.use(convert(cors({
  methods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']
})));
app.use(compress());

app.use(errorHandler);

api(app);

// response
app.use(async ctx => {
  ctx.body = `<h1>Server works!</h1>\nRequest from - ${ctx.request.headers['user-agent']}`;
  // ctx.body = ctx;
});

app.listen(config.get('server:port'),
  () => console.log(`Server ${config.get('app:name')} started on ${config.get('server:port')} port`));

export default app;