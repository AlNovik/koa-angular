let COMPONENT_NAME = 'as.profile.login';

let _logger = new WeakMap();
/**
 *
 */
class LoginController {
  /* @ngInject */
  constructor($rootScope, $location, asLogger) {
    _logger.set(this, asLogger('LoginController'));


  }

  activate() {
  }

  /**
   *
   */
  login() {

  }

  resetPassword() {
  }
}

angular.module(COMPONENT_NAME, []).controller('LoginController', LoginController);

export default COMPONENT_NAME;
