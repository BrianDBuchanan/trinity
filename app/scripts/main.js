$(document).ready(function() {
// user enters rant into rant into input and zip into input
// on form submit event, create another page/hide form 
// map with pointer and text bubble containing rant
  myMap.init();

});

  var myMap = {
  init: function() {
      this.initStyling();
      this.initEvents();
  },
  initStyling: function() {
    
      this.renderMap();
  },
  initEvents: function() {

    $("form").on("submit", ".submitbtn", this.requestMap); 
 	var rant = $("#rant").val();
  	var zip = $("#zip").val();
  	console.log(rant + zip);

  	render: function (e) {
  		var renderedmap = window.renderedmap = data;
  		$("#putmaphere").html(), renderedmap)
	};

    renderMap: function(e) {

      $.ajax({
      url: "https://maps.google.com/maps/api/js?key=AIzaSyCajq54oRnwkbl-7C-2_-L3LTGUMKcMRjQ&sensor=false" + addressId,
      type: "GET",
      dataType: "jsonp",
      error: function(jqXHR, status, error) {
        alert("you broke the internet");
      },
      success: function(data, dataType, jqXHR) {
      	var latlng = function(zip){
		function googleGeocode() {
  			geocoder = new google.maps.Geocoder();
  			this.geocode = function(address, callbackFunction) {
      		geocoder.geocode( { 'address': address}, function(results, status) {
        		if (status == google.maps.GeocoderStatus.OK) {
          	var result = {};
          		result.latitude = results[0].geometry.location.lat();
          		result.longitude = results[0].geometry.location.lng();
          		callbackFunction(result);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
          callbackFunction(null);
        }
      });
  };
}

	}
    	// var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
            zoom: 8,
            center: zip,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };
    	var map = new google.maps.Map($("#putmaphere").html(), mapOptions);
		
		var marker = new google.maps.Marker({
      		position: latlng, 
      		map: map,
      	});

      	var zip = $("#zip").val();
        	$(geocoder).geocode( { 'address': zip };
 
      	console.log("geocoding results");
        console.log(results);
  },

    $.ajax({
      url: "https://maps.google.com/maps/api/js?key=AIzaSyA_FaETrMKtUtLoXzDa2QM_ZkpM5Ah53Ks&sensor=false",
      type: "POST",
      data: newMap, 
      error: function(jqXHR, status, error) {
        alert("couldn't add post");
      },
      success: function(data, dataType, jqXHR) {
        
        myMap.addMap(); 
      }
    });
    addMap: function(e) {
    	e.preventdefault();
    	//create geocoder, map detaills, map reference and container, and marker
    	
}}
      // function loadScript() {
      // var script = document.createElement('script');
      // script.type = 'text/javascript';
      // script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      // 'callback=map.Init';
      // document.body.appendChild(script);
      // }
      //     window.onload = loadScript;
      //   }
