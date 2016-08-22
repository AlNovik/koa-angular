module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      {
        pattern: `clients/tests/bundle.spec.js`,
        watched: false,
        served: true,
        included: true
      }
    ],
    reporters: ['mocha'],
    preprocessors: {
      'clients/tests/bundle.spec.js': ['webpack']
    },
    webpack: {},
    browsers: ['PhantomJS'],
    port: 9876,
    autoWatch: false,
    singleRun: true
  });
};