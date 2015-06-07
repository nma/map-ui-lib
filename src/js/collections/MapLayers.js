// Filename: MapLayers.js
/**
 * Collection of MapLayer specific data model 
 */
define([

], function($, _, Backbone, RegionModel){
	
	var Regions = Backbone.Collections.extend({
		
		model: RegionModel,
		
		initalize: function() {
			
		},
		
	});
	
	return Regions;
});