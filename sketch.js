const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundObject,dustbinObject;
var world;
var paperObject,groundObject,dustbinObject;
var binImage;

function preload(){
	binImage = loadImage("dustbingreen.png")
}

function setup(){
	createCanvas(1600, 700);
	rectMode(CENTER);

	
	engine = Engine.create();
	world = engine.world;

   
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new Paper(200,450,70);

	Engine.run(engine);
}

function draw(){
	rectMode(CENTER);
  background(230);
  imageMode(CENTER);
  image(binImage,1200,570,160,144);
  drawSprites();

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}