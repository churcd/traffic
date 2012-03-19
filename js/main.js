window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (callback) {
                  window.setTimeout(callback, 1000 / 60);
              };
})();

function start() {
    var canvas = document.getElementById('display');
    var ctx = canvas.getContext('2d');

    var sm = new SpaceManager();
    var r1 = new Road(sm, 0, 100, 100, 3.7 * 2);
    var r2 = new Road(sm, 100, 0, 3.7 * 2, 200);
    var r3 = new Road(sm, 100 + 3.7 * 2, 100, 100, 3.7 * 2);

    var roads = [];
    roads.push(r1);
    roads.push(r2);
    roads.push(r3);

    var cars = [];
    cars.push(new Car(10, 100 + 3.7 + 3.7 / 2.0, -Math.PI / 2));

    var step = 0;

    setInterval(function () {
        //UPDATE
        step++;


        //RENDER
        ctx.fillStyle = '#0A0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.save();

        ctx.scale(2.4, 2.4);

        for (var i in roads)
            roads[i].render(ctx);

        for (var i in cars)
            cars[i].render(ctx);

        ctx.restore();
    }, 1000 / 30);
}