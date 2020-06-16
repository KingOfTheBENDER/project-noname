const production = require('./production');
const dev = require('./dev');
const common = require('./common');

const env = process.env.NODE_ENV || 'dev';

const config = {
  production,
  dev
}

module.exports = {
  ...common,
  ...config[env]
}