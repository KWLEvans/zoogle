var Map = require('./../js/map.js').mapModule;

function Animal() {

}

Animal.prototype.search = function(name, callback) {
  var url = "https://en.wikipedia.org/w/api.php?action=query&titles=" + encodeURI(name) + "&format=json&prop=revisions&rvprop=content&rvsection=0&rvparse&redirects";
  $.get(url).then(function(response) {
    var pageKey = Object.keys(response.query.pages)[0];
    var text = response.query.pages[pageKey].revisions[0]["*"];
    var sciName = text.match(/nomial\"><i>.*<\/i>/)[0];
    sciName = sciName.replace(/nomial\"><i>/, "");
    sciName = sciName.replace("<\/i>", "");
    callback(sciName);
  });
};

Animal.prototype.taxonomy = function(name, callback) {
  var url = "http://api.gbif.org/v1/species/search?language=eng&datasetKey=d7dddbf4-2cf0-4f39-9b2a-bb099caae36c&q=" + encodeURI(name);

  $.get(url).then(function(response) {

    var name = "";

    response.results[0].vernacularNames.forEach(function(element) {
      if (element.language === "eng") {
        name = element.vernacularName;
      }
    });

    var taxonomy = {
      "kingdom": response.results[0].kingdom,
      "phylum": response.results[0].phylum,
      "class": response.results[0].class,
      "order": response.results[0].order,
      "family": response.results[0].family,
      "genus": response.results[0].genus,
      "species": response.results[0].species
    };

    callback(name, taxonomy);
  });
};

Animal.prototype.parseOccurence = function(name, response, callback) {
  var data = {
    "name": name,
    "count": response.count,
    "results": response.results.length,
    "imgSrc": ""
  };
  var url = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=" + encodeURI(name) +"&redirects";

  $.get(url).then(function(response) {
    var pageKey = Object.keys(response.query.pages)[0];
    data.imgSrc = response.query.pages[pageKey].original.source;
    callback(data);
  });
};

Animal.prototype.occurrences = function(name, callback) {
  var that = this;
  var url = "http://api.gbif.org/v1/species/search?language=eng&datasetKey=d7dddbf4-2cf0-4f39-9b2a-bb099caae36c&q=" + encodeURI(name);

  $.get(url).then(function(response) {
    var key = response.results[0].key;
    var url = "http://api.gbif.org/v1/occurrence/search?limit=300&speciesKey=" + key;

    $.get(url).then(function(response) {
      that.parseOccurence(name, response, callback);
      locations = [];

      response.results.forEach(function(result) {
        var place = [result.decimalLatitude, result.decimalLongitude];
        locations.push(place);
      });

      var newMap = new Map();
      newMap.draw(locations);
    });
  });
};

exports.animalModule = Animal;
