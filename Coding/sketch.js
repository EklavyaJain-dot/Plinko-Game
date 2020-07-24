var particles = [];
var plinkos = [];
var Divisions = [];

var divisionsHeight = 300;

function setup() {
  createCanvas(480,800);
}

function draw() {
  background("black");  
 
 for(var k = 0; k<= width;k = k+80){
   Divisions.push(new Divisions(k,height-divisionsHeight/2,18, divisionsHeight));
 }
 
 for(var j = 40; j<= width; j=j+50){
plinkos.push(new Plinko(j,75));
}

for(var j = 15; j<= width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
  }

  for(var j = 0; j< particles.length; j++){
   particles[j].display();
  }
    
  for(var k = 0; k< divisionsHeight.length;k++){
   divisions[k].display();
  }

if(frameCount%60 === 0){
  particles.push(new Particle(random(width/2 + 10),10,10));
}

  drawSprites();
}