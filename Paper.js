class Paper{
    constructor(x,y,circle){
   
        var options ={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,

        }
        circle=Matter.Bodies.circle(x,y,radius,options, maxSides);
        this.x = x;
        this.y = y;
      
        World.add(world, this.body);
        
        
    }
    display(){

        this.body.position.x = mouseX;
        this.body.position.y= mouseY;
    }
}