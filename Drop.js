class Drop
{
    constructor(x,y){
        var options={
            restitution:0.3
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,4,4);
        pop();
    }

}
