/**
 * Created by Alexander Novik.
 */

const COMPONENT_NAME = 'as.app.portfolio';

let _logger = new WeakMap();
/**
 *
 */
class PortfolioController {
  /* @ngInject */
  constructor($rootScope, $location, asLogger) {
    _logger.set(this, asLogger('PortfolioController'));


  }

  activate() {
  }

}

angular.module(COMPONENT_NAME, []).controller('PortfolioController', PortfolioController);

export default COMPONENT_NAME;
