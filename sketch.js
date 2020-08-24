

//Create variables here
var happyDog, dog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite("dogImg.png")
  
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  textSize(20);
  fill("lightyellow");
  text("Press the Up Arrow to Feed your Pet Dog!",100,30);


}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0) {
    x = 0;
  }else{
    x = x-1;
  }
  databse.ref('/').update({
    Food:x
  })
}



