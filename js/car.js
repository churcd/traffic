function Car(x, y, angle) {
    this.accel = 1.388;
    this.vel = 0;
    this.angle = angle;



    this.x = x;
    this.y = y;

    this.w = 1.75;
    this.h = 4.5;

    this.waypoints = [];
}

Car.prototype.render = function (ctx) {
    ctx.save();

    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);


    ctx.fillStyle = '#FF0';
    ctx.fillRect(-this.w / 2.0, -this.h / 2.0, this.w, this.h);
    ctx.fillStyle = '#F0F';
    ctx.fillRect(-this.w / 2.0, this.h / 4.0, this.w, this.h / 4.0);

    ctx.restore();
};