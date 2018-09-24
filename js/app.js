'use strict';

// Display three products side-by-side-by-side
// User chooses one.
//     Store data.  Calculate and display results.
//     Results = total # clicks, % of times an item clicked when shown.
//     Keep track of how many times each image is displayed.  Do calculations.
// Show results at end of 25 selections.


//var array of bus items
//Call event handler
//  Action on click  Event listener
//  array to store data clicked
//  array on what is shown
// get DOM of ID image
// need a items object
// need a constructor function
//call the function

//DOM
var imgElement = document.getElementById('bag');
var imgElement = document.getElementById('banana');
var imgElement = document.getElementById('bathroom');

//array of catalog
var Busmall.catalog = [];

//constructor
function Busmall(filepath1, filepath2, filepath3, itemName1, itemName2, itemName3){
    this.filepath1 = filepath1;
    this.filepath2 = filepath2;
    this.filepath3 = filepath3;
    this.itemName1 = itemName1;
    this.itemName2 = itemName2;
    this.itemName3 = itemName3;
    Busmall.catalog.push(this);
}

//event handler
function randomItem(){
    var randomNumber = Math.floor(Math.random() * Busmall.catalog.length);
    imgElement.src = Busmall.catalog[randomNumber].filepath1;
    imgElement.alt = Busmall.catalog[randomNumber].itemName1;
    imgElement.src = Busmall.catalog[randomNumber].filepath2;
    imgElement.alt = Busmall.catalog[randomNumber].itemName2;
    imgElement.src = Busmall.catalog[randomNumber].filepath3;
    imgElement.alt = Busmall.catalog[randomNumber].itemName3;
}

imgElement.addEventListener('click', randomItem)

new Busmall('../img/bag.jpg', '../img/banana.jpg', '../img/bathroom.jpg', 'bag', 'banana', 'bathroom');
new Busmall('../img/boots.jpg', '../img/breakfast.jpg', '../img/bubblegum.jpg', 'boots', 'breakfast', 'bubblegum');
new Busmall('../img/chair.jpg', '../img/cthulhu.jpg', '../img/dog-duck.jpg', 'chair', 'cthulhu', 'dog-duck');

randomItem();
