//Create variables here

 var dog , dogImage , dogImage1 ;
 var database , foods , foodsStock ;


function preload()
{
	//load images here

  dogImage = loadImage ("images/dogImg.png");
  dogImage1 = loadImage ("images/dogImg1.png");
}

function setup() {

  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale = 0.15;

 foodsStock=database.ref('food') ;
 foodsStock.on("value",readStock);
 textSize(20);

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foods);
dog.addImage(dogImage1);
}

  drawSprites();
  //add styles here
fill(255,255,255);
stroke("black");
text("food Remaining : "+ foods,170,200);
textSize (13);
text ("note : PRESS UP ARROW KEY TO FEED DRAGO MILK ",130,10,300,20);

}

function readStock (data) {
  foods= data. val();
}

function writeStock (x) {
  if(x <= 0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}

