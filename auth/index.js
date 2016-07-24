import angularJWT from 'angular-jwt';

import logger from '../logger';

const MODULE_NAME = 'app.auth';

/**
 * Authorization management in the application.
 */
angular.module(MODULE_NAME, [
    angularJWT,
    logger
]);

export default MODULE_NAME;

// Services
var services = require.context('./services', true, /.js$/);
services.keys().forEach(services);