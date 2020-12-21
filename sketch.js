
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,dustbin,ground;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	paperObject= new Paper(20,20,);
	dustbin= new Dustbin(20,20,50,50);
	ground= new Ground(0,0,50,50);

	
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

 paperObject.display();
 dustbin.display();
 ground.display();
}



