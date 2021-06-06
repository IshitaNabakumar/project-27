class Bob {
    constructor(x, y) {
      var options = {
           isStatic:false,
          restitution:1.2,
          friction:0.5,
          density:3
      }
      this.body = Bodies.circle(x, y,25, options);
    this.radius=25
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      
    fill("purple");
     
      ellipse(0, 0,this.radius,this.radius);
      pop();
    }
  };