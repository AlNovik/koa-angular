/**
 *
 */

import angularCookie from 'angular-cookies';
import angularTranslate from 'angular-translate';
import dynamicLocale from 'angular-dynamic-locale';

import 'angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files';
import 'angular-translate/dist/angular-translate-storage-local/angular-translate-storage-local';
import 'angular-translate/dist/angular-translate-storage-cookie/angular-translate-storage-cookie';
import 'angular-translate/dist/angular-translate-handler-log/angular-translate-handler-log';
import 'angular-translate/dist/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat';
import 'messageformat';

import 'flag-icon-css/css/flag-icon.css';

import logger from '../logger';

const MODULE_NAME = 'app.i18n';

/**
 *
 */
angular.module(MODULE_NAME, [
  angularCookie,
  angularTranslate,
  dynamicLocale,
  logger,
])
    .config(['$translateProvider', $translateProvider => {
      $translateProvider.useMissingTranslationHandlerLog();

      $translateProvider.useStaticFilesLoader({
        prefix: '/i18n/locales/locale-',
        suffix: '.json',
      });
      $translateProvider.useMessageFormatInterpolation();
      $translateProvider.preferredLanguage('en_US');
      $translateProvider.fallbackLanguage('en_US');
      $translateProvider.useLocalStorage();
      $translateProvider.useCookieStorage();
      $translateProvider.useSanitizeValueStrategy('sanitize');
    }])
    .config(['tmhDynamicLocaleProvider', tmhDynamicLocaleProvider => {
      tmhDynamicLocaleProvider.localeLocationPattern('/node_modules/angular-i18n/angular-locale_{{locale}}.js');
    }])
    .constant('LOCALES', {
      locales: {
        ru_RU: {
          display: 'Русский',
          icon: 'ru',
        },
        en_US: {
          display: 'English',
          icon: 'gb',
        },
      },
      preferredLocale: 'en_US',
    });

export default MODULE_NAME;

// Services
var services = require.context('./services', true, /.js$/);
services.keys().forEach(services);

var components = require.context('./directives', true, /.js$/);
components.keys().forEach(components);