//Create variables here
var dog, dogI, dogIH;
var foodStock;
var database;
function preload()
{
  //load images here
  dogI = loadImage("dogImg.png")
  dogIH = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database();
  
  dog = createSprite(250,250,50,50)
  dog.addImage(dogI)
  dog.scale=0.25

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here

}



