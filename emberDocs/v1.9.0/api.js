YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "A Suite can be used to define a reusable set of unit tests that can be\napplied to any object.  Suites are most useful for defining tests that\nwork against a mixin or plugin API.  Developers implementing objects that\nuse the mixin or support the API can then run these tests against their\nown code to verify compliance.\n\nTo define a suite, you need to define the tests themselves as well as a\ncallback API implementors can use to tie your tests to thier specific class.\n\n## Defining a Callback API\n\nTo define the callback API, just extend this class and add your properties\nor methods that must be provided.  Use Ember.required() placeholders for\nany properties that implementors must define themselves.\n\n## Defining Unit Tests\n\nTo add unit tests, use the suite.module() or suite.test() methods instead\nof a regular module() or test() method when defining your tests.  This will\nadd the tests to the suite.\n\n## Using a Suite\n\nTo use a Suite to test your own objects, extend the suite subclass and\ndefine any required methods.  Then call run() on the new subclass.  This\nwill create an instance of your class and then defining the unit tests.",
        "Ember",
        "Ember.ActionHandler",
        "Ember.Application",
        "Ember.Array",
        "Ember.ArrayController",
        "Ember.ArrayProxy",
        "Ember.AutoLocation",
        "Ember.Binding",
        "Ember.Checkbox",
        "Ember.CollectionView",
        "Ember.Comparable",
        "Ember.Component",
        "Ember.ComponentTemplateDeprecation",
        "Ember.ComputedProperty",
        "Ember.ContainerDebugAdapter",
        "Ember.ContainerView",
        "Ember.Controller",
        "Ember.ControllerContentModelAliasDeprecation",
        "Ember.ControllerMixin",
        "Ember.Copyable",
        "Ember.CoreObject",
        "Ember.CoreView",
        "Ember.DataAdapter",
        "Ember.DefaultResolver",
        "Ember.Deferred",
        "Ember.Descriptor",
        "Ember.EachProxy",
        "Ember.Enumerable",
        "Ember.EnumerableUtils",
        "Ember.Error",
        "Ember.EventDispatcher",
        "Ember.Evented",
        "Ember.FEATURES",
        "Ember.Freezable",
        "Ember.Handlebars",
        "Ember.Handlebars.Compiler",
        "Ember.Handlebars.JavaScriptCompiler",
        "Ember.Handlebars.helpers",
        "Ember.HashLocation",
        "Ember.HistoryLocation",
        "Ember.InjectedProperty",
        "Ember.Instrumentation",
        "Ember.LinkView",
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
        "Ember.Route",
        "Ember.Router",
        "Ember.Select",
        "Ember.Service",
        "Ember.Set",
        "Ember.SortableMixin",
        "Ember.String",
        "Ember.SubArray",
        "Ember.TargetActionSupport",
        "Ember.Test",
        "Ember.Test.Adapter",
        "Ember.Test.QUnitAdapter",
        "Ember.TextArea",
        "Ember.TextField",
        "Ember.TextSupport",
        "Ember.TrackedArray",
        "Ember.View",
        "Ember.ViewTargetActionSupport",
        "Ember._HandlebarsBoundView",
        "Ember._Metamorph",
        "Ember._MetamorphView",
        "Ember._SimpleMetamorphView",
        "Ember.inject",
        "Ember.platform",
        "Ember.run",
        "Function",
        "String"
    ],
    "modules": [
        "ember",
        "ember-application",
        "ember-debug",
        "ember-extension-support",
        "ember-handlebars",
        "ember-handlebars-compiler",
        "ember-metal",
        "ember-routing",
        "ember-routing-handlebars",
        "ember-runtime",
        "ember-testing",
        "ember-views"
    ],
    "allModules": [
        {
            "displayName": "ember",
            "name": "ember",
            "description": "Ember"
        },
        {
            "displayName": "ember-application",
            "name": "ember-application",
            "description": "Ember Application"
        },
        {
            "displayName": "ember-debug",
            "name": "ember-debug",
            "description": "Ember Debug"
        },
        {
            "displayName": "ember-extension-support",
            "name": "ember-extension-support",
            "description": "Ember Extension Support"
        },
        {
            "displayName": "ember-handlebars",
            "name": "ember-handlebars",
            "description": "Ember Handlebars"
        },
        {
            "displayName": "ember-handlebars-compiler",
            "name": "ember-handlebars-compiler",
            "description": "Prepares the Handlebars templating library for use inside Ember's view\nsystem.\n\nThe `Ember.Handlebars` object is the standard Handlebars library, extended to\nuse Ember's `get()` method instead of direct property access, which allows\ncomputed properties to be used inside templates.\n\nTo create an `Ember.Handlebars` template, call `Ember.Handlebars.compile()`.\nThis will return a function that can be used by `Ember.View` for rendering."
        },
        {
            "displayName": "ember-metal",
            "name": "ember-metal",
            "description": "All Ember methods and functions are defined inside of this namespace. You\ngenerally should not add new properties to this namespace as it may be\noverwritten by future versions of Ember.\n\nYou can also use the shorthand `Em` instead of `Ember`.\n\nEmber-Runtime is a framework that provides core functions for Ember including\ncross-platform functions, support for property observing and objects. Its\nfocus is on small size and performance. You can use this in place of or\nalong-side other cross-platform libraries such as jQuery.\n\nThe core Runtime framework is based on the jQuery API with a number of\nperformance optimizations."
        },
        {
            "displayName": "ember-routing",
            "name": "ember-routing",
            "description": "Ember Routing"
        },
        {
            "displayName": "ember-routing-handlebars",
            "name": "ember-routing-handlebars",
            "description": "Ember Routing Handlebars"
        },
        {
            "displayName": "ember-runtime",
            "name": "ember-runtime",
            "description": "Ember Runtime"
        },
        {
            "displayName": "ember-testing",
            "name": "ember-testing",
            "description": "Ember Testing"
        },
        {
            "displayName": "ember-views",
            "name": "ember-views",
            "description": "Ember Views"
        }
    ],
    "elements": []
} };
});