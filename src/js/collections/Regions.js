// Filename: Regions.js
/**
 * Collection of Region data model 
 */
define([
  'jquery', 
  'underscore', 
  'backbone',
  'models/Region',
], function($, _, Backbone, RegionModel){
	
	var Regions = Backbone.Collection.extend({
		
		model: RegionModel,
	});
	
	return Regions;
});