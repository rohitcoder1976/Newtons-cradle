const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var link,link2,link3,link4;
var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4;
var rope1,rope2,rope3,rope4;
var bob;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}	

	roof = Bodies.rectangle(450,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options={
		isStatic:false,
	}

	//Creating the balls
	ball1=Bodies.circle(300,200,20,ball_options);
	World.add(world,ball1);
	
	ball2=Bodies.circle(320,200,20,ball_options);
	World.add(world,ball2);

	
	ball3=Bodies.circle(340,200,20,ball_options);
	World.add(world,ball3);

	ball4=Bodies.circle(360,200,20,ball_options);
	World.add(world,ball4);

	link=Constraint.create({
		pointA:{x:420,y:100},
		bodyB:ball1,
		length:100,
		stiffness:0.1
	})
	World.add(world,link);


	link2=Constraint.create({
		pointA:{x:450,y:100},
		bodyB:ball2,
		length:100,
		stiffness:0.1

	})
	World.add(world,link2);


	link3=Constraint.create({
		pointA:{x:480,y:100},
		bodyB:ball3,
		length:100,
		stiffness:0.1
	})
	World.add(world,link3);

	link4=Constraint.create({
		pointA:{x:510,y:100},
		bodyB:ball4,
		length:100,
		stiffness:0.1,
	})
	World.add(world,link4);

	//rope1=new rope(ball1.body,roof.body,20*2,0);
	
	//Creating the ropes

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  

  //show ropes here
	//rope1.display();

  
  //create ellipse shape for multiple bobs here
	ellipse(ball1.position.x,ball1.position.y,20);
	ellipse(ball2.position.x,ball2.position.y,20);
	ellipse(ball3.position.x,ball3.position.y,20);
	ellipse(ball4.position.x,ball4.position.y,20);

	line(link.pointA.x,link.pointA.y,ball1.position.x,ball1.position.y);
	line(link2.pointA.x,link2.pointA.y,ball2.position.x,ball2.position.y);
	line(link3.pointA.x,link3.pointA.y,ball3.position.x,ball3.position.y);
	line(link4.pointA.x,link4.pointA.y,ball4.position.x,ball4.position.y);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if (keyCode===DOWN_ARROW){
		Matter.Body.applyForce(ball1,{x:0,y:0},{x:+0.05,y:0});
	}

}

