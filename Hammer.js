class Hammer{
    constructor(x,y,width,height) {
        var options = {
            'density' : 2,
            'friction' : 1.0,
            'restitution' : 0.5,
            isStatic: false
        }        
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }

}