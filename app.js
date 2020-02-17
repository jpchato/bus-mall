'use strict';

var allBusMallImages = [];
var totalClicks = 0;


function BusMallImage (name, imagePath){
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