module.exports = config => {
    const env = require('./config/environments');
    const testWebpackConfig = require('./config/webpack.test')(env.TEST);
    const configuration = {
        basePath: '',
        frameworks: ['jasmine'],
        exclude: [],
        plugins: ['karma-*'],
        client: {
            captureConsole: false
        },
        files: [
            { pattern: './config/spec-bundle.js', watched: false },
            { pattern: './src/**/*', watched: false, included: false, served: true, nocache: false }
        ],
        preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },
        webpack: testWebpackConfig,
        coverageReporter: {
            type: 'in-memory'
        },
        remapIstanbulReporter: {
            remapOptions: {
                exclude: path => {
                    const shortPath = path.substring(__dirname.length);
                    const EXCLUDED_FILES = [
                        /index\.ts/,
                    ];
                    let exclude = false;
                    EXCLUDED_FILES.forEach(filter => {
                        if (filter instanceof RegExp) {
                            if (filter.test(shortPath)) {
                                exclude = true;
                            }
                        } else if (typeof filter === 'string' && shortPath.indexOf(filter) >= 0) {
                            exclude = true;
                        }
                    });
                    return exclude;
                },
                warn: () => {}
            },
            reportOptions: {
                includeAllSources: true
            },
            reports: {
                lcovonly: './coverage/lcov.info',
                html: './coverage'
            }
        },
        webpackMiddleware: {
            noInfo: true,
            stats: {
                chunks: false
            }
        },
        reporters: ['mocha', 'coverage', 'karma-remap-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [
            'PhantomJS'
        ],
        singleRun: true
    };
    config.set(configuration);
};
