class Box{
    constructor(x, y,color) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'stiffness':0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 40;
        this.color = color;
        this.visibility = 255;
        
        World.add(world, this.body);
    }
      display(){

        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(1.5);
        stroke("black");
        fill(this.color);
        rectMode(CENTER);
        rect(0,0,30,40);
        pop();
        }
        else{
        push();
        World.remove(world,this.body);
        tint(255,this.visibility);
        this.visibility = this.visibility-5;
        //rect(this.body.position.x,this.body.position.y,30,40);
        pop();
        } 
      }

      score(){
        if(this.visibility<0 && this.visibility>-105){
          score = score+1;
        }
      }
} 