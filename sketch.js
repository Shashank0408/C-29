const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  polygon_1 = new polygon(110, 100, 20, 20);
  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });
  //level one
  blockA1 = new Block(300,275,30,40);
  console.log(blockA1);
  blockA2 = new Block(330,275,30,40);
  blockA3 = new Block(360,275,30,40);
  blockA4 = new Block(390,275,30,40);
  blockA5 = new Block(420,275,30,40);
  blockA6 = new Block(450,275,30,40);
  blockA7 = new Block(480,275,30,40);
  //level two
  blockA8 = new Block(330,235,30,40);
  blockA9 = new Block(360,235,30,40);
  blockA10 = new Block(390,235,30,40);
  blockA11 = new Block(420,235,30,40);
  blockA12 = new Block(450,235,30,40);
  //level three
  blockA13 = new Block(360,195,30,40);
  blockA14 = new Block(390,195,30,40);
  blockA15 = new Block(420,195,30,40);
  //top
  blockA16 = new Block(390,155,30,40);

// for second stand

//level 1
blockB1 = new Block(640,175,30,40);
blockB2 = new Block(670,175,30,40);
blockB3 = new Block(700,175,30,40);
blockB4 = new Block(730,175,30,40);
blockB5 = new Block(760,175,30,40);
//level 2
blockB6 = new Block(670,135,30,40);
blockB7 = new Block(700,135,30,40);
blockB8 = new Block(730,135,30,40);
//top
blockB9 = new Block(700,95,30,40);
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  polygon_1.display();
  sling.display();
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  blockA1.display();
  blockA2.display();
  blockA3.display();
  blockA4.display();
  blockA5.display();
  blockA6.display();
  blockA7.display();
  fill("pink");
  blockA8.display();
  blockA9.display();
  blockA10.display();
  blockA11.display();
  blockA12.display();
  fill("turquoise");
  blockA13.display();
  blockA14.display();
  blockA15.display();
  fill("grey");
  blockA16.display();
  fill("skyblue")
  blockB1.display();
  blockB2.display();
  blockB3.display();
  blockB4.display();
  blockB5.display();
  fill("turquoise");
  blockB6.display();
  blockB7.display();
  blockB8.display();
  fill("pink")
  blockB9.display();
}
function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}