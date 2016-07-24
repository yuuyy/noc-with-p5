var p5 = require('p5');
var gaussian = require('gaussian');

function sketch(p) {
    var distribution;
    p.setup = function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        p.createCanvas(width, height);
        p.background(0);
        var sd = 100;
        xDistribution = new gaussian(width/2, sd*sd);
        yDistribution = new gaussian(height/2, sd*sd);
        colorDistribution = new gaussian(120, sd*sd);
    };

    p.draw = function() {
        var x = xDistribution.ppf(Math.random());
        var y = yDistribution.ppf(Math.random());
        var red = colorDistribution.ppf(Math.random());
        var green = colorDistribution.ppf(Math.random());
        var blue = colorDistribution.ppf(Math.random());

        p.noStroke();
        p.fill(red, green, blue, 10);
        p.ellipse(x, y, 15, 15);
    };
}

var app = new p5(sketch);
