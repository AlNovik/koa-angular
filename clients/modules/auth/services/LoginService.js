const _logger = new WeakMap();

/**
 *
 */
class LoginService {
  /* @ngInject */
  constructor($rootScope, $q, asLogger) {
    this.$rootScope = $rootScope;
    this.$q = $q;

    _logger.set(this, asLogger('LoginService'));
  }

  /**
   * Authenticate user.
   * @param user
   * @param password
   * @param authUrl
   * @returns {*}
   */
  authenticate(user, password, authUrl) {
    const defer = this.$q.defer();

    _logger.get(this).info('Authentificate user', user, password, authUrl);

    defer.resolve();
    return defer.promise.then(() => {
      this.$rootScope.isLogin = true;
      return {
        username: 'ExampleUser',
      };
    });
  }

  logout() {
    const deferred = this.$q.defer();

    deferred.resolve();
    return deferred.promise.then(() => {
      this.$rootScope.isLogin = false;
    });
  }
}

angular.module('app.auth').service('LoginService', LoginService);
