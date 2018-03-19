module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchTags: '@watch,@focus',
  domainSteps: null,
  e2eSteps: null,
  fullDomain: false,
  domainOnly: false,
  e2eTags: '@e2e',
  watchWithPolling: false,
  server: false,
  serverPort: 8060,
  serverHost: 'localhost',
  sync: true,
  offline: false,
  showXolvioMessages: false,

  // - - - - CUCUMBER - - - -
  path: './BDD/features',
  format: 'pretty',
  tags: '',
  singleSnippetPerFile: true,
  recommendedFilenameSeparator: '_',
  chai: false,
  screenshotsOnError: false,
  screenshotsPath: 'snapshots',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: false,
  // Note: With a large viewport size and captureAllStepScreenshots enabled,
  // you may run out of memory. Use browser.setViewportSize to make the
  // viewport size smaller.
  saveScreenshotsToReport: false,
  jsonOutput: null,
  conditionOutput: true,

  // - - - - SELENIUM  - - - -
  browser: 'chrome',
  platform: 'ANY',
  name: '',
  user: '',
  key: '',
  port: null,
  host: null,
  // deviceName: null,

  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
    desiredCapabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: [
          'window-size=1280,1024',
          'no-proxy-server',
          'no-default-browser-check',
          'no-first-run',
          'disable-boot-animation',
          'disable-default-apps',
          'disable-extensions',
          'disable-translate'
        ]
      }
    },
    logLevel: 'silent',
    // logOutput: null,
    host: '127.0.0.1',
    port: 4444,
    path: '/wd/hub',
    baseUrl: null,
    coloredLogs: true,
    screenshotPath: null,
    waitforTimeout: 500,
    waitforInterval: 250
  },

  // - - - - SELENIUM-STANDALONE
  seleniumStandaloneOptions: {
    // check for more recent versions of selenium here:
    // http://selenium-release.storage.googleapis.com/index.html
    version: '3.9.0',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        // check for more recent versions of chrome driver here:
        // http://chromedriver.storage.googleapis.com/index.html
        version: '2.36',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      },
      ie: {
        // check for more recent versions of internet explorer driver here:
        // http://selenium-release.storage.googleapis.com/index.html
        version: '2.50.0',
        arch: 'ia32',
        baseURL: 'https://selenium-release.storage.googleapis.com'
      },
      firefox: {
        // check for more recent versions of gecko  driver here:
        // https://github.com/mozilla/geckodriver/releases
        version: '0.20.0',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      }
    }
  },

  // - - - - SESSION-MANAGER  - - - -
  noSessionReuse: true,

  // - - - - PHANTOM  - - - -
  phantom_w: 1280,
  phantom_h: 1024,

  // - - - - DEBUGGING  - - - -
  log: 'debug',
  debug: false,
  seleniumDebug: null,
  debugCucumber: null,
  debugBrkCucumber: null,
  debugMocha: null,
  debugBrkMocha: null
};
