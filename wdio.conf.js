const path = require('path');

exports.config = {

    runner: 'local',

    specs: [
        './tests/specs/diploma/diploma.spec.js',

    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--window-size=1920,1080',
            ]

        }

    }],

    maxInstances: 10,

    logLevel: 'trace',
    outputDir: path.resolve(__dirname, 'logs'),

    bail: 0,

    sync: true,

    waitforTimeout: 30000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 180000,
        helpers: [
            require.resolve('@babel/register')
        ]
    }
}
