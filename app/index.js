/**
 * Created by Alexander Novik.
 */

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularResource from 'angular-resource';
import angularSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import 'angular-local-storage';
import 'angular-aria';

import 'babel-polyfill';

import auth from '../auth';
import logger from '../logger';

import routing from './routing';

import bootstrap from './bootstrap';

// Styles
import 'angular-material/angular-material.css';

import '../styles/main.styl';

angular.module('as.app', [
  angularAnimate,
  angularResource,
  angularSanitize,
  ngMaterial,
  'LocalStorageModule',
  auth,
  logger,
  routing,
])
    .config(['localStorageServiceProvider', localStorageServiceProvider => {
      localStorageServiceProvider
          .setPrefix('app')
          .setStorageType('localStorage')
          .setNotify(true, true);
    }])
    .config(['asLoggerProvider', asLoggerProvider => asLoggerProvider.setModuleName('APP')])
    .config($mdThemingProvider => {
      $mdThemingProvider.theme('default')
          .primaryPalette('grey')
          .accentPalette('orange');
    })
    .run(bootstrap);
