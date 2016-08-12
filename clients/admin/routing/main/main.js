/**
 * Created by Alexander Novik.
 */

const COMPONENT_NAME = 'as.admin.main';

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