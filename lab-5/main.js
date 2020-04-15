var images = new Array(9);
for (var i = 0; i < 9; i++){
    images[i] = new Image();
    images[i].src ='images/' + (i+1) + '.jpg';
}

init();

function randomImage(images) {
  var random = randomize(images);
  while(randomItem === document.getElementById("image").src){
    random = randomize(images)
  }
  var randomItem = images[random].src;
  document.getElementById("image").src = randomItem.toString();
}

function randomize(array){
  return Math.floor((Math.random() * (array.length)));
}

function init() {
  document.getElementById("switch-image").addEventListener("click", function(){
    randomImage(images);
  });
  randomImage(images);
}
