const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;
var slingShot;
var polygon,polyImg;
var score = 0;

function preload(){

  polyImg = loadImage("hexagon.png");

}

function setup() {
  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,100,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200}); 
  
  ground = new Ground(500,480,1000,20);

  stand1 = new Ground(410,380,280,10);
  stand2 = new Ground(720,200,220,10);

  box1 = new Box(340,360,"#CC395F");
  box2 = new Box(360,360,"#CC395F");
  box3 = new Box(380,360,"#CC395F"); 
  box4 = new Box(400,360,"#CC395F");
  box5 = new Box(420,360,"#CC395F");
  box6 = new Box(440,360,"#CC395F");
  box7 = new Box(460,360,"#CC395F");
 
  box8 = new Box(360,340,"#91CEE0");
  box9 = new Box(380,340,"#91CEE0");
  box10 = new Box(400,340,"#91CEE0");
  box11 = new Box(420,340,"#91CEE0");
  box12 = new Box(440,340,"#91CEE0");

  box13 = new Box(380,320,"#108189");
  box14 = new Box(400,320,"#108189");
  box15 = new Box(420,320,"#108189");

  box16 = new Box(400,300,"#AC7A2B");

  box17 = new Box(640,170,"#CC395F");
  box18 = new Box(670,170,"#CC395F");
  box19 = new Box(700,170,"#CC395F");
  box20 = new Box(730,170,"#CC395F");
  box21 = new Box(760,170,"#CC395F");

  box22 = new Box(670,140,"#91CEE0");
  box23 = new Box(700,140,"#91CEE0");
  box24 = new Box(730,140,"#91CEE0");

  box25 = new Box(700,110,"#108189");
}

function draw() {
  
  Engine.update(engine);

  ground.display();

  stand1.display();
  stand2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  
  box22.display();
  box23.display();
  box24.display();

  box25.display();

  imageMode(CENTER);
  image(polyImg,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

  textSize(35);
  fill("white");
  text("Score:"+score,width-300,40);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();

  box13.score();
  box14.score();
  box15.score();

  box16.score();

  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  
  box22.score();
  box23.score();
  box24.score();

  box25.score();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x:mouseX , y:mouseY});
  
}

function mouseReleased(){
  slingShot.Fly();
  
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  
  var hour = responseJson.datetime.slice(11,13);
  
  if(hour>=6 && hour<=19){
    background("#2D232B");
  }
  else{
      background("white");
  }
 
  
}