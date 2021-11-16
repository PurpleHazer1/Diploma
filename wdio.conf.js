const path = require('path');
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');
const fsExtra = require('fs-extra')


exports.config = {

    reporters: [
        [video, {
            saveAllVideos: false,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 1, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }],
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
    ],

    beforeAll:
        fsExtra.emptyDirSync('./allure-results'),

    onComplete:
        function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    afterTest:
        function (test, scenario, { error, duration, passed }) {
        if (error) {
            browser.takeScreenshot()
            console.log('Screenshot attached')
        }
    },

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
