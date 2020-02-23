'use strict';

//Global variables. Connection to html with getElementById. renderedImage is place holder variable that gets filled in later. imageIndex also a place holder variable that gets filled in later. allBusMallImages is an array that holds all our images and we push content into to it to track changes. totalClicks keeps track of the total amount of clicks to stop accepting clicks after 25. myChart is also a place holder variable. It is filled in later.
var firstImage = document.getElementById('first-image');
var renderedImage1 = null;
var imageIndex1 = null;
var secondImage = document.getElementById('second-image');
var renderedImage2 = null;
var imageIndex2 = null;
var thirdImage = document.getElementById('third-image');
var renderedImage3 = null;
var imageIndex3 = null;
var allBusMallImages = [];
var totalClicks = 0;
var myChart = null;


// Constructor function. Takes in image name and path. timesClicked and timesRendered keep track of individual picture clicks and renders. The .push is pushing the output into our global array to keep track of it.
function BusMallImage (name, imagePath) {
  this.name = name;
  this.image = imagePath;
  this.timesClicked = 0;
  this.timesRendered = 0;
  allBusMallImages.push(this);
}


// All of our generated busmall images
new BusMallImage('bag', './img/bag.jpg');
new BusMallImage('banana', './img/banana.jpg');
new BusMallImage('bathroom', './img/bathroom.jpg');
new BusMallImage('boots', './img/boots.jpg');
new BusMallImage('breakfast', './img/breakfast.jpg');
new BusMallImage('bubblegum', './img/bubblegum.jpg')
new BusMallImage('chair', './img/chair.jpg');
new BusMallImage('cthulhu', './img/cthulhu.jpg');
new BusMallImage('dog-duck', './img/dog-duck.jpg');
new BusMallImage('dragon', './img/dragon.jpg');
new BusMallImage('pen', './img/pen.jpg');
new BusMallImage('pet-sweep', './img/pet-sweep.jpg');
new BusMallImage('scissors', './img/scissors.jpg');
new BusMallImage('shark', './img/shark.jpg')
new BusMallImage('sweep', './img/sweep.png');
new BusMallImage('tauntaun', './img/tauntaun.jpg');
new BusMallImage('unicorn', './img/unicorn.jpg');
new BusMallImage('usb', './img/usb.gif');
new BusMallImage('water-can', './img/water-can.jpg');
new BusMallImage('wine-glass', './img/wine-glass.jpg');


// Randomly generates images. Does not work perfectly. Images can show up again on a refresh but it will never be in the same position. So, an image might show up in the 1 spot but on refresh shows up in the 2 spot.

function getRandomImage () {
  var randomIndex = Math.floor(Math.random() * allBusMallImages.length);

  while (
    renderedImage1 === allBusMallImages[randomIndex].name ||
    renderedImage2 === allBusMallImages[randomIndex].name ||
    renderedImage3 === allBusMallImages[randomIndex].name 
  ){
    randomIndex = Math.floor(Math.random() * allBusMallImages.length)
  }
  return randomIndex;
}


// This function keeps track of the amount of clicks. After 25 clicks, users are not allowed to click anymore. Upon completion of the clicks, the chart is rendered using the busMallArr we create below and the chartMaker function. The rendered image is using the imageIndex value we generated above.
function handleImageClick (event) {
  var imageId = event.target.getAttribute('alt');
  console.log(imageId);

  for (var i = 0; i < allBusMallImages.length; i++) {
    if (imageId === allBusMallImages[i].name) {
      allBusMallImages[i].timesClicked++;
    }
  }
  if (totalClicks < 25) {
    totalClicks++;
    imageIndex1 = getRandomImage();
    renderedImage1 = allBusMallImages[imageIndex1].name;
    imageIndex2 = getRandomImage();
    renderedImage2 = allBusMallImages[imageIndex2].name;
    imageIndex3 = getRandomImage();
    renderedImage3 = allBusMallImages[imageIndex3].name;
    renderImages();
  } else {
    alert('Thank you for your help. Your input is valuable to us!')
    firstImage.removeEventListener('click', handleImageClick);
    secondImage.removeEventListener('click', handleImageClick);
    thirdImage.removeEventListener('click', handleImageClick);
    busMallArr();
    chartMaker();
  }
  console.log(allBusMallImages);
}


// This function is what we invoke to generate our images. Sets the alt and src attributes of the randomly generated images for tracking purposes. Also keeps track of the amount of times an image is randomly generated.
function renderImages () {
  firstImage.setAttribute('src', allBusMallImages[imageIndex1].image);
  firstImage.setAttribute('alt', allBusMallImages[imageIndex1].name);
  allBusMallImages[imageIndex1].timesRendered++;
  secondImage.setAttribute('src', allBusMallImages[imageIndex2].image);
  secondImage.setAttribute('alt', allBusMallImages[imageIndex2].name);
  allBusMallImages[imageIndex2].timesRendered++;
  thirdImage.setAttribute('src', allBusMallImages[imageIndex3].image);
  thirdImage.setAttribute('alt', allBusMallImages[imageIndex3].name);
  allBusMallImages[imageIndex3].timesRendered++;
}
console.log(allBusMallImages)

// This is our event listener for clicks.
firstImage.addEventListener('click', handleImageClick);
secondImage.addEventListener('click', handleImageClick);
thirdImage.addEventListener('click', handleImageClick);

// This is filling in our empty global variables.
imageIndex1 = getRandomImage();
renderedImage1 = allBusMallImages[imageIndex1].name;
imageIndex2 = getRandomImage();
renderedImage2 = allBusMallImages[imageIndex2].name;
imageIndex3 = getRandomImage();
renderedImage2 = allBusMallImages[imageIndex3].name;

// Invocation of our renderImages function
renderImages();

// variables used to create a canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// empty arrays filled from the function below to create data for our graph
var allClicks = [];
var allRenders = [];
var allNames = [];


// loops through our global place holder array and extracts clicks, renders, and names of individual images for buliding the graph
function busMallArr () {
  for (var i = 0; i < allBusMallImages.length; i++){
    allClicks[i] = allBusMallImages[i].timesClicked;
    allRenders[i] = allBusMallImages[i].timesRendered;
    allNames[i] = allBusMallImages[i].name;
  }
}



// Chart making function. Most of the code here is pulled from a website to build the graph. The data portion of the chart only accepts arrays
function chartMaker () {
myChart = new Chart(ctx, {
  type: 'bar',
    data: {
      labels: allNames,
      datasets: [{
        label: 'Times Clicked',
        data: allClicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }, {
        label: 'Times Seen',
        data: allRenders,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}

// stringify our data and saving to local storage
function saveData (data) {
  var stringifiedData = JSON.stringify(data);
  localStorage.setItem('imagePath', stringifiedData);
}


// unstringifying our data 
function getData (key) {
  var stringData = localStorage.getItem(key);
  var parsedData = JSON.parse(stringData);
  return parsedData;
}
