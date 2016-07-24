var p5 = require('p5');

function sketch(p) {
    var Walker = function() {
        this.x = p.width/2;
        this.y = p.height/2;
        this.display = function() {
            p.stroke(0);
            p.point(this.x, this.y);
        };

        var defaultDirections = ["right", "left", "up", "down"];
        this.step = function() {
            var directions = defaultDirections.concat((function() {
                var dx = Math.abs(p.mouseX - this.x);
                var dy = Math.abs(p.mouseY - this.y);
                if (dx > dy) {
                    if (p.mouseX > this.x) {
                        return ["right", "right", "right", "right"];
                    } else {
                        return ["left", "left", "left", "left"];
                    }
                } else {
                    if (p.mouseY > this.y) {
                        return ["down", "down", "down", "down"];
                    } else {
                        return ["up", "up", "up", "up"];
                    }
                }
            }()));
            console.log(directions);
            var d = directions[Math.floor(Math.random() * directions.length)];
            if (d === "right") {
                this.x++;
            } else if (d === "left") {
                this.x--;
            } else if (d === "down") {
                this.y++;
            } else { // up
                this.y--;
            }
        };
    };

    var w;
    p.setup = function() {
        p.background(255);
        w = new Walker();
    };

    p.draw = function() {
        w.step();
        w.display();
    }
}

var app = new p5(sketch);

