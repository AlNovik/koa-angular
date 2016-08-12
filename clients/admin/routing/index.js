/**
 * Created by Alexander Novik.
 */
import angular from 'angular';
import 'angular-new-router';
import header from './header/header';
import footer from './footer/footer';
import login from './login/login';
import main from './main/main';

// Angular New Router components

const MODULE_NAME = 'as.admin.routing';

/**
 * Module describe routing of application.
 */
angular.module(MODULE_NAME, [
  'ngNewRouter',
  header,
  footer,
  login,
  main
])
  .config(['$componentLoaderProvider', $componentLoaderProvider => {
    $componentLoaderProvider.setTemplateMapping(name => `/clients/admin/routing/${name}/${name}.html`);
  }])
  .controller('AppController', ['$router', $router => {
    $router.config([
      {
        path: '/login',
        components: { main: 'login', header: 'header', footer: 'footer' },
        as: 'login'
      },
      {
        path: '/',
        components: { main: 'main', header: 'header', footer: 'footer' },
        as: 'main'
      }
    ]);
  }]);

export default MODULE_NAME;
