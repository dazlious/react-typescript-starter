/* global module, require */

const env = require('./config/environments');

module.exports = (ctx) => ({
    map: ctx.env === env.DEVELOPMENT ? ctx.map : false,
    plugins: {
        'autoprefixer': {},
        'cssnano': ctx.env === env.PRODUCTION ? {} : false
    }
});
