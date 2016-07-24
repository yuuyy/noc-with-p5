var p5 = require('p5');

function sketch(p) {
    var Walker = function() {
        this.x = p.width/2;
        this.y = p.height/2;
        this.display = function() {
            p.stroke(0);
            p.point(this.x, this.y);
        };

        this.step = function() {
            var choice = Math.random() * 4;
            if (choice < 1.2) {
                this.x++;
            } else if (choice < 2) {
                this.x--;
            } else if (choice < 3.2) {
                this.y++;
            } else {
                this.y--;
            }
        };
    };

    var w;
    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.background(255);
        w = new Walker();
    };

    p.draw = function() {
        w.step();
        w.display();
    }
}

var app = new p5(sketch);
