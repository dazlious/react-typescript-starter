/* global process, require, module */

const env = require('./config/environments');

switch (process.env.NODE_ENV) {
    case env.PRODUCTION:
        module.exports = require('./config/webpack.prod')(env.PRODUCTION);
        break;
    case env.TEST:
        module.exports = require('./config/webpack.test')(env.TEST);
        break;
    case env.DEVELOPMENT:
    default:
        module.exports = require('./config/webpack.dev')(env.DEVELOPMENT);
}