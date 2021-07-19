class Paper {
    constructor(x,y,radius) {
      var options = {
          restitution:0.9,
          friction:0.2,
          density:0.4
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = radius;
      this.height = radius;
      this.Image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill(255);
      image(this.Image,pos.x, pos.y);
    }
  };
      