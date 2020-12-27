var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1;
var rect2;
var rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800,624);

     engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	
	packageSprite = createSprite(width/2,80,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;
     
	helicopterSprite = createSprite(width/2,200,10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	leftRectangle = createSprite(290,540,20,100);
	leftRectangle.shapeColor = "red";

	rightRectangle = createSprite(510,540,20,100);
	rightRectangle.shapeColor = "red";

	bottomRectangle = createSprite(400,580,200,20);
	bottomRectangle.shapeColor = "red";

	groundSprite = createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor = "black";

	var packageBody_options = {
		restitution : 0.57,
		friction : 0,
		isStatic : true
	}

	leftRectangleBody = Bodies.circle(290,540,20,100);
	World.add(world,leftRectangleBody);

	rightRectangleBody = Bodies.circle(510,540,20,100);
	World.add(world,rightRectangleBody);

	bottomRectangleBody = Bodies.circle(400,580,200,20);
	World.add(world,bottomRectangleBody);

	packageBody = Bodies.circle(width/2,200,5,packageBody_options);
	World.add(world,packageBody);
	 	
	ground = Bodies.rectangle(width/2,555,width,10,{isStatic:true} );
	 World.add(world,ground);

}

function draw() {
  
  background("lightblue");

  Engine.update(engine);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  rectMode(CENTER);
  rect(width/2,180,5,5);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     
	Matter.Body.setStatic(packageBody,false);

 }
}