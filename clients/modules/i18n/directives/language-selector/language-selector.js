import template from './language-selector.html';

angular.module('app.i18n').directive('languageSelector', ['LocaleService', function (LocaleService) {
  return {
    restrict: 'A',
    replace: true,
    template,
    controller: ['$scope',  $scope => {
      $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
      $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
      $scope.visible = $scope.localesDisplayNames &&
          $scope.localesDisplayNames.length > 1;

      $scope.changeLanguage = function (locale) {
        $scope.currentLocaleDisplayName = locale;
        LocaleService.setLocaleByDisplayName(locale);
      };
    }]
  };
}]);