var apiKey = require('./../.env').googleKey;

function Map() {

}

Map.prototype.draw = function(locationsArray) {
  var map;
  $.getScript("https://maps.googleapis.com/maps/api/js?key=" + apiKey, function() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });

        locationsArray.forEach(function(location) {
          var marker = new google.maps.Marker({
            position: {lat: location[0], lng: location[1]},
            map: map
          });
        });
  });
};

Map.prototype.addMarker = function(latitude, longitude) {

}


exports.mapModule = Map;
