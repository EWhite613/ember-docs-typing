YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Backburner",
        "Container",
        "ContainerProxyMixin",
        "Descriptor",
        "Ember",
        "Ember.ActionHandler",
        "Ember.Application",
        "Ember.ApplicationInstance",
        "Ember.ApplicationInstance.BootOptions",
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
        "Ember.Debug",
        "Ember.DefaultResolver",
        "Ember.EachProxy",
        "Ember.EmptyViewSupport",
        "Ember.Engine",
        "Ember.EngineInstance",
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
        "RegistryProxyMixin",
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
            "description": "The `ApplicationInstance` encapsulates all of the stateful aspects of a\nrunning `Application`.\n\nAt a high-level, we break application boot into two distinct phases:\n\n* Definition time, where all of the classes, templates, and other\n  dependencies are loaded (typically in the browser).\n* Run time, where we begin executing the application once everything\n  has loaded.\n\nDefinition time can be expensive and only needs to happen once since it is\nan idempotent operation. For example, between test runs and FastBoot\nrequests, the application stays the same. It is only the state that we want\nto reset.\n\nThat state is what the `ApplicationInstance` manages: it is responsible for\ncreating the container that contains all application state, and disposing of\nit once the particular test run or FastBoot request has finished."
        },
        {
            "displayName": "ember-debug",
            "name": "ember-debug"
        },
        {
            "displayName": "ember-extension-support",
            "name": "ember-extension-support",
            "description": "The `ContainerDebugAdapter` helps the container and resolver interface\nwith tools that debug Ember such as the\n[Ember Extension](https://github.com/tildeio/ember-extension)\nfor Chrome and Firefox.\n\nThis class can be extended by a custom resolver implementer\nto override some of the methods with library-specific code.\n\nThe methods likely to be overridden are:\n\n* `canCatalogEntriesByType`\n* `catalogEntriesByType`\n\nThe adapter will need to be registered\nin the application's container as `container-debug-adapter:main`\n\nExample:\n\n```javascript\nApplication.initializer({\n  name: \"containerDebugAdapter\",\n\n  initialize: function(application) {\n    application.register('container-debug-adapter:main', require('app/container-debug-adapter'));\n  }\n});\n```"
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
            "description": "`Ember.LinkComponent` renders an element whose `click` event triggers a\ntransition of the application's instance of `Ember.Router` to\na supplied route by name.\n\n`Ember.LinkComponent` components are invoked with {{#link-to}}. Properties\nof this class can be overridden with `reopen` to customize application-wide\nbehavior."
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
            "description": "An `Ember.Component` is a view that is completely\nisolated. Properties accessed in its templates go\nto the view object and actions are targeted at\nthe view object. There is no access to the\nsurrounding context or outer controller; all\ncontextual information must be passed in.\n\nThe easiest way to create an `Ember.Component` is via\na template. If you name a template\n`components/my-foo`, you will be able to use\n`{{my-foo}}` in other templates, which will make\nan instance of the isolated component.\n\n```handlebars\n{{app-profile person=currentUser}}\n```\n\n```handlebars\n<!-- app-profile template -->\n<h1>{{person.title}}</h1>\n<img src={{person.avatar}}>\n<p class='signature'>{{person.signature}}</p>\n```\n\nYou can use `yield` inside a template to\ninclude the **contents** of any block attached to\nthe component. The block will be executed in the\ncontext of the surrounding context or outer controller:\n\n```handlebars\n{{#app-profile person=currentUser}}\n  <p>Admin mode</p>\n  {{! Executed in the controller's context. }}\n{{/app-profile}}\n```\n\n```handlebars\n<!-- app-profile template -->\n<h1>{{person.title}}</h1>\n{{! Executed in the components context. }}\n{{yield}} {{! block contents }}\n```\n\nIf you want to customize the component, in order to\nhandle events or actions, you implement a subclass\nof `Ember.Component` named after the name of the\ncomponent. Note that `Component` needs to be appended to the name of\nyour subclass like `AppProfileComponent`.\n\nFor example, you could implement the action\n`hello` for the `app-profile` component:\n\n```javascript\nApp.AppProfileComponent = Ember.Component.extend({\n  actions: {\n    hello: function(name) {\n      console.log(\"Hello\", name);\n    }\n  }\n});\n```\n\nAnd then use it in the component's template:\n\n```handlebars\n<!-- app-profile template -->\n\n<h1>{{person.title}}</h1>\n{{yield}} <!-- block contents -->\n\n<button {{action 'hello' person.name}}>\n  Say Hello to {{person.name}}\n</button>\n```\n\nComponents must have a `-` in their name to avoid\nconflicts with built-in controls that wrap HTML\nelements. This is consistent with the same\nrequirement in web components."
        }
    ],
    "elements": []
} };
});