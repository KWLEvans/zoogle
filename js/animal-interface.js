var Animal = require('./../js/animal.js').animalModule;


function displayResults(results) {
  console.log(results);
}

function printTaxonomy(name, taxonomy) {
  var htmlString = "<h2>Taxonomy of "+ name +":</h2> <ul>";
  for (var rank in taxonomy) {
    htmlString += "<li><strong>";
    htmlString +=  rank + ": </strong>";
    htmlString +=  taxonomy[rank] + "</li>";
  }
  htmlString += "</ul>";
  $('#display').html(htmlString);
}

function printOccurences(data) {
  var htmlString = "<h2>Occurence Data: </h2>";
  htmlString += "<h4>Displaying " + data.results + " out of " + data.count + " results</h4>";
  htmlString += "<img id='search-image' src='" + data.imgSrc + "' alt='an image of '" + data.name + "'>";
  $('#occurence-data').html(htmlString);
}

function doAllTheThings(name) {
  var animal = new Animal();
  animal.taxonomy(name, printTaxonomy);
  animal.occurrences(name, printOccurences);
}


$(function() {

  $("#animal-search").submit(function(event) {
    event.preventDefault();

    var animal = new Animal();
    var name = $("#animal").val();
    
    animal.search(name, doAllTheThings);
  });
});
