// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    // The router defines all our components at startup and proceeds be a 
    Router.initialize();
  };

  // run the above initialize method as the default action
  return { 
    initialize: initialize
  };
});