function Animal() {

}

Animal.prototype.search = function(name, callback) {
  console.log(name);
  console.log(encodeURI(name));
  var url = "http://api.gbif.org/v1/species/search?datasetKey=d7dddbf4-2cf0-4f39-9b2a-bb099caae36c&q=" + encodeURI(name);
  console.log(url);
  $.get(url).then(function(response) {
    callback(response.results[0].speciesKey);
  });
}

exports.animalModule = Animal;
