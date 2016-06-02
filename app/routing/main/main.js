/**
 * Created by Alexander Novik.
 */

let COMPONENT_NAME = 'as.profile.main';

let _logger = new WeakMap();
/**
 *
 */
class MainController {
  /* @ngInject */
  constructor($rootScope, $location, asLogger) {
    _logger.set(this, asLogger('MainController'));


  }

  activate() {
  }

}

angular.module(COMPONENT_NAME, []).controller('MainController', MainController);

export default COMPONENT_NAME;