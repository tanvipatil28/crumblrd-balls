var ground,paper,dustbin1,dustbin2,dustbin3;
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

	var paper_options={
        restitution: 1
    }
ground=new Ground(400,680,800,10);
	
	dustbin1=new Dustbin (500,600,10,100)

	dustbin2=new Dustbin(300,600,10,100);

	dustbin3=new Dustbin(400,656,201,10);

	
	//Create the Bodies Here.
	paper=new Paper(400,200,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
paper.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.appilForce(paper.body,paper.body.postion,{x:85,y:-85})
	}
}


