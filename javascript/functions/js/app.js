console.log('true');
// In JS, we should consider "function" to take the broader meaning of "procedure": a collection of statements that can be invoked one or more times, may be provided some inputs, and may give back one or more outputs.

// function = procedure ... collection of things to do 

// function name(first, last) {
//     console.log(first, last);
    
// }

// name('Jarrad', 'Washington');

// function name(first, last) {
//     last = last ? last : 'Washington'; // ternary operator
//     console.log(first, last);
    
// }

// if(last) { last } else { 'Mullican' }; // ternary conversion
// var foo = true ? 'this is true' : 'this is false';

// name('Jarrad');

// function name(first = 'Jarrad', last = 'Washington') {    
    //default value of args
//     console.log(first, last);
// }
// name('Jarrad');


// function timeRemaining(timeElapsed, endTime) {
//         return endTime - timeElapsed;
// }

// var left = timeRemaining(42,240);

// console.log(left); // 198

// function sum(num1, num2) {
//     return num1 + num2;
// }

// var added = sum(1,2); // 3
// added += 3;
// console.log(`added == ${added}`);

// var num = 3; // Global

// function multiplyByNum(num1, num2) {
//     return num1 * num2;
// }

// var result = multiplyByNum(5,num);
// console.log(result);

// var divide = function divideByNumber(num1, num2){
//     return num1 / num2;
// }

// var result2 = divide(10,5);
// console.log(result2);

// var hotel = {
//     rooms: 40,
//     booked: 2,
//     checkAvailability: function(){
//         return this.rooms - this.booked;
//     }
// };

// function hotel(name, rooms, booked){
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.checkAvailability = function(){
//         return this.rooms - this.booked;
//     };
// }

// var jHotel = new hotel('J', 42, 10);
// jHotel.booked += 1; 
// console.log(jHotel.checkAvailability());

function calc(num1, num2, type = 'add') {
    switch (type) {
        case 'add': 
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default: 
            break;
    }
    return result;
}


console.log(calc(3,1));



// function declarations are hoisted
// function declarations are evaluated first, so order matters less
// function expressions are not hoisted, so order matters
// functin expressions are evaluated where it is in the code




// function expressions = are assigned values, "first-class value"

// var clickHandler = function(){ 
//     //...anonymous function expressions
// }

// var keyHandler  = function keyHandler(){
//     //...named function expression
// }



// IIFE (immediately invoked function expression) => pattern to encapsulate. collect and protect variables from encroaching upon the outer scope

// ( function another(){
//     //...
// })();



// generator function declaration
// function *two() { .. }


// async function declaration
// async function three() { .. }


// async generator function declaration
// async function *four() { .. }


// named function export declaration (ES6 modules)
// export function five() { .. }


// Functions can also be specified in class definitions and object literal definitions. They're typically referred to as "methods" when in these forms, though in JS this term doesn't have much observable difference over "function".

// class SomethingKindaGreat {
//     // class methods
//     coolMethod() { .. }   // no commas!
//     boringMethod() { .. }
// }
	
// var EntirelyDifferent = {
//     // object methods
//     coolMethod() { .. },   // commas!
//     boringMethod() { .. },

//     // (anonymous) function expression property
//     oldSchool: function() { .. }
// };




var coins = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0
};

var total = 0;
var val = 0;
var roll = 0;
var left = 0;

// for (var i = 0; i < challengeData.length; i++) {
//     if (challengeData[i] === "penny") {
//         coins.pennies += 1;
//     } else if (challengeData[i] === "nickel") {
//         coins.nickels += 1;
//     } else if (challengeData[i] === "dime") {
//         coins.dimes += 1;
//     } else if (challengeData[i] === "quarter") {
//        coins.quarters += 1;
//     };
// }
// for (var x in coins) {
//     if (coins[x] === coins["pennies"]) {
//         total = coins["pennies"];
//         val = total / 100;
//         roll = total / 50;
//         left = total % 50;
//         console.log("You have " + total + " total Pennies, worth " + val + " USD; tha$
//         // console.log('After you roll all of them, you have ' + Math.floor(roll) + '$
//     };
//     if (coins[x] === coins["nickels"]) {
//         total = coins["nickels"];
//         val = total / 20;
//         roll = total / 40;
//         left = total % 40;
//         console.log('You have ' + total + ' total Nickels, worth ' + val + ' USD. ');
//         console.log('After you roll all of them, you have ' + Math.floor(roll) + ' ro$
//     };
//     if (coins[x] === coins["dimes"]) {
//         total = coins["dimes"];
//         val = total / 10;
//         roll = total / 50;
//         left = total % 50;
//         console.log('You have ' + total + ' total Dimes, worth ' + val + ' USD. ');
//         console.log('After you roll all of them, you have ' + Math.floor(roll) + ' ro$
//     };
//     if (coins[x] === coins["quarters"]) {
//         total = coins["quarters"];
//         val = total / 4;
//         roll = total / 40;
//         left = total % 40;
//         console.log('You have ' + total + ' total Quarters, worth ' + val + ' USD. ');
//         console.log('After you roll all of them, you have ' + Math.floor(roll) + ' ro$
//     };
// }


function roller(pennies,nickels,dimes,quarters){
    let coins = {
        pennies: 0,
        nickels: 0,
        dimes: 0,
        quarters: 0
    }
    coins.pennies = pennies;
    coins.nickels = nickels;
    coins.dimes = dimes;
    coins.quarters = quarters;

    let pennyVal = coins.pennies / 100;
    let nickelVal = coins.nickels / 20;
    let dimeVal = coins.dimes / 10;
    let quarterVal = coins.quarters / 4;

    let subTotal = pennyVal + nickelVal + dimeVal + quarterVal;

    console.log(subTotal);

}

roller(100,200,300,4);

itemsPurch
cart {

//the cart is your object
//how do you build your object
//clicks build you object
// then the object is processed 
// 'on-click' is the event handler
// add-to-cart is the function that builds the cart object 
// iterate quantity, items, and tot
// the end point is when your cart is ready to checkout
// checkout is the last 'on-click' button
// checkout consist of doing the math of total, taxes, sum n shit
// checkout outputs the list, total to the the screen





}
itemtot
cartItems
quantity

function addToCart(item, price){
    car['item' + itemTotal] 
    ... 
    
}

function checkOut {
    cartCount.innerText('')

var list ='';
for (var item in cart){
    var itemArrray = avrt[item];
    list += `<li>${itemArray[0]} ------ `
}

    output.innerHTML = `
    <ul> 
        ${list}
        <li class="li-b">Subtotal: ${subtotal.toFixed(2)}</li>
    `
}
