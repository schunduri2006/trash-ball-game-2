
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  box1 = new Box(600,650,180,20);
  box2 = new Box(520,560,20,200);
  box3 = new Box(680,560,20,200);
  bin1 = new BinImage(600,560,200,200);
  ground = new Ground(200,670,2000,20);
  paper1 = new Paper(40,640,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


ground.display();

box1.display();
box2.display();
box3.display();
paper1.display();
bin1.display();




 
  drawSprites();
}



function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:407,y:-407});
}
}