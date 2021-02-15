import Koa from 'koa';
import convert from 'koa-convert';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import methodOverride from 'koa-methodoverride';
import logger from 'koa-logger';
import cors from '@koa/cors';

import config from '../config/config';
import initDB from '../config/database';
import router from './routes';
import logErr from './services/logger.service';
import corsOptions from './helpers/cors';

const app = new Koa();

initDB();

app.on('error', (err, ctx) => {
  logErr.error(
    '================ctx================',
    ctx,
    '================err================',
    err,
  );
});

/**
 * HTTP
 */
app.use(bodyParser());

app.use(methodOverride((req) => {
  if (req.body && (typeof req.body === 'object') && ('_method' in req.body)) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

/**
 * CORS
 */
app.use(cors(corsOptions));

app.use(convert(json({ pretty: process.env.NODE_ENV !== 'production' })));

/**
 * Logger
 */
app.use(convert(logger()));

/**
 * Router
 */
app.use(router.routes());

/**
 * Run app unless it's already started
 */
if (process.argv[2] && process.argv[2][0] === 'c') {
  const repl = require('repl');
  repl.start({
    prompt: '> ',
    useGlobal: true,
  }).on('exit', () => { process.exit(); });
} else {
  app.listen(config.port);
}

export default app;
