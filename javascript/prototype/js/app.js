// Prototype
// the prototype is a way of adding a method to a constructor function
// Constructor Notation
// 


// constructor parent function
function Vegetable(name){
    this.name = name; // properties
}

// prototype
Vegetable.prototype.getName = function getName() {
    console.log(this.name);
}

// instantiation of the prototype
var carrot = new Vegetable('carrot');
var bean = new Vegetable('bean');

// fire the method of the the prototype 
carrot.getName();
bean.getName();


// constructor function instantiation
var celery = new Vegetable('celery'); 
console.log(celery.name);



// class
class Vegetable2 {
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name)
    }
}



// Vegetable.prototype.getName = function getName