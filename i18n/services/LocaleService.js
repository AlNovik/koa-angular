const _logger = new WeakMap();

const _LOCALES = Symbol('_LOCALES');
const _LOCALES_DISPLAY_NAMES = Symbol('_LOCALES_DISPLAY_NAMES');

/**
 *
 */
class LocaleService {
  /* @ngInject */
  constructor($translate, LOCALES, $rootScope, tmhDynamicLocale, asLogger) {
    // PREPARING LOCALES INFO
    this.localesObj = LOCALES.locales;

    this.$translate = $translate;
    _logger.set(this, asLogger('LocaleService'));

    _logger.get(this).error('constructor');

    // locales and locales display names
    this[_LOCALES] = Object.keys(this.localesObj);
    if (!this[_LOCALES] || this[_LOCALES].length === 0) {
      _logger.info('There are no _LOCALES provided');
    }
    this[_LOCALES_DISPLAY_NAMES] = [];
    this[_LOCALES].forEach(locale => {
      this[_LOCALES_DISPLAY_NAMES].push(this.localesObj[locale]);
    });

    // STORING CURRENT LOCALE
    // var currentLocale = $translate.proposedLanguage();// because of async loading
    this.currentLocale = $translate.use();

    // EVENTS
    // on successful applying translations by angular-translate
    $rootScope.$on('$translateChangeSuccess', (event, data) => {
      document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html

      // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
      tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
    });
  }

  getLocaleDisplayName() {
    return this.localesObj[this.currentLocale];
  }

  setLocaleByDisplayName(localeDisplayName) {
    this.setLocale(
        this[_LOCALES][
            this[_LOCALES_DISPLAY_NAMES].indexOf(localeDisplayName)// get locale index
            ]
    );
  }

  getLocalesDisplayNames() {
    return this[_LOCALES_DISPLAY_NAMES];
  }

  setLocale(locale) {
    const self = this;
    // METHODS
    function checkLocaleIsValid(loc) {
      return self[_LOCALES].indexOf(loc) !== -1;
    }
    if (!checkLocaleIsValid(locale)) {
      _logger.info(`Locale name ${locale} is invalid`);
      return;
    }
    this.currentLocale = locale;// updating current locale

    // asking angular-translate to load and apply proper translations
    this.$translate.use(locale);
  }
}

angular.module('app.i18n').service('LocaleService', LocaleService);
