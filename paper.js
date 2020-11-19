class Paper{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
      
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}