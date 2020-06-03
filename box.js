class Box {
    constructor(x, y, width, height) {
      var options = {
          //'restitution':0.8,
          //'friction':0.3,
          //'density':1.0
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle=this.body.angle;
      //push ();
      //translate(pos.x,pos.y);
      //angleMode(RADIANS)
      //rotate(angle);
      rectMode(CENTER);
      fill('red');
      rect(0,0, this.width, this.height);
      
    }
  }
  //box1 = new Box(200,300,50,50);
  //box2=new Box(240,100,50,100);