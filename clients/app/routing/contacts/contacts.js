/**
 * Created by Alexander Novik.
 */

const COMPONENT_NAME = 'as.app.contacts';

let _logger = new WeakMap();
/**
 *
 */
class ContactsController {
  /* @ngInject */
  constructor($rootScope, $location, asLogger) {
    _logger.set(this, asLogger('ContactsController'));


  }

  activate() {
  }

}

angular.module(COMPONENT_NAME, []).controller('ContactsController', ContactsController);

export default COMPONENT_NAME;
