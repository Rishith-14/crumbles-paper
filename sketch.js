
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper1=new Paper(100,100,50)
	
    
}


function draw() {
 // rectMode(CENTER);
  background(0);
 Engine.update(engine) 
 paper1.display()
  drawSprites();
 
}



