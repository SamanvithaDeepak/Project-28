class Launcher{
    constructor(body1,point){
        var options ={
            bodyA:body1,
            pointB:point,
            length:10,
            stiffness:0.04
        }

        this.launcher = Matter.Constraint.create(options)
        World.add(world,this.launcher);
    }

    display(){
     
        if(this.launcher.bodyA){
            var bodyA = this.launcher.bodyA.position;
            var pointB = this.launcher.pointB

        push()
        //strokeWeight(4);
        line(bodyA.x, bodyA.y,pointB.x,pointB.y);
        pop()
    }}

    fly(){
       (this.launcher.bodyA)=null
       
    }

    attach(body){
        this.launcher.bodyA = body;
    }

}
       
        