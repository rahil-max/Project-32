class blocks{
    constructor(x, y,color) {
        var options = {
            'restitution':0.8,
            friction:10,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50);
        this.color = color;
        this.visibility = 255;
        World.add(world, this.body);
      }

      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect( 0, 0, 50, 50);
        pop();
        }

        else {
          World.remove(world,this.body);
          push();
          this.visibility-=5;
          tint(255,this.visibility);
          pop();
        }
        
      }

      score(){
        if (this.visibility>=0 && this.visibility<255){
          score++;
        }

        if(score>500){
          score = 500;
        }
          
      }

}
