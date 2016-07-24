const COMPONENT_NAME = 'as.app.header';

const _logger = new WeakMap();

class HeaderController {
  /* @ngInject */
  constructor($rootScope, $location, LoginService, asLogger) {
    this.$location = $location;
    this.loginService = LoginService;

    _logger.set(this, asLogger('HeaderController'));
  }

  activate() {
  }

  logout() {
    _logger.get(this).info('Logout!');
    this.loginService.logout().then(() => {
      _logger.get(this).info('Move to /login page');
      this.$location.path('/login');
    });
  }
}

angular.module(COMPONENT_NAME, []).controller('HeaderController', HeaderController);

export default COMPONENT_NAME;
