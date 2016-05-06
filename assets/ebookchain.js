"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ebookchain/adapters/application', ['exports', 'ember-data-fixture-adapter'], function (exports, _emberDataFixtureAdapter) {
  // import DS from 'ember-data';
  //
  // export default DS.JSONAPIAdapter.extend({
  // });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataFixtureAdapter['default'];
    }
  });
});
define('ebookchain/app', ['exports', 'ember', 'ebookchain/resolver', 'ember-load-initializers', 'ebookchain/config/environment'], function (exports, _ember, _ebookchainResolver, _emberLoadInitializers, _ebookchainConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ebookchainConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ebookchainConfigEnvironment['default'].podModulePrefix,
    Resolver: _ebookchainResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _ebookchainConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ebookchain/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ebookchain/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _ebookchainConfigEnvironment) {

  var name = _ebookchainConfigEnvironment['default'].APP.name;
  var version = _ebookchainConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ebookchain/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('ebookchain/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('ebookchain/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('ebookchain/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  exports['default'] = _emberBootstrapComponentsBsButtonGroup['default'];
});
define('ebookchain/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  exports['default'] = _emberBootstrapComponentsBsButton['default'];
});
define('ebookchain/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('ebookchain/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('ebookchain/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('ebookchain/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('ebookchain/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('ebookchain/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('ebookchain/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('ebookchain/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('ebookchain/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _emberBootstrapComponentsBsInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsInput['default'];
    }
  });
});
define('ebookchain/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _emberBootstrapComponentsBsModalBackdrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBackdrop['default'];
    }
  });
});
define('ebookchain/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('ebookchain/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('ebookchain/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('ebookchain/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('ebookchain/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('ebookchain/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('ebookchain/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('ebookchain/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _emberBootstrapComponentsBsSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsSelect['default'];
    }
  });
});
define('ebookchain/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _emberBootstrapComponentsBsTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTextarea['default'];
    }
  });
});
define('ebookchain/components/ebc-footer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'footer',
    classNames: ['footer'],
    year: 2016
  });
});
define('ebookchain/components/ebc-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('ebookchain/components/ebc-vivus', ['exports', 'ember', 'vivus'], function (exports, _ember, _vivus) {
    exports['default'] = _ember['default'].Component.extend({
        didRender: function didRender() {
            new _vivus['default']('ebookchain-logo', {
                type: 'delayed',
                duration: 200,
                animTimingFunction: _vivus['default'].EASE
            }, function () {
                console.log("ok");
            });
        }
    });
});
define('ebookchain/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('ebookchain/components/full-page', ['exports', 'ember-cli-full-pagejs/components/full-page'], function (exports, _emberCliFullPagejsComponentsFullPage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFullPagejsComponentsFullPage['default'];
    }
  });
});
define('ebookchain/components/language-select', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    i18n: _ember['default'].inject.service(),
    classNames: ['navbar-form'],
    tagName: 'form',

    locales: _ember['default'].computed('i18n.locale', 'i18n.locales', function () {
      var i18n = this.get('i18n');
      return this.get('i18n.locales').map(function (loc) {
        return {
          id: loc,
          text: i18n.t('site.language.' + loc)
        };
      });
    }),

    actions: {
      setLocale: function setLocale() {
        this.set('i18n.locale', this.$('select').val());
      }
    }
  });
});
define('ebookchain/components/span-number', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span'
  });
});
define('ebookchain/helpers/is-equal', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports.isEqual = isEqual;

  function isEqual(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var leftSide = _ref2[0];
    var rightSide = _ref2[1];

    return leftSide === rightSide;
  }

  exports['default'] = _ember['default'].Helper.helper(isEqual);
});
define('ebookchain/helpers/is-not', ['exports', 'ember-bootstrap/helpers/is-not'], function (exports, _emberBootstrapHelpersIsNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersIsNot['default'];
    }
  });
  Object.defineProperty(exports, 'isNot', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersIsNot.isNot;
    }
  });
});
define('ebookchain/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ebookchain/helpers/read-path', ['exports', 'ember-bootstrap/helpers/read-path'], function (exports, _emberBootstrapHelpersReadPath) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersReadPath['default'];
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersReadPath.readPath;
    }
  });
});
define('ebookchain/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ebookchain/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('ebookchain/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ebookchain/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ebookchainConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_ebookchainConfigEnvironment['default'].APP.name, _ebookchainConfigEnvironment['default'].APP.version)
  };
});
define('ebookchain/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ebookchain/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ebookchain/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define("ebookchain/initializers/ember-i18n", ["exports", "ebookchain/instance-initializers/ember-i18n"], function (exports, _ebookchainInstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _ebookchainInstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _ebookchainInstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});
define('ebookchain/initializers/export-application-global', ['exports', 'ember', 'ebookchain/config/environment'], function (exports, _ember, _ebookchainConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_ebookchainConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _ebookchainConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_ebookchainConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ebookchain/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ebookchain/initializers/load-bootstrap-config', ['exports', 'ebookchain/config/environment', 'ember-bootstrap/config'], function (exports, _ebookchainConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_ebookchainConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('ebookchain/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _emberBootstrapInitializersModalsContainer) {
  exports['default'] = _emberBootstrapInitializersModalsContainer['default'];
});
define('ebookchain/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('ebookchain/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("ebookchain/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define("ebookchain/instance-initializers/ember-i18n", ["exports", "ember", "ember-i18n/stream", "ember-i18n/legacy-helper", "ebookchain/config/environment"], function (exports, _ember, _emberI18nStream, _emberI18nLegacyHelper, _ebookchainConfigEnvironment) {
  exports["default"] = {
    name: 'ember-i18n',

    initialize: function initialize(appOrAppInstance) {
      if (_emberI18nLegacyHelper["default"] != null) {
        (function () {
          // Used for Ember < 1.13
          var i18n = appOrAppInstance.container.lookup('service:i18n');

          i18n.localeStream = new _emberI18nStream["default"](function () {
            return i18n.get('locale');
          });

          _ember["default"].addObserver(i18n, 'locale', i18n, function () {
            this.localeStream.value(); // force the stream to be dirty
            this.localeStream.notify();
          });

          _ember["default"].HTMLBars._registerHelper('t', _emberI18nLegacyHelper["default"]);
        })();
      }
    }
  };
});
define("ebookchain/locales/en/config", ["exports"], function (exports) {
  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports["default"] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
define("ebookchain/locales/en/translations", ["exports"], function (exports) {
    exports["default"] = {
        site: {
            title: "A new driving force for human creation!",
            language: {
                en: "English",
                "en-us": "English American",
                "zh-cn": "中文"
            },
            loading: "Loading..."
        },

        header: {
            nav: {
                home: "Home",
                blog: "Blog",
                forum: "Forum",
                ebookcoin: "Ebookcoin",
                faq: "FAQ",
                document: "Documents",
                signIn: "Sign in",
                ebooks: "Ebooks",
                products: "Products"
            }
        },

        home: {
            num: {
                books: '<span id="watching-{{id}}"> {{count}} </span> books',
                users: '<span id="watching-{{id}}"> {{count}} </span> users',
                ebc: '<span id="watching-{{id}}"> {{count}} </span> EBOOKCOIN'
            },
            section0: {
                title: "Writing / collaboration is so simple",
                desc: "To give knowledge a price tag, make writing more simple and convenient."
            },

            section1: {
                title: "Features",
                desc: "Ebookchain, the first usable decentralized application in the world, no need to understand some theory what the crypto-currency is.",
                slide1: {
                    title: "Simple",
                    desc: "As long as you can type, using a similar WPS, word and other office software, you already have the skills to operate it."
                },
                slide2: {
                    title: "Secure",
                    desc: "It is powered by crypto-currency ebookcoin(referred to EBC), based on a P2P network, with the characteristics of safety, reliable and fast like bitcoin."
                },
                slide3: {
                    title: "Compatible",
                    desc: "Working in modern and old browsers too! And designed to fit to different screen sizes as well as tablet and mobile devices."
                },
                slide4: {
                    title: "Innovative",
                    desc: "It wrapped a crypto-currency, automatic adding copyright protection, providing seamless transactions and benefits to share. It drives and encourages everyone to  create and contribute wisdom. Strengthens sharing, and makes a number of people collaborate together!"
                }

            },
            opensource: {
                title: "Ebookchain is a fully open source product",
                desc: "Everything we do is open source, so you can theme, extend and integrate to your heart’s content. Developers welcome.",
                developers: "Developers",
                technique: "Ebookchain is a lightning-fast Node.js application with an Ember.js admin client and Handlebars.js themes.<br>We like JavaScript.",
                "btcnodejs-book-link": "Check out the Ebookchain developer docs →"
            },
            partner: {
                title: "Partnerships",
                desc: "Join some of the world's most important organisations who powered by Ebookchain."
            }
        },

        footer: {
            ebookchain: "Ebookchain",
            resources: "Resources",
            social_media: "Social Media",
            qq: "ebookchain-官方QQ群：185046161",
            weixin: "ebookchain-官方微信群"
        }
    };
});
define("ebookchain/locales/zh-cn/config", ["exports"], function (exports) {
  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports["default"] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
define("ebookchain/locales/zh-cn/translations", ["exports"], function (exports) {
    exports["default"] = {
        "site": {
            "title": "亿书：为人类创作注入新动力！",
            language: {
                en: "English",
                "en-us": "English American",
                "zh-cn": "中文"
            },
            loading: "加载中..."
        },

        header: {
            nav: {
                home: "主页",
                blog: "博客",
                forum: "论坛",
                ebookcoin: "博客币",
                faq: "FAQ",
                document: "文档",
                signIn: "登录",
                ebooks: "电子书",
                products: "产品"
            }
        },

        home: {
            num: {
                books: '<span id="watching-{{id}}"> {{count}} </span> 本书',
                users: '<span id="watching-{{id}}"> {{count}} </span> 个人',
                ebc: '<span id="watching-{{id}}"> {{count}} </span> 博客币'
            },

            section0: {
                title: "写作/协作就是这么简单",
                desc: "给知识明码标价，让写作简单便捷。"
            },

            section1: {
                title: "特点",
                desc: "亿书，是世界上第一个人人可用的去中心化软件。无需去探究什么是加密货币等高深的理论，就可以轻松使用它。",
                slide1: {
                    title: "简单",
                    desc: "只要会打字，使用过类似word，wps等办公软件，就已经具备了操控它的全部技能。"
                },
                slide2: {
                    title: "安全",
                    desc: "它以加密货币——博客币(ebookcoin，简称EBC）为驱动，基于一个P2P网络，具备比特币一样安全、可信和快捷等特点。"
                },
                slide3: {
                    title: "兼容",
                    desc: "它可以运行在各类主流硬件设备之上，Iphone, Android, Tablet，PC等，用户可以随时随地记录所思所想。"
                },
                slide4: {
                    title: "创新",
                    desc: "它把加密货币封装在底层，自动追加版权保护，提供无缝交易和利益分享。它驱动创作，鼓励人人贡献智慧。强化分享，可实现多人协作!"
                }
            },
            opensource: {
                title: "亿书是一个完全开源的工程",
                desc: "我们所开发的任何产品都是开源的，任何人都可以克隆、开发、集成。非常欢迎喜欢加密货币、喜欢Nodejs技术的小伙伴加入我们。",
                developers: "开发者",
                technique: "从技术角度说，亿书是一个Node.js应用程序，客户端使用了Ember.js。<br>是的，我们喜欢JavaScript，在我们的世界里，一切都是js。",
                "btcnodejs-book-link": "我们提供了从入门到高阶，完整的开发文档，值得一看，请点这里 →"
            },
            partner: {
                title: "合作伙伴",
                desc: "我们为世界上著名的开源产品或社区提供支持，欢迎您访问或使用他们。"
            }
        },

        footer: {
            ebookchain: "亿书",
            resources: "资源",
            social_media: "社交媒体",
            qq: "ebookchain-官方QQ群：185046161",
            weixin: "ebookchain-官方微信群"
        }

    };
});
define('ebookchain/models/feature', ['exports', 'ember-data'], function (exports, _emberData) {

  var Feature = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    body: _emberData['default'].attr('string')
  });

  Feature.reopenClass({
    FIXTURES: [{
      id: 1,
      title: "Something something Basecamp",
      body: "Dreamcatcher american apparel typewriter polaroid, Pinterest hoodie tousled vegan pickled gastropub iPhone VHS sartorial. Fanny pack vinyl fingerstache whatever, raw denim Carles literally next level fashion axe photo booth pour-over Echo Park."
    }, {
      id: 2,
      title: "Something something Basecamp",
      body: "Dreamcatcher american apparel typewriter polaroid, Pinterest hoodie tousled vegan pickled gastropub iPhone VHS sartorial. Fanny pack vinyl fingerstache whatever, raw denim Carles literally next level fashion axe photo booth pour-over Echo Park."
    }]
  });

  exports['default'] = Feature;
});
define('ebookchain/models/partner', ['exports', 'ember-data'], function (exports, _emberData) {

  var Partner = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    link: _emberData['default'].attr('string'),
    logo: _emberData['default'].attr('string'),
    style: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string')
  });

  Partner.reopenClass({
    FIXTURES: [{
      id: 1,
      name: "巴比特",
      link: "http://8btc.com",
      logo: "images/logos/8btc.svg",
      style: "",
      description: "国内最大比特币社区"
    }, {
      id: 2,
      name: "CNode",
      link: "https://cnodejs.org/",
      logo: "images/logos/cnodejs.svg",
      style: "",
      description: "CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究"
    }, {
      id: 3,
      name: "Just a blogging platform",
      link: "https://ghost.org/",
      logo: "images/logos/ghost.png",
      style: "",
      description: "Just a blogging platform"
    }, {
      id: 4,
      name: "Node.js based forum software built for the modern web",
      link: "https://nodebb.com/",
      logo: "images/logos/nodebb.png",
      style: "background-color: gray;",
      description: "Node.js based forum software built for the modern web"
    }]
  });

  exports['default'] = Partner;
});
define('ebookchain/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ebookchain/router', ['exports', 'ember', 'ebookchain/config/environment'], function (exports, _ember, _ebookchainConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ebookchainConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('features');
    this.route('get_started');
    this.route('home', { 'path': '/' });
  });

  exports['default'] = Router;
});
define('ebookchain/routes/features', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      // GET /features
      return this.store.findAll('feature');
    }
  });
});
define('ebookchain/routes/get-started', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ebookchain/routes/home', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].RSVP.hash({
                features: this.store.findAll('feature'),
                partners: this.store.findAll('partner')
            });
        }
    });
});
define('ebookchain/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ebookchain/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define("ebookchain/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "moduleName": "ebookchain/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/bs-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-accordion-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [10, 8], [10, 17]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 16
          }
        },
        "moduleName": "ebookchain/templates/components/bs-accordion-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "role", "tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["panel-heading ", ["subexpr", "if", [["get", "collapsed", ["loc", [null, [1, 68], [1, 77]]]], "collapsed"], [], ["loc", [null, [1, 63], [1, 91]]]]]]], ["element", "action", ["toggleActive"], [], ["loc", [null, [1, 16], [1, 41]]]], ["content", "title", ["loc", [null, [4, 12], [4, 21]]]], ["block", "bs-collapse", [], ["collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [8, 25], [8, 34]]]]], [], []], "class", "panel-collapse"], 0, null, ["loc", [null, [8, 0], [12, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/bs-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "ebookchain/templates/components/bs-alert.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "class", "close");
            dom.setAttribute(el1, "aria-label", "Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "aria-hidden", "true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["dismiss"], [], ["loc", [null, [3, 59], [3, 79]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "dismissible", ["loc", [null, [2, 6], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/bs-alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "dismissed", ["loc", [null, [1, 10], [1, 19]]]]], [], 0, null, ["loc", [null, [1, 0], [6, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/bs-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "ebookchain/templates/components/bs-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [1, 24], [1, 28]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "ebookchain/templates/components/bs-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]]]], [], 0, null, ["loc", [null, [1, 0], [1, 44]]]], ["content", "text", ["loc", [null, [1, 44], [1, 52]]]], ["content", "yield", ["loc", [null, [1, 52], [1, 61]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/bs-form-element", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "ebookchain/templates/components/bs-form-element.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "partial", [["get", "formElementTemplate", ["loc", [null, [1, 10], [1, 29]]]]], [], ["loc", [null, [1, 0], [1, 31]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/bs-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-form-group.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [3, 41], [3, 49]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "ebookchain/templates/components/bs-form-group.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "if", [["get", "hasFeedback", ["loc", [null, [2, 6], [2, 17]]]]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/bs-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "ebookchain/templates/components/bs-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-modal-header", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [4, 36], [4, 41]]]]], [], []], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [4, 54], [4, 65]]]]], [], []]], ["loc", [null, [4, 12], [4, 67]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "ebookchain/templates/components/bs-modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [8, 16], [8, 25]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-modal-body", [], [], 0, null, ["loc", [null, [7, 12], [9, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [11, 12], [11, 21]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "bs-modal-footer", ["loc", [null, [15, 12], [15, 31]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "ebookchain/templates/components/bs-modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["modal-dialog ", ["get", "sizeClass", ["loc", [null, [1, 27], [1, 36]]]]]]], ["block", "if", [["get", "header", ["loc", [null, [3, 14], [3, 20]]]]], [], 0, null, ["loc", [null, [3, 8], [5, 15]]]], ["block", "if", [["get", "body", ["loc", [null, [6, 14], [6, 18]]]]], [], 1, 2, ["loc", [null, [6, 8], [12, 15]]]], ["block", "if", [["get", "footer", ["loc", [null, [14, 14], [14, 20]]]]], [], 3, null, ["loc", [null, [14, 8], [16, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("ebookchain/templates/components/bs-modal-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 12], [2, 16]]]]], [], ["loc", [null, [2, 4], [2, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.4",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "ebookchain/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [5, 52], [5, 66]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.4",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "ebookchain/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "submitTitle", ["loc", [null, [6, 81], [6, 96]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "ebookchain/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "default", "action", "close"], 0, null, ["loc", [null, [5, 8], [5, 80]]]], ["block", "bs-button", [], ["type", "primary", "buttonType", "submit", "disabled", ["subexpr", "@mut", [["get", "submitDisabled", ["loc", [null, [6, 65], [6, 79]]]]], [], []]], 1, null, ["loc", [null, [6, 8], [6, 110]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.4",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "ebookchain/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [8, 52], [8, 66]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "ebookchain/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "primary", "action", "close"], 0, null, ["loc", [null, [8, 8], [8, 80]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasSubmitButton", ["loc", [null, [4, 10], [4, 25]]]]], [], 0, 1, ["loc", [null, [4, 4], [9, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "ebookchain/templates/components/bs-modal-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [10, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ebookchain/templates/components/bs-modal-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "modifiers",
            "modifiers": ["action"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "close");
          dom.setAttribute(el1, "aria-label", "Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "aria-hidden", "true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["close"], [], ["loc", [null, [2, 59], [2, 77]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [5, 12], [5, 16]]]]], [], ["loc", [null, [5, 4], [5, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [7, 28], [7, 37]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/bs-modal-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "closeButton", ["loc", [null, [1, 6], [1, 17]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]]]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ebookchain/templates/components/bs-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "ebookchain/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "this", ["loc", [null, [4, 10], [4, 14]]]]], [], ["loc", [null, [4, 2], [4, 16]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 0
              }
            },
            "moduleName": "ebookchain/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["modal-backdrop ", ["subexpr", "if", [["get", "fade", ["loc", [null, [8, 34], [8, 38]]]], "fade"], [], ["loc", [null, [8, 29], [8, 47]]]], " ", ["subexpr", "if", [["get", "in", ["loc", [null, [8, 53], [8, 55]]]], "in"], [], ["loc", [null, [8, 48], [8, 62]]]]]]], ["attribute", "id", ["concat", [["get", "backdropId", ["loc", [null, [8, 70], [8, 80]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["block", "bs-modal-dialog", [], ["close", ["subexpr", "action", ["close"], [], ["loc", [null, [3, 25], [3, 41]]]], "fade", ["subexpr", "@mut", [["get", "fade", ["loc", [null, [3, 47], [3, 51]]]]], [], []], "in", ["subexpr", "@mut", [["get", "in", ["loc", [null, [3, 55], [3, 57]]]]], [], []], "id", ["subexpr", "@mut", [["get", "modalId", ["loc", [null, [3, 61], [3, 68]]]]], [], []], "title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [3, 75], [3, 80]]]]], [], []], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [3, 93], [3, 104]]]]], [], []], "keyboard", ["subexpr", "@mut", [["get", "keyboard", ["loc", [null, [3, 114], [3, 122]]]]], [], []], "header", ["subexpr", "@mut", [["get", "header", ["loc", [null, [3, 130], [3, 136]]]]], [], []], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [3, 142], [3, 146]]]]], [], []], "footer", ["subexpr", "@mut", [["get", "footer", ["loc", [null, [3, 154], [3, 160]]]]], [], []], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [3, 166], [3, 170]]]]], [], []], "backdropClose", ["subexpr", "@mut", [["get", "backdropClose", ["loc", [null, [3, 185], [3, 198]]]]], [], []]], 0, null, ["loc", [null, [3, 0], [5, 20]]]], ["block", "if", [["get", "showBackdrop", ["loc", [null, [7, 6], [7, 18]]]]], [], 1, null, ["loc", [null, [7, 0], [9, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 19
          }
        },
        "moduleName": "ebookchain/templates/components/bs-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ember-wormhole", [], ["to", "ember-bootstrap-modal-container", "renderInPlace", ["subexpr", "@mut", [["get", "renderInPlace", ["loc", [null, [1, 69], [1, 82]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [11, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/bs-progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "ebookchain/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [4, 16], [4, 30]]]]], [], ["loc", [null, [4, 8], [4, 32]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "ebookchain/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [6, 8], [6, 26]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [3, 10], [3, 18]]]]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "ebookchain/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [10, 38], [10, 52]]]]], [], ["loc", [null, [10, 30], [10, 54]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "ebookchain/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [12, 30], [12, 48]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [9, 10], [9, 18]]]]], [], 0, 1, ["loc", [null, [9, 4], [13, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/bs-progress-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showLabel", ["loc", [null, [2, 6], [2, 15]]]]], [], 0, 1, ["loc", [null, [2, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ebookchain/templates/components/bs-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/bs-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/bs-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "is-not", [["get", "value", ["loc", [null, [2, 39], [2, 44]]]]], [], ["loc", [null, [2, 30], [2, 46]]]]], ["content", "prompt", ["loc", [null, [3, 8], [3, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "value", ["concat", [["subexpr", "read-path", [["get", "item", ["loc", [null, [8, 31], [8, 35]]]], ["get", "optionValuePath", ["loc", [null, [8, 36], [8, 51]]]]], [], ["loc", [null, [8, 19], [8, 53]]]]]]], ["attribute", "selected", ["subexpr", "is-equal", [["get", "item", ["loc", [null, [9, 32], [9, 36]]]], ["get", "value", ["loc", [null, [9, 37], [9, 42]]]]], [], ["loc", [null, [9, 21], [9, 44]]]]], ["inline", "read-path", [["get", "item", ["loc", [null, [10, 20], [10, 24]]]], ["get", "optionLabelPath", ["loc", [null, [10, 25], [10, 40]]]]], [], ["loc", [null, [10, 8], [10, 42]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "ebookchain/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "prompt", ["loc", [null, [1, 6], [1, 12]]]]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "each", [["get", "content", ["loc", [null, [7, 8], [7, 15]]]]], ["key", "@identity"], 1, null, ["loc", [null, [7, 0], [12, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ebookchain/templates/components/ebc-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 60,
            "column": 6
          }
        },
        "moduleName": "ebookchain/templates/components/ebc-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "inner");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "menu_holder row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4 col-md-2 col-md-offset-1");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "menu_caption");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("<li class=\"list-group-item\"><a href=\"https://explorer.ebookchain.org/\"  target=\"_blank\">Blockchain Explorer</a></li>\n              <li class=\"list-group-item\"><a href=\"https://testnet.ebookchain.org/\" target=\"_blank\">Testnet</a></li>");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "https://github.com/Ebookchain");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("GitHub");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "https://github.com/Ebookcoin");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://blog.ebookchain.org/tag/documents/");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4 col-md-2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "menu_caption");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://blog.ebookchain.org/");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://forum.ebookchain.org/");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://blog.ebookchain.org/faq");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4 col-md-2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "menu_caption");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "https://www.facebook.com/Ebookchain-576963915799853/");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Facebook");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "https://twitter.com/Ebookchain");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Twitter");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "list-group-item");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "https://plus.google.com/communities/102644734314168885122");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Google+");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4 col-md-2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "menu_caption");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "class", "prcode list-group-item");
        dom.setAttribute(el5, "target", "_blank");
        dom.setAttribute(el5, "href", "http://shang.qq.com/wpa/qunwpa?idkey=3c8dd274a6366176ccc886e831b3aaeb4d917e48afb0c53a2eafdba500c49933");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "border", "0");
        dom.setAttribute(el6, "src", "images/185046161.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-4 col-md-2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "menu_caption");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "list-group");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "prcode list-group-item");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "border", "0");
        dom.setAttribute(el6, "src", "images/ebookchain-weixin.png");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "bottom row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "logo_holder");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "/");
        dom.setAttribute(el4, "class", "logo");
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "icons/ebookchain-logo-40x40.png");
        dom.setAttribute(el5, "alt", "Ebookchain");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "contacts");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "copyright");
        var el4 = dom.createTextNode("Copyright © ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" Ebookchain. All rights reserved.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [3]);
        var element4 = dom.childAt(element1, [3]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element1, [7, 3, 1, 1]);
        var element7 = dom.childAt(element1, [9, 3, 1, 1]);
        var element8 = dom.childAt(element0, [3]);
        var element9 = dom.childAt(element8, [3]);
        var morphs = new Array(15);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [5, 0]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [7, 0]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element5, [1, 0]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element5, [3, 0]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element5, [5, 0]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(element1, [5, 1]), 0, 0);
        morphs[8] = dom.createAttrMorph(element6, 'alt');
        morphs[9] = dom.createAttrMorph(element6, 'title');
        morphs[10] = dom.createAttrMorph(element7, 'alt');
        morphs[11] = dom.createAttrMorph(element7, 'title');
        morphs[12] = dom.createMorphAt(dom.childAt(element9, [1]), 0, 0);
        morphs[13] = dom.createMorphAt(dom.childAt(element9, [3]), 0, 0);
        morphs[14] = dom.createMorphAt(dom.childAt(element8, [5]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["footer.ebookchain"], [], ["loc", [null, [4, 38], [4, 63]]]], ["inline", "t", ["header.nav.ebookcoin"], [], ["loc", [null, [9, 99], [9, 127]]]], ["inline", "t", ["header.nav.document"], [], ["loc", [null, [10, 112], [10, 139]]]], ["inline", "t", ["footer.resources"], [], ["loc", [null, [14, 38], [14, 62]]]], ["inline", "t", ["header.nav.blog"], [], ["loc", [null, [16, 98], [16, 121]]]], ["inline", "t", ["header.nav.forum"], [], ["loc", [null, [17, 99], [17, 123]]]], ["inline", "t", ["header.nav.faq"], [], ["loc", [null, [18, 101], [18, 123]]]], ["inline", "t", ["footer.social_media"], [], ["loc", [null, [23, 38], [23, 65]]]], ["attribute", "alt", ["subexpr", "t", ["footer.qq"], [], ["loc", [null, [35, 67], [35, 84]]]]], ["attribute", "title", ["subexpr", "t", ["footer.qq"], [], ["loc", [null, [35, 91], [35, 108]]]]], ["attribute", "alt", ["subexpr", "t", ["footer.weixin"], [], ["loc", [null, [44, 75], [44, 96]]]]], ["attribute", "title", ["subexpr", "t", ["footer.weixin"], [], ["loc", [null, [44, 103], [44, 124]]]]], ["inline", "t", ["footer.qq"], [], ["loc", [null, [54, 15], [54, 32]]]], ["inline", "t", ["footer.weixin"], [], ["loc", [null, [55, 15], [55, 36]]]], ["content", "year", ["loc", [null, [57, 43], [57, 51]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/ebc-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 12
            },
            "end": {
              "line": 17,
              "column": 56
            }
          },
          "moduleName": "ebookchain/templates/components/ebc-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "t", ["header.nav.home"], [], ["loc", [null, [17, 32], [17, 55]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/ebc-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "id", "menu");
        dom.setAttribute(el1, "class", "navbar navbar-default navbar-fixed-top");
        dom.setAttribute(el1, "role", "navigation");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#navbar-collapse-1");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "title", "Ebookchain");
        dom.setAttribute(el4, "href", "/");
        dom.setAttribute(el4, "class", "navbar-brand");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "/icons/ebookchain-logo-40x40.png");
        dom.setAttribute(el5, "class", "img-responsive");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-collapse collapse");
        dom.setAttribute(el3, "id", "navbar-collapse-1");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav navbar-right");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://blog.ebookchain.org/products/");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://blog.ebookchain.org/books/");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://blog.ebookchain.org/tag/documents/");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://blog.ebookchain.org");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://forum.ebookchain.org");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "signin");
        var el6 = dom.createTextNode("\n           ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "btn btn-default navbar-btn");
        dom.setAttribute(el6, "href", "http://forum.ebookchain.org/login");
        var el7 = dom.createTextNode("\n           ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("i");
        dom.setAttribute(el7, "class", "glyphicon glyphicon-user");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n           ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n           ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("     \n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 3, 1]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 0]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 0]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [7, 0]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [9, 0]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element0, [11, 0]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [13, 1]), 3, 3);
        morphs[7] = dom.createMorphAt(dom.childAt(element0, [15]), 0, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["home"], [], 0, null, ["loc", [null, [17, 12], [17, 68]]]], ["inline", "t", ["header.nav.products"], [], ["loc", [null, [18, 59], [18, 86]]]], ["inline", "t", ["header.nav.ebooks"], [], ["loc", [null, [19, 56], [19, 81]]]], ["inline", "t", ["header.nav.document"], [], ["loc", [null, [20, 64], [20, 91]]]], ["inline", "t", ["header.nav.blog"], [], ["loc", [null, [21, 49], [21, 72]]]], ["inline", "t", ["header.nav.forum"], [], ["loc", [null, [22, 50], [22, 74]]]], ["inline", "t", ["header.nav.signIn"], [], ["loc", [null, [26, 11], [26, 38]]]], ["content", "language-select", ["loc", [null, [29, 12], [29, 31]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/ebc-vivus", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/ebc-vivus.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("object");
        dom.setAttribute(el1, "id", "ebookchain-logo");
        dom.setAttribute(el1, "data", "images/ebookchain.svg");
        dom.setAttribute(el1, "type", "image/svg+xml");
        dom.setAttribute(el1, "class", "img-responsive");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/errors.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "errors.firstObject", ["loc", [null, [2, 29], [2, 51]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/errors.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showErrors", ["loc", [null, [1, 6], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/feedback-icon.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [2, 41], [2, 49]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/feedback-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasFeedback", ["loc", [null, [1, 6], [1, 17]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/horizontal/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [1, 14], [1, 38]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [1, 43], [1, 73]]]]]]], ["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 25], [4, 29]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 54], [4, 59]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 69], [4, 77]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 87], [4, 95]]]]], [], []]], ["loc", [null, [4, 12], [4, 97]]]], ["content", "label", ["loc", [null, [4, 98], [4, 107]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [7, 4], [7, 48]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "ebookchain/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 20], [5, 25]]]], ["get", "formElementId", ["loc", [null, [5, 26], [5, 39]]]]], [], ["loc", [null, [5, 12], [5, 41]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 8
              }
            },
            "moduleName": "ebookchain/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 26], [7, 39]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 45], [7, 49]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 55], [7, 66]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 73], [7, 78]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 91], [7, 102]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 113], [7, 122]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 132], [7, 140]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 150], [7, 158]]]]], [], []]], ["loc", [null, [7, 12], [7, 160]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 69], [2, 82]]]]]]], ["content", "label", ["loc", [null, [2, 86], [2, 95]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 14], [4, 22]]]]], [], 0, 1, ["loc", [null, [4, 8], [8, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 8], [9, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 8], [10, 52]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "ebookchain/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [15, 20], [15, 25]]]]], [], ["loc", [null, [15, 12], [15, 27]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "ebookchain/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [17, 28], [17, 32]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [17, 38], [17, 49]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [17, 56], [17, 61]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [17, 74], [17, 85]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [17, 96], [17, 105]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [17, 115], [17, 123]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [17, 133], [17, 141]]]]], [], []]], ["loc", [null, [17, 12], [17, 143]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [13, 18], [13, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [13, 47], [13, 77]]]]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [14, 14], [14, 22]]]]], [], 0, 1, ["loc", [null, [14, 8], [18, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [19, 8], [19, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [20, 8], [20, 52]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/horizontal/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [22, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ebookchain/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 69], [2, 82]]]]]]], ["content", "label", ["loc", [null, [2, 86], [2, 95]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 23], [4, 36]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 42], [4, 46]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 55], [4, 62]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 79], [4, 98]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 115], [4, 134]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 141], [4, 146]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 156], [4, 164]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 174], [4, 182]]]]], [], []]], ["loc", [null, [4, 8], [4, 184]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]]]]]], ["inline", "bs-select", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 25], [10, 29]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [10, 38], [10, 45]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [10, 62], [10, 81]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [10, 98], [10, 117]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 124], [10, 129]]]]], [], []]], ["loc", [null, [10, 8], [10, 131]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/horizontal/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ebookchain/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]]]]]], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 69], [2, 82]]]]]]], ["content", "label", ["loc", [null, [2, 86], [2, 95]]]], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]]]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 25], [4, 38]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 44], [4, 48]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 55], [4, 60]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 73], [4, 84]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 95], [4, 104]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 110], [4, 114]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 120], [4, 124]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 134], [4, 142]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 152], [4, 160]]]]], [], []]], ["loc", [null, [4, 8], [4, 162]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]]], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]]]]]], ["inline", "bs-textarea", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 27], [10, 31]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 38], [10, 43]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 56], [10, 67]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [10, 78], [10, 87]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [10, 93], [10, 97]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [10, 103], [10, 107]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [10, 117], [10, 125]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [10, 135], [10, 143]]]]], [], []]], ["loc", [null, [10, 8], [10, 145]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/horizontal/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ebookchain/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/inline/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]]]], [], []]], ["loc", [null, [3, 8], [3, 93]]]], ["content", "label", ["loc", [null, [3, 94], [3, 103]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 40], [2, 53]]]]]]], ["content", "label", ["loc", [null, [2, 57], [2, 66]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]]], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]]]], [], ["loc", [null, [5, 4], [5, 33]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]]]], [], []]], ["loc", [null, [7, 4], [7, 152]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/inline/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]]]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ebookchain/templates/components/form-element/inline/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/inline/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 40], [2, 53]]]]]]], ["content", "label", ["loc", [null, [2, 57], [2, 66]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/inline/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]]]], [], []]], ["loc", [null, [4, 0], [4, 176]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/inline/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 40], [2, 53]]]]]]], ["content", "label", ["loc", [null, [2, 57], [2, 66]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/inline/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 36], [4, 40]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 47], [4, 52]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 102], [4, 106]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 112], [4, 116]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 126], [4, 134]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 144], [4, 152]]]]], [], []]], ["loc", [null, [4, 0], [4, 154]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/vertical/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]]]], [], []], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]]]], [], []]], ["loc", [null, [3, 8], [3, 93]]]], ["content", "label", ["loc", [null, [3, 94], [3, 103]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 40], [2, 53]]]]]]], ["content", "label", ["loc", [null, [2, 57], [2, 66]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]]], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]]]], [], ["loc", [null, [5, 4], [5, 33]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]]]], [], []], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]]]], [], []]], ["loc", [null, [7, 4], [7, 152]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 44
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]]]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 0], [10, 44]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("ebookchain/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/vertical/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 40], [2, 53]]]]]]], ["content", "label", ["loc", [null, [2, 57], [2, 66]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/vertical/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]]]], [], []], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]]]], [], []], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]]]], [], []], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]]]], [], []]], ["loc", [null, [4, 0], [4, 176]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/components/form-element/vertical/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'for');
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 40], [2, 53]]]]]]], ["content", "label", ["loc", [null, [2, 57], [2, 66]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "ebookchain/templates/components/form-element/vertical/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 37], [4, 42]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 48], [4, 52]]]]], [], []], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]]]], [], []], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 106], [4, 114]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 124], [4, 132]]]]], [], []], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 138], [4, 142]]]]], [], []], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 148], [4, 152]]]]], [], []]], ["loc", [null, [4, 0], [4, 154]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]]], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/full-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/full-page.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/components/language-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "ebookchain/templates/components/language-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "value", ["concat", [["get", "loc.id", ["loc", [null, [4, 23], [4, 29]]]]]]], ["attribute", "selected", ["subexpr", "is-equal", [["get", "loc.id", ["loc", [null, [4, 53], [4, 59]]]], ["get", "i18n.locale", ["loc", [null, [4, 60], [4, 71]]]]], [], ["loc", [null, [4, 42], [4, 73]]]]], ["content", "loc.text", ["loc", [null, [5, 8], [5, 20]]]]],
        locals: ["loc"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/components/language-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("select");
        dom.setAttribute(el2, "class", "form-control");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["setLocale"], ["on", "change"], ["loc", [null, [2, 31], [2, 65]]]], ["block", "each", [["get", "locales", ["loc", [null, [3, 12], [3, 19]]]]], [], 0, null, ["loc", [null, [3, 4], [7, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/components/span-number", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 25
          }
        },
        "moduleName": "ebookchain/templates/components/span-number.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        var el2 = dom.createTextNode(" \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("   \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'id');
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "id", ["concat", ["watching-", ["get", "id", ["loc", [null, [1, 21], [1, 23]]]]]]], ["inline", "t", ["home.num.{{id}}.{{count}}"], ["count", "{{count}}"], ["loc", [null, [2, 2], [2, 55]]]], ["inline", "t", ["home.num.{{id}}"], [], ["loc", [null, [4, 0], [4, 25]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/error", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 26
          }
        },
        "moduleName": "ebookchain/templates/error.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Opps, Some error happened!");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/features", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
            }
          },
          "moduleName": "ebookchain/templates/features.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("section");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
          return morphs;
        },
        statements: [["content", "f.body", ["loc", [null, [4, 11], [4, 21]]]]],
        locals: ["f"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/features.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "main");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [2, 10], [2, 15]]]]], [], 0, null, ["loc", [null, [2, 2], [6, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/get-started", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "ebookchain/templates/get-started.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ebookchain/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 98,
                "column": 4
              },
              "end": {
                "line": 104,
                "column": 4
              }
            },
            "moduleName": "ebookchain/templates/home.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-md-3 col-xs-6");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "class", "img-responsive");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(5);
            morphs[0] = dom.createAttrMorph(element0, 'href');
            morphs[1] = dom.createAttrMorph(element1, 'alt');
            morphs[2] = dom.createAttrMorph(element1, 'title');
            morphs[3] = dom.createAttrMorph(element1, 'src');
            morphs[4] = dom.createAttrMorph(element1, 'style');
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "p.link", ["loc", [null, [100, 17], [100, 23]]]]]]], ["attribute", "alt", ["concat", [["get", "p.description", ["loc", [null, [101, 20], [101, 33]]]]]]], ["attribute", "title", ["concat", [["get", "p.description", ["loc", [null, [101, 46], [101, 59]]]]]]], ["attribute", "src", ["concat", [["get", "p.logo", ["loc", [null, [101, 70], [101, 76]]]]]]], ["attribute", "style", ["concat", [["get", "p.style", ["loc", [null, [101, 89], [101, 96]]]]]]]],
          locals: ["p"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 109,
              "column": 0
            }
          },
          "moduleName": "ebookchain/templates/home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "section ");
          dom.setAttribute(el1, "id", "section0");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "src", "images/shadow.png");
          dom.setAttribute(el2, "alt", "shadow");
          dom.setAttribute(el2, "class", "shadow img-responsive");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "watching");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "number");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "number");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "number");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "section");
          dom.setAttribute(el1, "id", "section1");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "container");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "row");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-xs-12");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "intro");
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("h1");
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "desc");
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("img");
          dom.setAttribute(el6, "src", "images/ebookchain-how-to-work.png");
          dom.setAttribute(el6, "alt", "example");
          dom.setAttribute(el6, "class", "img-responsive");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n        ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "section");
          dom.setAttribute(el1, "id", "section2");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "slide");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "intro");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h1");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4, "class", "desc");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "src", "images/slider.png");
          dom.setAttribute(el4, "alt", "slider");
          dom.setAttribute(el4, "class", "img-responsive");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "slide");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "intro");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon icon-uniF04D");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h1");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4, "class", "desc");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "src", "images/write.jpg");
          dom.setAttribute(el4, "alt", "write");
          dom.setAttribute(el4, "class", "img-responsive");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "slide");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "intro");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon icon-uniF04E");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h1");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4, "class", "desc");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "src", "images/safe.jpg");
          dom.setAttribute(el4, "alt", "secure");
          dom.setAttribute(el4, "class", "img-responsive");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "slide");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "intro");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon icon-uniF04F");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h1");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4, "class", "desc");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "src", "images/devices.png");
          dom.setAttribute(el4, "alt", "devices");
          dom.setAttribute(el4, "class", "img-responsive");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "slide");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "intro");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("i");
          dom.setAttribute(el4, "class", "icon icon-uniE001");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h1");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.setAttribute(el4, "class", "desc");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("img");
          dom.setAttribute(el4, "src", "images/team.jpg");
          dom.setAttribute(el4, "alt", "team");
          dom.setAttribute(el4, "class", "img-responsive");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "section");
          dom.setAttribute(el1, "id", "opensource");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "intro");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h1");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "desc");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "container");
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "id", "row");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-xs-6 col-md-6");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("img");
          dom.setAttribute(el5, "src", "images/ebookcoin-github.jpg");
          dom.setAttribute(el5, "alt", "open source");
          dom.setAttribute(el5, "class", "img-responsive");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "col-xs-6 col-md-6 build-with-box");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("p");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("img");
          dom.setAttribute(el5, "alt", "Build with");
          dom.setAttribute(el5, "src", "images/build_with.png");
          dom.setAttribute(el5, "class", "img-responsive");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("p");
          dom.setAttribute(el5, "class", "desc");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("a");
          dom.setAttribute(el5, "class", "");
          dom.setAttribute(el5, "href", "http://bitcoin-on-nodejs.ebookchain.org");
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "section");
          dom.setAttribute(el1, "id", "partner");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "intro");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h1");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "desc");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row partners");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  \n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0]);
          var element3 = dom.childAt(element2, [7]);
          var element4 = dom.childAt(fragment, [2, 1, 1, 1, 1]);
          var element5 = dom.childAt(fragment, [4]);
          var element6 = dom.childAt(element5, [1, 1]);
          var element7 = dom.childAt(element5, [3, 1]);
          var element8 = dom.childAt(element5, [5, 1]);
          var element9 = dom.childAt(element5, [7, 1]);
          var element10 = dom.childAt(element5, [9, 1]);
          var element11 = dom.childAt(fragment, [6]);
          var element12 = dom.childAt(element11, [1]);
          var element13 = dom.childAt(element11, [3, 1, 3]);
          var element14 = dom.childAt(fragment, [8]);
          var element15 = dom.childAt(element14, [1]);
          var morphs = new Array(26);
          morphs[0] = dom.createMorphAt(element2, 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
          morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element3, [5]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
          morphs[6] = dom.createMorphAt(dom.childAt(element4, [3]), 0, 0);
          morphs[7] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
          morphs[8] = dom.createMorphAt(dom.childAt(element6, [3]), 0, 0);
          morphs[9] = dom.createMorphAt(dom.childAt(element7, [3]), 0, 0);
          morphs[10] = dom.createMorphAt(dom.childAt(element7, [5]), 0, 0);
          morphs[11] = dom.createMorphAt(dom.childAt(element8, [3]), 0, 0);
          morphs[12] = dom.createMorphAt(dom.childAt(element8, [5]), 0, 0);
          morphs[13] = dom.createMorphAt(dom.childAt(element9, [3]), 0, 0);
          morphs[14] = dom.createMorphAt(dom.childAt(element9, [5]), 0, 0);
          morphs[15] = dom.createMorphAt(dom.childAt(element10, [3]), 0, 0);
          morphs[16] = dom.createMorphAt(dom.childAt(element10, [5]), 0, 0);
          morphs[17] = dom.createMorphAt(dom.childAt(element12, [1]), 0, 0);
          morphs[18] = dom.createMorphAt(dom.childAt(element12, [3]), 0, 0);
          morphs[19] = dom.createMorphAt(dom.childAt(element13, [1]), 0, 0);
          morphs[20] = dom.createMorphAt(dom.childAt(element13, [5]), 0, 0);
          morphs[21] = dom.createMorphAt(dom.childAt(element13, [7]), 0, 0);
          morphs[22] = dom.createMorphAt(dom.childAt(element15, [1]), 0, 0);
          morphs[23] = dom.createMorphAt(dom.childAt(element15, [3]), 0, 0);
          morphs[24] = dom.createMorphAt(dom.childAt(element14, [3]), 1, 1);
          morphs[25] = dom.createMorphAt(element14, 5, 5);
          return morphs;
        },
        statements: [["content", "ebc-vivus", ["loc", [null, [4, 2], [4, 15]]]], ["inline", "t", ["site.title"], [], ["loc", [null, [5, 5], [5, 23]]]], ["inline", "t", ["home.num.books"], ["count", "100000", "id", "books"], ["loc", [null, [9, 24], [9, 74]]]], ["inline", "t", ["home.num.users"], ["count", "200000", "id", "users"], ["loc", [null, [10, 24], [10, 74]]]], ["inline", "t", ["home.num.ebc"], ["count", "300000", "id", "ebc"], ["loc", [null, [11, 24], [11, 70]]]], ["inline", "t", ["home.section0.title"], [], ["loc", [null, [19, 14], [19, 41]]]], ["inline", "t", ["home.section0.desc"], [], ["loc", [null, [20, 26], [20, 52]]]], ["inline", "t", ["home.section1.title"], [], ["loc", [null, [30, 10], [30, 37]]]], ["inline", "t", ["home.section1.desc"], [], ["loc", [null, [31, 22], [31, 48]]]], ["inline", "t", ["home.section1.slide1.title"], [], ["loc", [null, [39, 10], [39, 44]]]], ["inline", "t", ["home.section1.slide1.desc"], [], ["loc", [null, [40, 22], [40, 55]]]], ["inline", "t", ["home.section1.slide2.title"], [], ["loc", [null, [47, 10], [47, 44]]]], ["inline", "t", ["home.section1.slide2.desc"], [], ["loc", [null, [48, 22], [48, 55]]]], ["inline", "t", ["home.section1.slide3.title"], [], ["loc", [null, [55, 10], [55, 44]]]], ["inline", "t", ["home.section1.slide3.desc"], [], ["loc", [null, [56, 22], [56, 55]]]], ["inline", "t", ["home.section1.slide4.title"], [], ["loc", [null, [63, 10], [63, 44]]]], ["inline", "t", ["home.section1.slide4.desc"], [], ["loc", [null, [64, 22], [64, 55]]]], ["inline", "t", ["home.opensource.title"], [], ["loc", [null, [73, 8], [73, 37]]]], ["inline", "t", ["home.opensource.desc"], [], ["loc", [null, [74, 20], [74, 48]]]], ["inline", "t", ["home.opensource.developers"], [], ["loc", [null, [83, 11], [83, 45]]]], ["inline", "t", ["home.opensource.technique"], [], ["loc", [null, [85, 24], [85, 57]]]], ["inline", "t", ["home.opensource.btcnodejs-book-link"], [], ["loc", [null, [86, 67], [86, 110]]]], ["inline", "t", ["home.partner.title"], [], ["loc", [null, [94, 8], [94, 34]]]], ["inline", "t", ["home.partner.desc"], [], ["loc", [null, [95, 20], [95, 45]]]], ["block", "each", [["get", "model.partners", ["loc", [null, [98, 12], [98, 26]]]]], [], 0, null, ["loc", [null, [98, 4], [104, 13]]]], ["content", "ebc-footer", ["loc", [null, [107, 2], [107, 16]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 109,
            "column": 14
          }
        },
        "moduleName": "ebookchain/templates/home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "ebc-header", ["loc", [null, [1, 0], [1, 14]]]], ["block", "full-page", [], ["elementId", "fullpage"], 0, null, ["loc", [null, [2, 0], [109, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ebookchain/templates/loading", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 6
          }
        },
        "moduleName": "ebookchain/templates/loading.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-12 col-xs-12");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "loading");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1]), 0, 0);
        return morphs;
      },
      statements: [["inline", "t", ["site.loading"], [], ["loc", [null, [4, 29], [4, 49]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ebookchain/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('ebookchain/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ebookchain/config/environment', ['ember'], function(Ember) {
  var prefix = 'ebookchain';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ebookchain/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"ebookchain","version":"0.1.11+bda58834"});
}

/* jshint ignore:end */
//# sourceMappingURL=ebookchain.map