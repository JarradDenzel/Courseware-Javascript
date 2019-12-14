

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

 //on-click, create an object 'cart'
    //such that it adds the item that you picked
    //compute the subtotal and the total quantity
    // items: water, salt, sugar, coffee

 
// Step 1: Every Click, add an itemInfoArray to an array of pickedItems

// Step 2: Every Checkout, 



var cart = [];


var count = 0;
var listNum = 0;

// FUNCTION #1
// f(x) = addToCart --> creates item object, adds to array, then counts the addition event
function addToCart(name, price, quantity){ 
    var itemCount = 0;
    cart.forEach(cartItem => {
        if (cartItem.name == name){
            cartItem.quantity += 1;
            itemCount = cartItem.quantity;
        };
        console.log(itemCount)
    })
    cart.push({                                                 
    name,
    price,                                                  
    quantity
    })    
    count++;
    return itemCount, quantity, count;
}




// function addEffect(quantity, count){
//     var listNum = quantity;
//     console.log(listNum);
// }
 

// FUNCTION #2
// f(x) = checkout --> creates line item of each item, calculates subtotal, presents computation
// I need a way to get the last itemObject b/c it has all the info I need
// Maybe, for each line item in the reciept, I could:
//  1. map / reduce => map miniList of each item from the CartList > count each list
//  2. sort/filter => find item with the highest quantity > 
// function checkout(cart){
//    cart.forEach(element => {
//     function getYs(){
//         return cart.map(d => d.y);
//       }
//    });
// }








//  var addItem = new addToCart('water', 1.00, 1);
//  var addItem = new addToCart('salt', 2.00, 1);
//  var addItem = new addToCart('sugar', 3.00, 1);
//  var addItem = new addToCart('sugar', 3.00, 1);
//  var addItem = new addToCart('sugar', 3.00, 1);
//  var addItem = new addToCart('sugar', 3.00, 1);
//  var addItem = new addToCart('water', 1.00, 1);
//  var addItem = new addToCart('salt', 2.00, 1);
 var addItem = new addToCart('sugar', 3.00, 1);
 var addItem = new addToCart('sugar', 3.00, 1);
 var addItem = new addToCart('sugar', 3.00, 1);
 var addItem = new addToCart('sugar', 3.00, 1);
 var addItem = new addToCart('sugar', 3.00, 1);

 console.log(cart);
 console.log(count);
 console.log(cart);

 
