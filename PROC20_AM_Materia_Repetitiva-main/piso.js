class Piso{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var opciones={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,opciones);
        World.add(world,this.body);
        }
    show(){
        var pos=this.body.position;
        push();
        fill("Blue")
        rectMode(CENTER);
        stroke(255);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
    }
