
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,680,1300,20);
  
  dustbin1= new Dustbin(850,660,230,20);
  dustbin2= new Ground(970,605,20,130);
  dustbin3= new Ground(740,605,20,130);

  paper= new Paper(100,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper.display()
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}

