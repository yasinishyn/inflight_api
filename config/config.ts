import logger from '../app/services/logger.service';

require('./env').configure();

let development = require('./development');
let test = require('./test');

let env = process.env.NODE_ENV || 'development';

logger.info(`Starting process in ${env} mode. On port ${process.env.PORT}`);

let configs = {
  development,
  test,
};

let defaultConfig = {
  env
};

let config = {...defaultConfig, ...configs[env]};

export default config;
