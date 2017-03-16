var apiKey = require('./../.env').googleKey;

function Map() {

}

Map.prototype.draw = function(locationsArray) {
  var map;
  $.getScript("https://maps.googleapis.com/maps/api/js?key=" + apiKey, function() {
    if ($.isNumeric(locationsArray[0][0]) && $.isNumeric(locationsArray[0][1])) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: locationsArray[0][0], lng: locationsArray[0][1]},
        zoom: 2
      });
    } else {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 0, lng: 0},
          zoom: 2
      });
    }

        locationsArray.forEach(function(location) {
          if ($.isNumeric(location[0]) && $.isNumeric(location[1])) {
            var marker = new google.maps.Marker({
              position: {lat: location[0], lng: location[1]},
              map: map
            });
          }
        });
  });
};


exports.mapModule = Map;
