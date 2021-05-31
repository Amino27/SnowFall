 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

var engine,world;
var ice=[];

var backgroundImg;

var bg = "snow1.jpg";

function preload(){
  getBackgroundImage();

winter1=loadImage("snow1.jpg");
winter2=loadImage("snow2.jpg");
winter3=loadImage("snow3.jpg");
santaI = loadAnimation("sgif.png","sgift.png")
flakeI = loadImage("flake.png")
}
function setup() {
  var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

  engine = Engine.create();
    world = engine.world;
    
  santa =createSprite(100, 500, 20, 20);
  santa.addAnimation("walking",santaI)
  santa.scale = 0.9;

    for (var o = 10; o <=width ; o=o+400) 
  {
    ice.push(new Ice(o,40));
    
  }
    
}


function draw() {
  if(backgroundImg){
    background(backgroundImg)
}

  Engine.update(engine);
  if(keyDown("left_arrow")){
    santa.x= santa.x-2;
  }
  if(keyDown("right_arrow")){
    santa.x= santa.x+2;
  }
  for (var o = 0; o < ice.length; o++){
    ice[o].display();
   
  }
  if(frameCount % 20===0){
    ice.push(new Ice(random(100,900),10,10))
  
    }

   
  drawSprites();
}
async function getBackgroundImage(){

  // write code to fetch time from API
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

  //change the data in JSON format
  var responseJson = await response.json()
  console.log("Time",responseJson)

  // write code slice the datetime
  var datetime= responseJson.datetime
  var hour=datetime.slice(11,13);

  console.log(hour)

  // add conditions to change the background images from sunrise to sunset
  if(hour>=04&&hour<=06){
      bg = "snow1.jpg"
  }
  else if(hour>=06&&hour<=08){
      bg = "snow2.jpg"
  }
  else if(hour>=08&&hour<=00){
      bg = "snow3.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}