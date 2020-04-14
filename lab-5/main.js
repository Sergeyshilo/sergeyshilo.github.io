var images = new Array(9);
for (var i = 1; i < 10; i++){
    images[i] = new Image();
    images[i].src ='images/' + i + '.jpg';
}

init();

function random_image(images) {
  var random = randomize(images);
  var randomItem = images[random].src;
  while(randomItem === document.getElementById("image").src){
    random = randomize(images)
  }
  document.getElementById("image").src = randomItem.toString();
}

function randomize(array){
  return Math.floor((Math.random() * (array.length)));
}

function init() {
  document.getElementById("switch-image").addEventListener("click", function(){
    random_image(images);
  });
  random_image(images);
}