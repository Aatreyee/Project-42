const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine;
var world;
var maxDrop=[];

var boyImg;
var drop=[];
var thunderImg;

function preload(){
   boyImg = loadImage("images/WalkingFrame/walking_1.png");
   thunderImg1 = loadImage("images/thunderbolt/1.png");
   thunderImg2 = loadImage("images/thunderbolt/2.png");
   thunderImg3 = loadImage("images/thunderbolt/3.png");
   thunderImg4 = loadImage("images/thunderbolt/4.png");
   
}

function setup(){
   createCanvas(480,700);

   engine = Engine.create();
   world = engine.world;
   
  
}

function draw(){
   background(0);  
   Engine.update(engine);

   if(frameCount%5===0){
    drop.push(new Drop(random(0,480),10));
  }

   for(var j=0;j<drop.length;j++){
    drop[j].display();
   }
   imageMode(CENTER);
   image(boyImg,240,600,200,200);

   if (frameCount % 100 === 0){
      var thunder = createSprite(240,10,60,60);
      var rand = Math.round(random(1,4));
      switch(rand){
        case 1:thunder.addImage( thunderImg1);
          break;
        case 2: thunder.addImage(thunderImg2);
          break;
        case 3:thunder.addImage(thunderImg3);
          break;
        case 4: thunder.addImage(thunderImg4);
          break;
       
        default: break;
      }

   drawSprites();

  }   
}
