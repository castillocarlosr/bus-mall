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
var allItems = [];
var productOne = document.getElementById('productOne');
var productTwo = document.getElementById('productTwo');
var productThree = document.getElementById('productThree');

var numClicks = 0;
var numClicksTotal = document.getElementById('numberCompleted');
var endItem = [];
//unction BusMall(filepath, itemName)
function BusMall(filepath, itemName){
  this.filepath = filepath;
  this.itemName = itemName;
  this.timesClicked = 0;
  this.timesShown = 0;
  allItems.push(this);
}

new BusMall('../img/bag.jpg', 'bag');
new BusMall('../img/banana.jpg', 'banana');
new BusMall('../img/bathroom.jpg', 'bathroom');
new BusMall('../img/boots.jpg', 'boots');
new BusMall('../img/breakfast.jpg', 'breakfast');
new BusMall('../img/bubblegum.jpg', 'bubblegum');
new BusMall('../img/chair.jpg', 'chair');
new BusMall('../img/cthulhu.jpg', 'cthulhu');
new BusMall('../img/dogDuck.jpg', 'dog-duck');
new BusMall('../img/dragon.jpg', 'dragon');
new BusMall('../img/pen.jpg', 'pen');
new BusMall('../img/petSweep.jpg', 'pet-sweep');
new BusMall('../img/scissors.jpg', 'scissors');
new BusMall('../img/shark.jpg', 'shark');
new BusMall('../img/sweep.png', 'sweep'); //check for any png issues
new BusMall('../img/tauntaun.jpg', 'tauntaun');
new BusMall('../img/unicorn.jpg', 'unicorn');
new BusMall('../img/usb.gif', 'usb'); //check for GIF issues
new BusMall('../img/waterCan.jpg', 'water-can');
new BusMall('../img/wineGlass.jpg', 'wine-glass');

function randomNumber(){
  return Math.floor(Math.random() * allItems.length);
}

function renderItems(){
  var newItems = [];
  while (newItems.length < 3){
    var randItem = randomNumber();
    if (!endItem.includes(randItem) && !newItems.includes(randItem)){
      newItems.push(randItem);
    }
  }
  productOne.src = allItems[newItems[0]].filepath;
  productOne.id = newItems[0];
  productTwo.src = allItems[newItems[1]].filepath;
  productTwo.id = newItems[1];
  productThree.src = allItems[newItems[2]].filepath;
  productThree.id = newItems[2];
  endItem = newItems;
}
renderItems();

function showNewItems(){
  var clickedItem = event.target;
  allItems[clickedItem.id].timesClicked++;
  allItems[productOne.id].timesShown++;
  allItems[productTwo.id].timesShown++;
  allItems[productThree.id].timesShown++;
  renderItems();
  numClicks++;
  numClicksTotal.innerText = numClicks;
  if (numClicks === 25){
    renderResults();
    productOne.removeEventListener('click', showNewItems);
    productTwo.removeEventListener('click', showNewItems);
    productThree.removeEventListener('click', showNewItems);
    document.getElementById('busMallBox').style.display = 'none';
  }
}

function renderResults(){
  var dataResults = document.getElementById('dataResults');
  var newUl = document.createElement('ul');
  for (var i = 0; i < allItems.length; i++){
    var newLi = document.createElement('li');
    newLi.innerText = allItems[i].timesClicked + ' votes for ' + allItems[i].itemName + '.' + 'Total times shown: ' + allItems[i].timesShown + '.';
    newUl.appendChild(newLi);
  }
  dataResults.appendChild(newUl);
}

productOne.addEventListener('click', showNewItems);
productTwo.addEventListener('click', showNewItems);
productThree.addEventListener('click', showNewItems);

