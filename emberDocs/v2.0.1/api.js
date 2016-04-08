YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Backburner",
        "Container",
        "Descriptor",
        "Ember",
        "Ember.ActionHandler",
        "Ember.Application",
        "Ember.AriaRoleSupport",
        "Ember.Array",
        "Ember.ArrayProxy",
        "Ember.AutoLocation",
        "Ember.Binding",
        "Ember.Checkbox",
        "Ember.ClassNamesSupport",
        "Ember.CollectionView",
        "Ember.Comparable",
        "Ember.Component",
        "Ember.ComputedProperty",
        "Ember.ContainerDebugAdapter",
        "Ember.ContainerView",
        "Ember.Controller",
        "Ember.ControllerMixin",
        "Ember.Copyable",
        "Ember.CoreObject",
        "Ember.CoreView",
        "Ember.DataAdapter",
        "Ember.DefaultResolver",
        "Ember.EachProxy",
        "Ember.EmptyViewSupport",
        "Ember.Enumerable",
        "Ember.Error",
        "Ember.EventDispatcher",
        "Ember.Evented",
        "Ember.FEATURES",
        "Ember.Freezable",
        "Ember.HTMLBars",
        "Ember.HashLocation",
        "Ember.Helper",
        "Ember.HistoryLocation",
        "Ember.InjectedProperty",
        "Ember.Instrumentation",
        "Ember.InstrumentationSupport",
        "Ember.LegacyViewSupport",
        "Ember.LinkComponent",
        "Ember.Location",
        "Ember.Logger",
        "Ember.Map",
        "Ember.MapWithDefault",
        "Ember.Mixin",
        "Ember.MutableArray",
        "Ember.MutableEnumerable",
        "Ember.Namespace",
        "Ember.NativeArray",
        "Ember.NoneLocation",
        "Ember.Object",
        "Ember.ObjectProxy",
        "Ember.Observable",
        "Ember.OrderedSet",
        "Ember.PromiseProxyMixin",
        "Ember.ProxyMixin",
        "Ember.Route",
        "Ember.Router",
        "Ember.Select",
        "Ember.Service",
        "Ember.String",
        "Ember.TargetActionSupport",
        "Ember.TemplateRenderingSupport",
        "Ember.Templates.helpers",
        "Ember.Test",
        "Ember.Test.Adapter",
        "Ember.Test.QUnitAdapter",
        "Ember.TextArea",
        "Ember.TextField",
        "Ember.TextSupport",
        "Ember.View",
        "Ember.ViewTargetActionSupport",
        "Ember.VisibilitySupport",
        "Ember._Metamorph",
        "Ember._MetamorphView",
        "Ember.computed",
        "Ember.inject",
        "Ember.run",
        "Ember.stream.Stream",
        "Ember.streams.Dependency",
        "Ember.streams.Ember.stream",
        "Ember.streams.Subscriber",
        "Function",
        "Libraries",
        "Registry",
        "RoutingService",
        "String",
        "TransformEachInToHash",
        "TransformInputOnToOnEvent"
    ],
    "modules": [
        "ember",
        "ember-application",
        "ember-debug",
        "ember-extension-support",
        "ember-htmlbars",
        "ember-metal",
        "ember-routing",
        "ember-routing-htmlbars",
        "ember-routing-views",
        "ember-runtime",
        "ember-template-compiler",
        "ember-templates",
        "ember-testing",
        "ember-views"
    ],
    "allModules": [
        {
            "displayName": "ember",
            "name": "ember"
        },
        {
            "displayName": "ember-application",
            "name": "ember-application",
            "description": "An instance of `Ember.Application` is the starting point for every Ember\napplication. It helps to instantiate, initialize and coordinate the many\nobjects that make up your app.\n\nEach Ember app has one and only one `Ember.Application` object. In fact, the\nvery first thing you should do in your application is create the instance:\n\n```javascript\nwindow.App = Ember.Application.create();\n```\n\nTypically, the application object is the only global variable. All other\nclasses in your app should be properties on the `Ember.Application` instance,\nwhich highlights its first role: a global namespace.\n\nFor example, if you define a view class, it might look like this:\n\n```javascript\nApp.MyView = Ember.View.extend();\n```\n\nBy default, calling `Ember.Application.create()` will automatically initialize\nyour application by calling the `Ember.Application.initialize()` method. If\nyou need to delay initialization, you can call your app's `deferReadiness()`\nmethod. When you are ready for your app to be initialized, call its\n`advanceReadiness()` method.\n\nYou can define a `ready` method on the `Ember.Application` instance, which\nwill be run by Ember when the application is initialized.\n\nBecause `Ember.Application` inherits from `Ember.Namespace`, any classes\nyou create will have useful string representations when calling `toString()`.\nSee the `Ember.Namespace` documentation for more information.\n\nWhile you can think of your `Ember.Application` as a container that holds the\nother classes in your application, there are several other responsibilities\ngoing on under-the-hood that you may want to understand.\n\n### Event Delegation\n\nEmber uses a technique called _event delegation_. This allows the framework\nto set up a global, shared event listener instead of requiring each view to\ndo it manually. For example, instead of each view registering its own\n`mousedown` listener on its associated element, Ember sets up a `mousedown`\nlistener on the `body`.\n\nIf a `mousedown` event occurs, Ember will look at the target of the event and\nstart walking up the DOM node tree, finding corresponding views and invoking\ntheir `mouseDown` method as it goes.\n\n`Ember.Application` has a number of default events that it listens for, as\nwell as a mapping from lowercase events to camel-cased view method names. For\nexample, the `keypress` event causes the `keyPress` method on the view to be\ncalled, the `dblclick` event causes `doubleClick` to be called, and so on.\n\nIf there is a bubbling browser event that Ember does not listen for by\ndefault, you can specify custom events and their corresponding view method\nnames by setting the application's `customEvents` property:\n\n```javascript\nvar App = Ember.Application.create({\n  customEvents: {\n    // add support for the paste event\n    paste: 'paste'\n  }\n});\n```\n\nBy default, the application sets up these event listeners on the document\nbody. However, in cases where you are embedding an Ember application inside\nan existing page, you may want it to set up the listeners on an element\ninside the body.\n\nFor example, if only events inside a DOM element with the ID of `ember-app`\nshould be delegated, set your application's `rootElement` property:\n\n```javascript\nvar App = Ember.Application.create({\n  rootElement: '#ember-app'\n});\n```\n\nThe `rootElement` can be either a DOM element or a jQuery-compatible selector\nstring. Note that *views appended to the DOM outside the root element will\nnot receive events.* If you specify a custom root element, make sure you only\nappend views inside it!\n\nTo learn more about the advantages of event delegation and the Ember view\nlayer, and a list of the event listeners that are setup by default, visit the\n[Ember View Layer guide](http://emberjs.com/guides/understanding-ember/the-view-layer/#toc_event-delegation).\n\n### Initializers\n\nLibraries on top of Ember can add initializers, like so:\n\n```javascript\nEmber.Application.initializer({\n  name: 'api-adapter',\n\n  initialize: function(container, application) {\n    application.register('api-adapter:main', ApiAdapter);\n  }\n});\n```\n\nInitializers provide an opportunity to access the container, which\norganizes the different components of an Ember application. Additionally\nthey provide a chance to access the instantiated application. Beyond\nbeing used for libraries, initializers are also a great way to organize\ndependency injection or setup in your own application.\n\n### Routing\n\nIn addition to creating your application's router, `Ember.Application` is\nalso responsible for telling the router when to start routing. Transitions\nbetween routes can be logged with the `LOG_TRANSITIONS` flag, and more\ndetailed intra-transition logging can be logged with\nthe `LOG_TRANSITIONS_INTERNAL` flag:\n\n```javascript\nvar App = Ember.Application.create({\n  LOG_TRANSITIONS: true, // basic logging of successful transitions\n  LOG_TRANSITIONS_INTERNAL: true // detailed logging of all routing steps\n});\n```\n\nBy default, the router will begin trying to translate the current URL into\napplication state once the browser emits the `DOMContentReady` event. If you\nneed to defer routing, you can call the application's `deferReadiness()`\nmethod. Once routing can begin, call the `advanceReadiness()` method.\n\nIf there is any setup required before routing begins, you can implement a\n`ready()` method on your app that will be invoked immediately before routing\nbegins."
        },
        {
            "displayName": "ember-debug",
            "name": "ember-debug"
        },
        {
            "displayName": "ember-extension-support",
            "name": "ember-extension-support",
            "description": "The `ContainerDebugAdapter` helps the container and resolver interface\nwith tools that debug Ember such as the\n[Ember Extension](https://github.com/tildeio/ember-extension)\nfor Chrome and Firefox.\n\nThis class can be extended by a custom resolver implementer\nto override some of the methods with library-specific code.\n\nThe methods likely to be overridden are:\n\n* `canCatalogEntriesByType`\n* `catalogEntriesByType`\n\nThe adapter will need to be registered\nin the application's container as `container-debug-adapter:main`\n\nExample:\n\n```javascript\nApplication.initializer({\n  name: \"containerDebugAdapter\",\n\n  initialize: function(container, application) {\n    application.register('container-debug-adapter:main', require('app/container-debug-adapter'));\n  }\n});\n```"
        },
        {
            "displayName": "ember-htmlbars",
            "name": "ember-htmlbars",
            "description": "[HTMLBars](https://github.com/tildeio/htmlbars) is a [Handlebars](http://handlebarsjs.com/)\n  compatible templating engine used by Ember.js. The classes and namespaces\n  covered by this documentation attempt to focus on APIs for interacting\n  with HTMLBars itself. For more general guidance on Ember.js templates and\n  helpers, please see the [ember-templates](/api/modules/ember-templates.html)\n  package."
        },
        {
            "displayName": "ember-metal",
            "name": "ember-metal",
            "description": "This namespace contains all Ember methods and functions. Future versions of\nEmber may overwrite this namespace and therefore, you should avoid adding any\nnew properties.\n\nYou can also use the shorthand `Em` instead of `Ember`.\n\nAt the heart of Ember is Ember-Runtime, a set of core functions that provide\ncross-platform compatibility and object property observing.  Ember-Runtime is\nsmall and performance-focused so you can use it alongside other\ncross-platform libraries such as jQuery. For more details, see\n[Ember-Runtime](http://emberjs.com/api/modules/ember-runtime.html)."
        },
        {
            "displayName": "ember-routing",
            "name": "ember-routing",
            "description": "Ember.Location returns an instance of the correct implementation of\nthe `location` API.\n\n## Implementations\n\nYou can pass an implementation name (`hash`, `history`, `none`) to force a\nparticular implementation to be used in your application.\n\n### HashLocation\n\nUsing `HashLocation` results in URLs with a `#` (hash sign) separating the\nserver side URL portion of the URL from the portion that is used by Ember.\nThis relies upon the `hashchange` event existing in the browser.\n\nExample:\n\n```javascript\nApp.Router.map(function() {\n  this.route('posts', function() {\n    this.route('new');\n  });\n});\n\nApp.Router.reopen({\n  location: 'hash'\n});\n```\n\nThis will result in a posts.new url of `/#/posts/new`.\n\n### HistoryLocation\n\nUsing `HistoryLocation` results in URLs that are indistinguishable from a\nstandard URL. This relies upon the browser's `history` API.\n\nExample:\n\n```javascript\nApp.Router.map(function() {\n  this.route('posts', function() {\n    this.route('new');\n  });\n});\n\nApp.Router.reopen({\n  location: 'history'\n});\n```\n\nThis will result in a posts.new url of `/posts/new`.\n\nKeep in mind that your server must serve the Ember app at all the routes you\ndefine.\n\n### AutoLocation\n\nUsing `AutoLocation`, the router will use the best Location class supported by\nthe browser it is running in.\n\nBrowsers that support the `history` API will use `HistoryLocation`, those that\ndo not, but still support the `hashchange` event will use `HashLocation`, and\nin the rare case neither is supported will use `NoneLocation`.\n\nExample:\n\n```javascript\nApp.Router.map(function() {\n  this.route('posts', function() {\n    this.route('new');\n  });\n});\n\nApp.Router.reopen({\n  location: 'auto'\n});\n```\n\nThis will result in a posts.new url of `/posts/new` for modern browsers that\nsupport the `history` api or `/#/posts/new` for older ones, like Internet\nExplorer 9 and below.\n\nWhen a user visits a link to your application, they will be automatically\nupgraded or downgraded to the appropriate `Location` class, with the URL\ntransformed accordingly, if needed.\n\nKeep in mind that since some of your users will use `HistoryLocation`, your\nserver must serve the Ember app at all the routes you define.\n\n### NoneLocation\n\nUsing `NoneLocation` causes Ember to not store the applications URL state\nin the actual URL. This is generally used for testing purposes, and is one\nof the changes made when calling `App.setupForTesting()`.\n\n## Location API\n\nEach location implementation must provide the following methods:\n\n* implementation: returns the string name used to reference the implementation.\n* getURL: returns the current URL.\n* setURL(path): sets the current URL.\n* replaceURL(path): replace the current URL (optional).\n* onUpdateURL(callback): triggers the callback when the URL changes.\n* formatURL(url): formats `url` to be placed into `href` attribute.\n* detect() (optional): instructs the location to do any feature detection\n    necessary. If the location needs to redirect to a different URL, it\n    can cancel routing by setting the `cancelRouterSetup` property on itself\n    to `false`.\n\nCalling setURL or replaceURL will not trigger onUpdateURL callbacks."
        },
        {
            "displayName": "ember-routing-htmlbars",
            "name": "ember-routing-htmlbars"
        },
        {
            "displayName": "ember-routing-views",
            "name": "ember-routing-views",
            "description": "`Ember.LinkComponent` renders an element whose `click` event triggers a\ntransition of the application's instance of `Ember.Router` to\na supplied route by name.\n\nInstances of `LinkComponent` will most likely be created through\nthe `link-to` Handlebars helper, but properties of this class\ncan be overridden to customize application-wide behavior."
        },
        {
            "displayName": "ember-runtime",
            "name": "ember-runtime",
            "description": "Defines string helper methods including string formatting and localization.\nUnless `Ember.EXTEND_PROTOTYPES.String` is `false` these methods will also be\nadded to the `String.prototype` as well."
        },
        {
            "displayName": "ember-template-compiler",
            "name": "ember-template-compiler"
        },
        {
            "displayName": "ember-templates",
            "name": "ember-templates",
            "description": "Ember templates are executed by [HTMLBars](https://github.com/tildeio/htmlbars),\nan HTML-friendly version of [Handlebars](http://handlebarsjs.com/). Any valid Handlebars syntax is valid in an Ember template.\n\n### Showing a property\n\nTemplates manage the flow of an application's UI, and display state (through\nthe DOM) to a user. For example, given a component with the property \"name\",\nthat component's template can use the name in several ways:\n\n```javascript\n// app/components/person.js\nexport default Ember.Component.extend({\n  name: 'Jill'\n});\n```\n\n```handlebars\n{{! app/components/person.hbs }}\n{{name}}\n<div>{{name}}</div>\n<span data-name={{name}}></span>\n```\n\nAny time the \"name\" property on the component changes, the DOM will be\nupdated.\n\nProperties can be chained as well:\n\n```handlebars\n{{aUserModel.name}}\n<div>{{listOfUsers.firstObject.name}}</div>\n```\n\n### Using Ember helpers\n\nWhen content is passed in mustaches `{{}}`, Ember will first try to find a helper\nor component with that name. For example, the `if` helper:\n\n```handlebars\n{{if name \"I have a name\" \"I have no name\"}}\n<span data-has-name={{if name true}}></span>\n```\n\nThe returned value is placed where the `{{}}` is called. The above style is\ncalled \"inline\". A second style of helper usage is called \"block\". For example:\n\n```handlebars\n{{#if name}}\n  I have a name\n{{else}}\n  I have no name\n{{/if}}\n```\n\nThe block form of helpers allows you to control how the UI is created based\non the values of properties.\n\nA third form of helper is called \"nested\". For example here the concat\nhelper will add \" Doe\" to a displayed name if the person has no last name:\n\n```handlebars\n<span data-name={{concat firstName (\n if lastName (concat \" \" lastName) \"Doe\"\n)}}></span>\n```\n\nEmber's built-in helpers are described under the [Ember.Templates.helpers](/api/classes/Ember.Templates.helpers.html)\nnamespace. Documentation on creating custom helpers can be found under\n[Ember.Helper](/api/classes/Ember.Helper.html).\n\n### Invoking a Component\n\nEmber components represent state to the UI of an application. Further\nreading on components can be found under [Ember.Component](/api/classes/Ember.Component.html)."
        },
        {
            "displayName": "ember-testing",
            "name": "ember-testing",
            "description": "The primary purpose of this class is to create hooks that can be implemented\nby an adapter for various test frameworks."
        },
        {
            "displayName": "ember-views",
            "name": "ember-views",
            "description": "`TextSupport` is a shared mixin used by both `Ember.TextField` and\n`Ember.TextArea`. `TextSupport` adds a number of methods that allow you to\nspecify a controller action to invoke when a certain event is fired on your\ntext field or textarea. The specifed controller action would get the current\nvalue of the field passed in as the only argument unless the value of\nthe field is empty. In that case, the instance of the field itself is passed\nin as the only argument.\n\nLet's use the pressing of the escape key as an example. If you wanted to\ninvoke a controller action when a user presses the escape key while on your\nfield, you would use the `escape-press` attribute on your field like so:\n\n```handlebars\n  {{! application.hbs}}\n\n  {{input escape-press='alertUser'}}\n```\n\n```javascript\n    App = Ember.Application.create();\n\n    App.ApplicationController = Ember.Controller.extend({\n      actions: {\n        alertUser: function ( currentValue ) {\n          alert( 'escape pressed, current value: ' + currentValue );\n        }\n      }\n    });\n```\n\nThe following chart is a visual representation of what takes place when the\nescape key is pressed in this scenario:\n\n```\nThe Template\n+---------------------------+\n|                           |\n| escape-press='alertUser'  |\n|                           |          TextSupport Mixin\n+----+----------------------+          +-------------------------------+\n     |                                 | cancel method                 |\n     |      escape button pressed      |                               |\n     +-------------------------------> | checks for the `escape-press` |\n                                       | attribute and pulls out the   |\n     +-------------------------------+ | `alertUser` value             |\n     |     action name 'alertUser'     +-------------------------------+\n     |     sent to controller\n     v\nController\n+------------------------------------------ +\n|                                           |\n|  actions: {                               |\n|     alertUser: function( currentValue ){  |\n|       alert( 'the esc key was pressed!' ) |\n|     }                                     |\n|  }                                        |\n|                                           |\n+-------------------------------------------+\n```\n\nHere are the events that we currently support along with the name of the\nattribute you would need to use on your field. To reiterate, you would use the\nattribute name like so:\n\n```handlebars\n  {{input attribute-name='controllerAction'}}\n```\n\n```\n+--------------------+----------------+\n|                    |                |\n| event              | attribute name |\n+--------------------+----------------+\n| new line inserted  | insert-newline |\n|                    |                |\n| enter key pressed  | insert-newline |\n|                    |                |\n| cancel key pressed | escape-press   |\n|                    |                |\n| focusin            | focus-in       |\n|                    |                |\n| focusout           | focus-out      |\n|                    |                |\n| keypress           | key-press      |\n|                    |                |\n| keyup              | key-up         |\n|                    |                |\n| keydown            | key-down       |\n+--------------------+----------------+\n```"
        }
    ],
    "elements": []
} };
});