var Animal = require('./../js/animal.js').animalModule;

function displayResults(results) {
  console.log(results);
}

$(function() {
  $("#animal-search").submit(function(event) {
    event.preventDefault();

    var animal = new Animal();
    var name = $("#animal").val();
    animal.search(name, displayResults);
  });
});
