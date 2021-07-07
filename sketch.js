const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint

var engine,world, canvas;
var bull, horse, player, leaf;
var gameState = "intro";
var bg, bbutton, sbutton, button;

function preload(){
  playerimg = loadImage("images/topdown.png")
  bgimg = loadImage("images/bg.png")
  startScreen = loadImage("images/play screen.png")
}
function setup(){
  canvas = createCanvas(displayWidth, displayHeight)
  engine = Engine.create()
  world = engine.world
  player = createSprite(560, 850)
  startImg = new Intro()
  bbutton = createSprite(80, 50, 50, 20)
  sbutton = createSprite(displayWidth/2 - 10, displayHeight/2 - 5);
  button = createSprite(580, 600, 30, 30);


}
function draw(){
  background("brown")
  Engine.update(engine)
  if(gameState === "intro"){
    image(startScreen, startImg.xpos, startImg.ypos, startImg.width, startImg.height);
    player.visible = false;
    
    if (mousePressedOver(button)){
      gameState = "play"
    }
    
    if(mousePressedOver(sbutton)){
      gameState = "Story"
    }

  }
  if(gameState === "Story"){
    background("yellow")
    fill("white")
    text("Text");


    
    if (mousePressedOver(bbutton)){
      gameState = "intro"
      sbutton.visible = false;
    }
  }
  
  if(gameState === "play"){

    background("black");
    sbutton.visible = false;
    bbutton.visible = false;
    button.visible = false;
    bg = createSprite(displayWidth/2, 0, displayWidth * 2, displayHeight);
    bg.addImage("background",bgimg);
    bg.velocityY = 10;
    bg.scale = 2
    //infinity bg
    if (bg.y > displayHeight) {
      bg.y = bg.displayHeight/2 - 200
    }

  }

  drawSprites()
}
