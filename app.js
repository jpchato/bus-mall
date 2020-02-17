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
new BusMallImage('chair', './img/chair.jpg');
new BusMallImage('cthulhu', './img/cthulhu.jpg');
new BusMallImage('dog-duck', './img/dog-duck.jpg');
new BusMallImage('pen', './img/pen.jpg');
new BusMallImage('pet-sweep', './img/pet-sweep.jpg');
new BusMallImage('scissors', './img/scissors.jpg');
new BusMallImage('sweep', './img/sweep.png');
new BusMallImage('tauntaun', './img/tauntaun.jpg');
new BusMallImage('unicorn', './img/unicorn.jpg');
new BusMallImage('usb', './img/usb.gif');
new BusMallImage('water-can', './img/water-can.jpg');
new BusMallImage('wine-glass', './img/wine-glass.jpg');

function getRandomImage () {
  var randomIndex = Math.floor(Math.random() * allBusMallImages.length);

  while (
    renderedImage1 === allBusMallImages[randomIndex].name ||
    renderedImage2 === allBusMallImages[randomIndex].name
  ){
    randomIndex = Math.floor(Math.random() * allBusMallImages.length)
  }
  return randomIndex;
}

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
    //testing the line below this. Not included in demo and not quite sure why
    imageIndex3 = getRandomImage();
    renderImages();
  } else {
    alert('Thank you for your help. Your input is valuable to us!')
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

imageIndex1 = getRandomImage();
renderedImage1 = allBusMallImages[imageIndex1].name;
imageIndex2 = getRandomImage();
renderedImage2 = allBusMallImages[imageIndex2].name;
imageIndex3 = getRandomImage();
renderedImage2 = allBusMallImages[imageIndex3].name;

renderImages();
