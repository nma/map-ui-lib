// Filename: Map.js
/**
 * Data object containing parts that make up our map.
 */
define([
  'jquery', 
  'underscore', 
  'backbone',
  'leaflet',
  'collections/MapLayers',
  'models/UiLayer'
], function($, _, Backbone, L, MapLayerCollection, UiLayer){
	
	var Map = Backbone.Model.extend({
		initialize: function(mapDiv) {
			var that = this;
			
			that.uiLayer = new UiLayer();
			that.mapLayers = new MapLayerCollection([]);
		},
		
		setTileLayer: function() {
			
		},
		
		addUiLayer: function() {
			
		},
		
		addTileLayer: function(mapLayer) {
		},
		
	});
	return Map;
});