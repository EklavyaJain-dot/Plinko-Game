class Particles{
constructor(x,y,width,height){
    var options = {
        restitutions: 0.4
    }

    this,r = r;
    this.body = Bodies.circle(x,y,this.r,options);
    this.color = color(random(0,255), random(0,255), random(0,255))
    World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    var angle = this.body.position;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
   ellipseMode(RADIUS);
    noStroke();
    fill(this.color);
    ellipse(0,0,this.r,this.r);
    pop();
}


}