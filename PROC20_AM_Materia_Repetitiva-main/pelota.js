class pelota {
    constructor(x,y){
        this.x= x,
        this.y= y,
        this.r= 25,
        this.body= Bodies.circle(this.x,this.y,this.r)
        World.add(world,this.body);
    }
    show(){
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    }
    fuerzaV(){
        Matter.Body.applyForce(this.body,{x:0,y:0},{x:0,y:-0.1});
      }
      
    fuerzaL(){
        Matter.Body.applyForce(this.body,{x:0,y:0},{x:-0.1,y:0});
      }
      
     fuerzaD(){
        Matter.Body.applyForce(this.body,{x:0,y:0},{x:0.1,y:-0.2})
      }
}