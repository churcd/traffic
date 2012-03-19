function Road(spaceMan, x, y, w, h, divide) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.divide = divide;

    spaceMan.addRoad(this);
};


Road.prototype.render = function (ctx) {
    ctx.fillStyle = '#AAA';
    ctx.strokeStyle = '#CCC';

    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
};