// Filename: GoogleMapView.js
    // TODO: finish this if we need to use Google Maps.  Import these into main.js
    
    /* Google Map Addons libraries (if using google maps) */
    //markercluster: 'libs/MarkerClusterer/src/markerclusterer',
    //markermanager: 'libs/MarkerManager/srcmarkermanager',
    //maplabel: 'libs/js-map-label/src/maplabel',
    //infobubble: 'libs/js-info-bubble/src/infobubble',
    //daynightoverlay: 'libs/google-maps-api-addons/daynightoverlay/daynightoverlay'
    //templates: '../templates'

    // Place this into Require.js inside app.js
    // Async loads googlemap api, and provides access to it at the app level
    //'async!http://maps.googleapis.com/maps/api/js?v=3.exp&libraries=visualization',

define([
  'jquery', 
  'underscore', 
  'backbone',
  'markercluster',
  'collections/Regions',
  'views/map/MapHelper',
], function($, _, Backbone, Marker, Regions, Helper) {
	
    var MapView = Backbone.View.extend({
    	
    	el: $("#map"),
    	
    	events: {
    	},
    	
   		initialize: function () {
   			console.log('entered mapView:initialize');
   			var that = this;
   			
   			that.regions = new Regions();
   			this.regions.add({ name: "Australia", geoJsonCode: "AUS" });
   			
			var LatLng = new google.maps.LatLng(34, -20);
			var styles = [
				{
					featureType: "road",
					elementType: "geometry",
					stylers: [
						{lightness: 100},
						{visibility: "simplified" }
					],
				},
				{
					featureType: "road",
					elementType: "labels",
					stylers: [
						{visibilty: "off"}
					] 	
				}
			];
            var myOptions = {
                zoom: 2,
                center: LatLng,
                mapTypeControl: false,
                mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                navigationControl: false,
                streetViewControl: false,
                zoomControl: false,
                panControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: styles
            };

            that.map = new google.maps.Map(this.el, myOptions);
   		},
   		
    	render: function() {
    		console.log('entered mapView:render');
    		var theMap = this.map;
    		this.regions.each(function(log) {
    			$.get('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/AUS.geo.json', log.populateGeoJsonData);
		        console.log('log item.', log);
		        
		        theMap.data.addGeoJson(log.get('geoJsonData'));
		    });
    		return this;	
    	},
 
    });
    return MapView;
 });