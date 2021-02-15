const allowMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'];
const allowHeaders = ['Content-Type', 'Authorization', 'Accept',
  'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials',
  'x-connection-key', 'x-secret-key', 'X-Requested-With'];
const exposeHeaders = 'Authorization';

export default {
  origin: "*",
  exposeHeaders,
  credentials: true,
  allowMethods,
  allowHeaders
};
