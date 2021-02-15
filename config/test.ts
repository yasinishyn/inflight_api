module.exports = {
  port: Number.parseInt(process.env.PORT) || 3050,
  hostName: '',
  assetHost: '',
  serveStatic: true,
  ssecretKeyBase: process.env.SECRET_KEY_BASE
};
