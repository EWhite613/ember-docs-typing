YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Backburner",
        "Container",
        "Descriptor",
        "EachProxy",
        "Ember",
        "Ember.ActionHandler",
        "Ember.Application",
        "Ember.AriaRoleSupport",
        "Ember.Array",
        "Ember.ArrayController",
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
        "Ember.Deferred",
        "Ember.EmptyViewSupport",
        "Ember.Enumerable",
        "Ember.EnumerableUtils",
        "Ember.Error",
        "Ember.EventDispatcher",
        "Ember.Evented",
        "Ember.FEATURES",
        "Ember.Freezable",
        "Ember.HTMLBars",
        "Ember.HTMLBars.Helper",
        "Ember.Handlebars",
        "Ember.Handlebars.helpers",
        "Ember.HashLocation",
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
        "Ember.ObjectController",
        "Ember.ObjectProxy",
        "Ember.Observable",
        "Ember.OrderedSet",
        "Ember.PromiseProxyMixin",
        "Ember.ProxyMixin",
        "Ember.ReduceComputedProperty",
        "Ember.RenderBuffer",
        "Ember.Route",
        "Ember.Router",
        "Ember.Select",
        "Ember.Service",
        "Ember.Set",
        "Ember.SortableMixin",
        "Ember.String",
        "Ember.SubArray",
        "Ember.TargetActionSupport",
        "Ember.TemplateRenderingSupport",
        "Ember.Test",
        "Ember.Test.Adapter",
        "Ember.Test.QUnitAdapter",
        "Ember.TextArea",
        "Ember.TextField",
        "Ember.TextSupport",
        "Ember.TrackedArray",
        "Ember.View",
        "Ember.ViewTargetActionSupport",
        "Ember.VisibilitySupport",
        "Ember._Metamorph",
        "Ember._MetamorphView",
        "Ember.computed",
        "Ember.inject",
        "Ember.platform",
        "Ember.run",
        "Ember.stream.Stream",
        "Ember.streams.Dependency",
        "Ember.streams.Ember.stream",
        "Ember.streams.Subscriber",
        "Function",
        "HandlebarsCompatibleHelper",
        "Libraries",
        "Registry",
        "RoutingService",
        "String",
        "TransformBindAttrToAttributes",
        "TransformEachInToBlockParams",
        "TransformEachInToHash",
        "TransformInputOnToOnEvent",
        "TransformWithAsToHash"
    ],
    "modules": [
        "ember",
        "ember-application",
        "ember-debug",
        "ember-extension-support",
        "ember-handlebars",
        "ember-htmlbars",
        "ember-metal",
        "ember-routing",
        "ember-routing-htmlbars",
        "ember-routing-views",
        "ember-runtime",
        "ember-template-compiler",
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
            "description": "`Ember.ControllerMixin` provides a standard interface for all classes that\ncompose Ember's controller layer: `Ember.Controller`,\n`Ember.ArrayController`, and `Ember.ObjectController`."
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
            "displayName": "ember-handlebars",
            "name": "ember-handlebars"
        },
        {
            "displayName": "ember-htmlbars",
            "name": "ember-htmlbars",
            "description": "Wraps an Handlebars helper with an HTMLBars helper for backwards compatibility."
        },
        {
            "displayName": "ember-metal",
            "name": "ember-metal",
            "description": "This namespace contains all Ember methods and functions. Future versions of\nEmber may overwrite this namespace and therefore, you should avoid adding any\nnew properties.\n\nYou can also use the shorthand `Em` instead of `Ember`.\n\nAt the heart of Ember is Ember-Runtime, a set of core functions that provide\ncross-platform compatibility and object property observing.  Ember-Runtime is\nsmall and performance-focused so you can use it alongside other\ncross-platform libraries such as jQuery. For more details, see\n[Ember-Runtime](http://emberjs.com/api/modules/ember-runtime.html)."
        },
        {
            "displayName": "ember-routing",
            "name": "ember-routing",
            "description": "Ember.Location returns an instance of the correct implementation of\nthe `location` API.\n\n## Implementations\n\nYou can pass an implementation name (`hash`, `history`, `none`) to force a\nparticular implementation to be used in your application.\n\n### HashLocation\n\nUsing `HashLocation` results in URLs with a `#` (hash sign) separating the\nserver side URL portion of the URL from the portion that is used by Ember.\nThis relies upon the `hashchange` event existing in the browser.\n\nExample:\n\n```javascript\nApp.Router.map(function() {\n  this.resource('posts', function() {\n    this.route('new');\n  });\n});\n\nApp.Router.reopen({\n  location: 'hash'\n});\n```\n\nThis will result in a posts.new url of `/#/posts/new`.\n\n### HistoryLocation\n\nUsing `HistoryLocation` results in URLs that are indistinguishable from a\nstandard URL. This relies upon the browser's `history` API.\n\nExample:\n\n```javascript\nApp.Router.map(function() {\n  this.resource('posts', function() {\n    this.route('new');\n  });\n});\n\nApp.Router.reopen({\n  location: 'history'\n});\n```\n\nThis will result in a posts.new url of `/posts/new`.\n\nKeep in mind that your server must serve the Ember app at all the routes you\ndefine.\n\n### AutoLocation\n\nUsing `AutoLocation`, the router will use the best Location class supported by\nthe browser it is running in.\n\nBrowsers that support the `history` API will use `HistoryLocation`, those that\ndo not, but still support the `hashchange` event will use `HashLocation`, and\nin the rare case neither is supported will use `NoneLocation`.\n\nExample:\n\n```javascript\nApp.Router.map(function() {\n  this.resource('posts', function() {\n    this.route('new');\n  });\n});\n\nApp.Router.reopen({\n  location: 'auto'\n});\n```\n\nThis will result in a posts.new url of `/posts/new` for modern browsers that\nsupport the `history` api or `/#/posts/new` for older ones, like Internet\nExplorer 9 and below.\n\nWhen a user visits a link to your application, they will be automatically\nupgraded or downgraded to the appropriate `Location` class, with the URL\ntransformed accordingly, if needed.\n\nKeep in mind that since some of your users will use `HistoryLocation`, your\nserver must serve the Ember app at all the routes you define.\n\n### NoneLocation\n\nUsing `NoneLocation` causes Ember to not store the applications URL state\nin the actual URL. This is generally used for testing purposes, and is one\nof the changes made when calling `App.setupForTesting()`.\n\n## Location API\n\nEach location implementation must provide the following methods:\n\n* implementation: returns the string name used to reference the implementation.\n* getURL: returns the current URL.\n* setURL(path): sets the current URL.\n* replaceURL(path): replace the current URL (optional).\n* onUpdateURL(callback): triggers the callback when the URL changes.\n* formatURL(url): formats `url` to be placed into `href` attribute.\n* detect() (optional): instructs the location to do any feature detection\n    necessary. If the location needs to redirect to a different URL, it\n    can cancel routing by setting the `cancelRouterSetup` property on itself\n    to `false`.\n\nCalling setURL or replaceURL will not trigger onUpdateURL callbacks."
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
            "displayName": "ember-testing",
            "name": "ember-testing",
            "description": "The primary purpose of this class is to create hooks that can be implemented\nby an adapter for various test frameworks."
        },
        {
            "displayName": "ember-views",
            "name": "ember-views",
            "description": "`Ember.RenderBuffer` gathers information regarding the view and generates the\nfinal representation. `Ember.RenderBuffer` will generate HTML which can be pushed\nto the DOM.\n\n ```javascript\n var buffer = new Ember.RenderBuffer('div', contextualElement);\n```"
        }
    ],
    "elements": []
} };
});