const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 
const Render = Matter.Render 
var paperObject; 
var ground; 
var bin1, bin2, bin3; 
function preload() { 

} 
function setup() { 
	createCanvas(1600, 700); 
	engine = Engine.create(); 
	world = engine.world; 
	//Create the Bodies Here. 
	ground = new Ground(width/2,670,width,20); 
	paperObject = new Paper(100,450, 40); 
	//bin1 = new Bin(900,350,20, 100); 
	//bin2 = new Bin(680, 350, 20, 100 ); 
	//bin3 = new Bin(790, 350, 220, 20); 
	bin1 = new dustbin(1400,650); 
	var render = Render.create({ element: document.body, engine: engine, options: 
		{ width: 1200, height: 700, wireframes: false } }); 
	Engine.run(engine); 
  } 
  function draw() { 
	  rectMode(CENTER); 
	  background(0); 
	  Engine.update(engine); 
	  paperObject.display();
	   ground.display(); 
	   bin1.display(); 
	   //bin2.display(); 
	   //bin3.display(); 
	   // keyPressed(); 
	   drawSprites();

   } function keyPressed(){ 
	   if(keyCode === UP_ARROW)
	   { Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:125,y:-85}) 
	} 
}