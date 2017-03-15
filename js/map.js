var apiKey = require('./../.env').googleKey;

function Map() {
  this.map = "";
}

Map.prototype.init = function() {

  function initMap() {
    this.map = new google.maps.Map($("#map"), {
    center: {lat: 0, lng: 0},
    zoom: 8
  });
}
  $.get("https://maps.googleapis.com/maps/api/js?key="+ apiKey +"&callback=initMap");
};


exports.mapModule = Map;
