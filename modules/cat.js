var Mouse = require('./mouse');

function Cat(color){
    this.color = color;
    this.stomatch = [];
    this.dead = false;
}

Cat.prototype.die = function() {
    this.dead = true;
}
Cat.prototype.eat = function(Mouse) {
    this.stomatch.push(Mouse); 
};
module.exports = Cat;
