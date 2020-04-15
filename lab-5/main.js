var images = new Array(9);
for (var i = 0; i < 9; i++){
    images[i] = new Image();
    images[i].src ='images/' + (i+1) + '.jpg';
}
var mainImg = document.getElementById('image');

initialize();

function randomImage(images) {
  var random = randomize(images);
  
  while(randomItem === mainImg.src){
    random = randomize(images)
  }
  var randomItem = images[random].src;
  mainImg.src = randomItem.toString();
 
}

function randomize(array){
  return Math.floor((Math.random() * (array.length)));
}

function initialize() {
  document.getElementById("switch-image").addEventListener("click", function(){
    randomImage(images);
  });
  randomImage(images);
}

function imageSize() {
    var widthImage = document.getElementById("width").value;
    var heightImage = document.getElementById("height").value;
    var borderWidth = document.getElementById("border-width").value;
    var descriptionValue = document.getElementById("description-value").value;
    mainImg.style.width = widthImage+'px';
    mainImg.style.height = heightImage+'px';
    mainImg.style.borderWidth = borderWidth+'px';
    document.getElementById("description").innerHTML = descriptionValue;
}
document.getElementById("size").addEventListener("click", function(){
    imageSize();
});
}
