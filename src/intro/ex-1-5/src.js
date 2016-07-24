var p5 = require('p5');
var gaussian = require('gaussian');

function sketch(p) {
    var Walker = function() {
        this.x = p.width/2;
        this.y = p.height/2;
        this.display = function() {
            p.stroke(0);
            p.point(this.x, this.y);
        };

        this.step = function(size) {
            var choice = Math.random() * 4;
            if (choice < 1) {
                this.x += size;
            } else if (choice < 2) {
                this.x -= size;
            } else if (choice < 3) {
                this.y += size;
            } else {
                this.y -= size;
            }
        };
    };

    var distribution;
    var w;
    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.background(255);
        distribution = new gaussian(1, 2)
        w = new Walker();
    };

    p.draw = function() {
        w.step(distribution.ppf(Math.random()));
        w.display();
    };
}

var app = new p5(sketch);
