/**
 * Created by Alexander Novik.
 */

const COMPONENT_NAME = 'as.app.about';

let _logger = new WeakMap();
/**
 *
 */
class AboutController {
  /* @ngInject */
  constructor($rootScope, $location, asLogger) {
    _logger.set(this, asLogger('AboutController'));


  }

  activate() {
      _logger.get(this).info('Activated!');
  }

}

angular.module(COMPONENT_NAME, []).controller('AboutController', AboutController);

export default COMPONENT_NAME;
