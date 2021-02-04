class Box {

    constructor(x,y,w,h)
    {
        var op = {
            restitution :0.6
        }
        this.width = w;
        this.height = h;
        this.body = Matter.Bodies.rectangle(x,y,w,h,op);
        Matter.World.add(world,this.body);
    }

    display()
    {
        fill('blue')
        rectMode(CENTER);
        rect(this.body.position.x, 
            this.body.position.y, this.width, this.height);
    }

}