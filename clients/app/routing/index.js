/**
 * Created by Alexander Novik.
 */
import angular from 'angular';
import 'angular-new-router';
import header from './header/header';
import footer from './footer/footer';
import main from './main/main';
import about from './about/about';
import contacts from './contacts/contacts';
import portfolio from './portfolio/portfolio';

// Angular New Router components

const MODULE_NAME = 'as.app.routing';

/**
 * Module describe routing of application.
 */
angular.module(MODULE_NAME, [
  'ngNewRouter',
  header,
  footer,
  about,
  main,
  contacts,
  portfolio
])
  .config(['$componentLoaderProvider', $componentLoaderProvider => {
    $componentLoaderProvider.setTemplateMapping(name => `/clients/app/routing/${name}/${name}.html`);
  }])
  .controller('AppController', ['$router', $router => {
    $router.config([
      {
        path: '/about',
        components: { main: 'about', header: 'header', footer: 'footer' },
        as: 'about'
      },
      {
        path: '/contacts',
        components: { main: 'contacts', header: 'header', footer: 'footer' },
        as: 'contacts'
      },
      {
        path: '/portfolio',
        components: { main: 'portfolio', header: 'header', footer: 'footer' },
        as: 'portfolio'
      },
      {
        path: '/',
        components: { main: 'main', header: 'header', footer: 'footer' },
        as: 'main'
      }
    ]);
  }]);

export default MODULE_NAME;
