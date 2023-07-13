class Boat{
    constructor(x, y, width, height, boatPos, boatAnimation){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1,
        };

        this.animation = boatAnimation;
        this.speed = 0.05;

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.boatPosition = boatPos;
        this.image = loadImage("assets/boat.png");
        World.add(world, this.body);
    }

    animate() {
        this.speed += 0.05 % 1.1;
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        var index = floor(this.speed % this.animation.length);

        push();  
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], this.boatPosition, 0, this.width, this.height);
        noTint();
        pop();
    }
}