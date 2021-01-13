
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,base1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

var score = 0;

function preload()
{
    polygonImage = loadImage("polygon.png")
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  base1 = new Stand(390,300,250,6);
 
  //level one
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //top
  block16 = new Box(390,155,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world, ball);

    slingshot = new SlingShot (this.ball,{x:100,y:200});
}

function draw ()
{
    background("pink")

    textSize(20);
    text("Score : " +score, 750,100);

    textSize(10);
    text("Press Space to get a second Chance to Play!!",650 ,350);

    ground.display();
    base1.display();

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block1.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    
    imageMode(CENTER)
    image(polygonImage,ball.position.x,ball.position.y,40,40)

    slingshot.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed()
  {
    if(keyCode === 32)
    {
      slingshot.attach(this.ball);
    }
  }
  