class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(x,y,width,height,options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.ground);
    }
    display(){
        var angle = this.ground.angle;
        push();
        translate(this.ground.position.x, this.ground.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
  };
