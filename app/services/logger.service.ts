/**
 * Logs output to console or other destination
 *
 * @param  {...any} args arguments to log
 * @returns {void}
 */

const logger: any = {};

logger.log = (...args) => console.log(new Date(Date.now()), args);
logger.warn = (...args) => console.warn(new Date(Date.now()), args);
logger.info = (...args) => console.info(new Date(Date.now()), args);

logger.error = (...args) => {
  console.error(new Date(Date.now()), args);
  console.error('Trace:');
  console.trace(...args);
};

export default logger;
