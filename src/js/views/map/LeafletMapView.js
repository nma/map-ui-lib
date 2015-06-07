// Filename: LeafletMapView.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'leaflet'
], function($, _, Backbone, L){
    var LeafletMapView = Backbone.View.extend({
    	
    	el: $("#map"),
    	
    	events: {
    		'mouseover': 'highlightFeature'
    	},
    	
   		initialize: function () {
   			console.log('entered mapView:initialize');
   			var that = this;
   			
   			// create a map in the "map" div, set the view to a given place and zoom
   			that.map = L.map(that.el).setView([37.8, -96], 4);
   			that.geoJson = null;
   			// add an OpenStreetMap tile layer
			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(that.map);
   		},
   		
    	render: function() {
    		console.log('entered mapView:render');
    		
    		var PinIcon = L.Icon.extend({
			    options: {
			    	//shadowUrl:    'pin_shadow.png',
			        iconSize:     [48, 52],
			        //shadowSize:   [50, 64],
			        iconAnchor:   [22, 94],
			        //shadowAnchor: [4, 62],
			        popupAnchor:  [-3, -76]
			    }
			});
			
			var greenIcon = new PinIcon({iconUrl: './img/pin-green.png'}),
		    redIcon = new PinIcon({iconUrl: './img/pin-red.png'}),
		    orangeIcon = new PinIcon({iconUrl: './img/pin-yellow.png'});
			
			// add a marker in the given location, attach some popup content to it and open the popup
			L.marker([51.471, -0.462], {icon: greenIcon}).addTo(this.map).bindPopup("I am a green leaf.").openPopup();
			L.marker([51.471, -0.500], {icon: redIcon}).addTo(this.map).bindPopup("I am a red leaf.").openPopup();
			L.marker([51.471, -0.600], {icon: orangeIcon}).addTo(this.map).bindPopup("I am an orange leaf.").openPopup();	
    	},
		    	 
    });
    return LeafletMapView;
 });