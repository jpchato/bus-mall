'use strict';

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


function BusMallImage (name, imagePath) {
  this.name = name;
  this.image = imagePath;
  this.timesClicked = 0;
  this.timesRendered = 0;
  allBusMallImages.push(this);

}

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

// ///TESTING GROUND BELOW DOESN'T WORK
// function getRandomImage (image) {
//   var randomIndex = Math.floor(Math.random() * allBusMallImages.length);
//   var getRandomImage = image[randomIndex];

//   while (
//     getRandomImage.name === firstImage.alt ||
//     getRandomImage.name === secondImage.alt ||
//     getRandomImage.name === thirdImage.alt
//   ){
//     randomIndex = Math.floor(Math.random() * allBusMallImages.length);
//     getRandomImage = image[randomIndex];
//   }
//   return getRandomImage;
// }
// ///TESTING GROUND ABOVE THIS DOESN'T WORK^^^^



/// bELOW THIS WORKS
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
/// ^^^ THIS WORKS

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
  }
  console.log(allBusMallImages);
}

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

firstImage.addEventListener('click', handleImageClick);
secondImage.addEventListener('click', handleImageClick);
thirdImage.addEventListener('click', handleImageClick);

imageIndex1 = getRandomImage();
renderedImage1 = allBusMallImages[imageIndex1].name;
imageIndex2 = getRandomImage();
renderedImage2 = allBusMallImages[imageIndex2].name;
imageIndex3 = getRandomImage();
renderedImage2 = allBusMallImages[imageIndex3].name;

renderImages();

// var list = document.getElementById('busmall');
// var createList = document.createElement('ul');
// var createListItem = document.createElement('li');
// createList.appendChild(createListItem);
// createListItem.textContent = totalClicks;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function formatChartLabels(arr) {
  console.log(arr);
  var labels = [];

  for (var i = 0; i < arr.length; i++){
    labels.push(arr[i].name);
  }
  return labels;
}

myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
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
      }]
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