var Cat = require('./cat');
var Mouse = require('./mouse');
function Dog(){
    this.color = 'white';
    this.stomatch = [];
}
Dog.prototype.eat = function(Cat,Mouse){
    this.stomatch.push(Cat,Mouse);
    Cat.die();
    Mouse.die();
}
var nulll = [1,2,3,4,5];
var tom = new Cat('blue');
var jerry = new Mouse('brown');
var fog = new Dog();
fog.eat(tom,jerry)
console.log(fog);
console.log(typeof(tom.stomatch));

