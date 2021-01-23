//Create variables here
var dog,happyDog,eatingDog;
var database;
var foodS,foodStoke;

function preload()
{
  eatingDog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup()
{
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,300,20,20);
  dog.addImage(eatingDog);
  dog.scale=0.2;

  foodStoke=database.ref('Food');
  foodStoke.on("value",readStoke);
  
}


function draw() 
{  
  background(46,139,87)

  if(keyWentDown(UP_ARROW))
  {
    writeStoke(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  fill("white");
  stroke("black");
  text("foodStoke : "+foodS,50,150);
  textSize(50);
}

function readStoke(data)
{
  foodS=data.val();
}

function writeStoke(x)
{

  if(x<=0)
  {
    x=0;
  }else
  {
    x=x-1
  }
  database.ref('/').update({
    Food : x
  })
}



