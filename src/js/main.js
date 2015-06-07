// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
  	async: 'libs/requirejs-plugins/src/async',
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    modernizr: 'lib/modernizr/modernizr',
    leaflet: 'http://cdn.leafletjs.com/leaflet-0.7.3/leaflet',
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
	console.log('attempt to initialize app');
  // The "app" dependency is passed in as "App"
  App.initialize();
});