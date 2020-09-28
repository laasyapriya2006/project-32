class SlingShot{
    constructor(bodyAobj, pointBobj){
        var options = {
            bodyA: bodyAobj,
            pointB: pointBobj,
            stiffness: 0.04,
            length: 5,
            restitution: 0,
        }
        this.pointB = pointBobj;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    Fly(){
        this.chain.bodyA = null; 
    }

    display(){
       if(this.chain.bodyA != null){
        var pointA = this.chain.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }

    attach(polygonBody){
        this.chain.bodyA = polygonBody;

    }
    
}