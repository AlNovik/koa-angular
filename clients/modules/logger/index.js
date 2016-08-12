import 'angular-logger/dist/angular-logger';

var MODULE_NAME = 'as.logger';

angular.module(MODULE_NAME, [
  'angular-logger'
])
    .config(['logEnhancerProvider', function (logEnhancerProvider) {
      logEnhancerProvider.prefixPattern = '%s::[%s]>';
      logEnhancerProvider.datetimePattern = 'h:mm:ss';
      logEnhancerProvider.logLevels = {
        CRM: logEnhancerProvider.LEVEL.DEBUG
      };
    }]);

export default MODULE_NAME;


// Services
var services = require.context('./services', true, /.js$/);
services.keys().forEach(services);