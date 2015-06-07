// Filename: Region.js
/**
 * data model for a region on the map
 */
define([
  'jquery', 
  'underscore', 
  'backbone',
], function($, _, Backbone){
	
	var Region = Backbone.Model.extend({

		idAttribute : "geoJsonCode",
		
		initalize: function() {
			var that = this;

			console.log("init the region");
		},
		
		populateGeoJsonData: function(data) {
			console.log("attempt to retrieve Region GeoData: " + data);
			this.set('geoJsonData', data);
		},
		
	});
	
	return Region;
});