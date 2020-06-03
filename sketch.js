var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftsprite,boxleft;
var rightsprite,boxright;
var bottomsprite,boxbottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	 leftsprite=createSprite(312,612,25,92);
	 leftsprite.shapeColor=('red')
	 rightsprite=createSprite(512,612,25,92);
	 rightsprite.shapeColor=('red');
	 bottomsprite=createSprite(415,647,213,25);
	 bottomsprite.shapeColor=('red');
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	 
	
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxleft=Bodies.rectangle(312,612,25,92,isStatic=true)
	 World.add(world,boxleft);
	 
	 boxright=Bodies.rectangle(512,612,25,92,isStatic=true);
	 World.add(world,boxright);

	 boxbottom=Bodies.rectangle(415,647,213,25);
	 World.add(world,boxbottom);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //boxleft.display();
  drawSprites();
 
}

function keyPressed() {
	
		if (keyCode === LEFT_ARROW) {
	  
		  helicopterSprite.x=helicopterSprite.x-20;    
		  translation={x:-20,y:0}
		  Matter.Body.translate(packageBody, translation)
	  
	  
		} else if (keyCode === RIGHT_ARROW) {
		  helicopterSprite.x=helicopterSprite.x+20;
		  translation={x:20,y:0}
		  Matter.Body.translate(packageBody, translation)
		}
		else if (keyCode === DOWN_ARROW) {
		  Matter.Body.setStatic(packageBody,false);
}
}






