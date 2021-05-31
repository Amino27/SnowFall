class Ice{
    constructor(x,y){
    var options ={
        restitution: 0.3
      
      
    }

    
     this.r = 80;
     this.body = Bodies.circle(x,y,80,options)
     this.image= loadImage("flake.png")
     this.image.scale = 2;
     World.add(world,this.body)
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle)
        noStroke();
        image(this.image,0,0,this.r,this.r)
        ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        pop();
    }

}