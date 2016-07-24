const COMPONENT_NAME = 'as.profile.login';

const _logger = new WeakMap();
/**
 *
 */
class LoginController {
  /* @ngInject */
  constructor($rootScope, $location, asLogger, LoginService) {
    _logger.set(this, asLogger('LoginController'));
    this.$location = $location;
    this.loginService = LoginService;
  }

  activate() {
  }

  /**
   *
   */
  login() {
    this.loginService.authenticate().then(data => {
      if (!angular.equals(data, {})) {
        _logger.get(this).info('Login success!');
        this.$location.path('/');
      }
    });
  }

  resetPassword() {
  }
}

angular.module(COMPONENT_NAME, []).controller('LoginController', LoginController);

export default COMPONENT_NAME;
