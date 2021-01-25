const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas,engine,world,object;
function setup() 
{
  canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var options= { 'restitution': 1.0 }
  object=Bodies.rectangle(200,100,50,50,options);
  World.add(world,object);

  //console.log(object);

  var balloptions= { 'restitution': 1.0 }
  ballobject=Bodies.circle(200,200,20,balloptions);
  World.add(world,ballobject);
  
  var groundoptions= { isStatic: true }
  groundobject=Bodies.rectangle(200,390,200,20,groundoptions);
  World.add(world,groundobject);
  
}

function draw() 
{
  background("gold"); 
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //rect(200,200,50,50);
  rect(object.position.x,object.position.y,50,50);
  rect(groundobject.position.x,groundobject.position.y,400,20);
  ellipse(ballobject.position.x,ballobject.position.y,20,20);
}