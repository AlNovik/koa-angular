let COMPONENT_NAME = 'as.app.header';

class HeaderController {
  /* @ngInject */
  constructor($rootScope, $location) {

  }

  activate() {
  }

  logout() {

  }
}

angular.module(COMPONENT_NAME, []).controller('HeaderController', HeaderController);

export default COMPONENT_NAME;