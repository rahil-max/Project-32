class string{
    constructor(bodyA,pointB){
      var options = {
            bodyA:bodyA,
            pointB:pointB,  
            stiffness : 0.01,
            length : 100
    
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    display(){

        if(this.body.bodyA){

        var pos1 = this.body.bodyA.position;
        var pos2 = this.pointB;
        push();
        strokeWeight(3);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        pop();

    }
}

    
    fly() {
        this.body.bodyA = null;
    }
    
    attach(body){
      this.body.bodyA = body;
    }
    }
