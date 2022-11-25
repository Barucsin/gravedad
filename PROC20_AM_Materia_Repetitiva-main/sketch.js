
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var pared1;
var pared2;
var pared3;
var pared4;
var boton1;
var boton2;
var boton3;
var pelota2

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  pared1=new Piso(200,390,400,20);
  pared2=new Piso(390,200,20,400)
  pared3=new Piso(10,200,20,400)
  pared4=new Piso(200,10,400,20)
  pelota2=new pelota(100,100)
  boton1=createImg("flechaarriba.png")
  boton1.position(20,300);
  boton1.size(80,80);
  //boton1.mouseClicked(fuerzaV);
  boton2=createImg("leftarrow.png");
  boton2.position(90,300);
  boton2.size(80,80);
  //boton2.mouseClicked(fuerzaL);
  boton3=createImg("flechadiagonal.png")
  boton3.position(170,310)
  boton3.size(60,60);
  //boton3.mouseClicked(fuerzaD);

}

function draw() 
{
  background("red");
  Engine.update(engine);
  pared1.show();
  pared2.show();
  pared3.show();
  pared4.show();

  pelota2.show();
  text(mouseX + "-" + mouseY,mouseX,mouseY);
}

