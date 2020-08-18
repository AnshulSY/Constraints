class Chain{
    constructor(bodyA, bodyB) {
        var options = {
            length: 1,
            stiffness: 2,
            bodyA: bodyA,
            bodyB: bodyB
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    display() {
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}