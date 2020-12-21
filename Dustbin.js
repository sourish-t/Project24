class Dustbin{
    constructor(x,y,width,height){

    var options={
        'isStatic':true,
        'restitution':0,
        'friction':1,
        'density':2
    }
    this.body = Bodies.circle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
}
display(){

    this.body.position.x = mouseX;
    this.body.position.y= mouseY;
}
}




    


