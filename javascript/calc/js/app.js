// var keyC = document.getElementById('clear');
// keyC.addEventListener('blur', function(){
//   // clear the screen

// });

// var display = document.getElementById('screen');



// var key1 = document.getElementById('one');
// var key2 = document.getElementById('two');
// var key3 = document.getElementById('three');
// var key4 = document.getElementById('four');
// var key5 = document.getElementById('five');
// var key6 = document.getElementById('six');
// var key7 = document.getElementById('seven');
// var key8 = document.getElementById('eight');
// var key9 = document.getElementById('nine');
// var key0 = document.getElementById('zero');
// var keyMultiply = document.getElementById('multiply');
// var keyDivide = document.getElementById('divide');
// var keyAdd = document.getElementById('add');
// var keySubtract = document.getElementById('subtract');
// var keyPercent = document.getElementById('percent');
// var keyExponent = document.getElementById('exponent');
// var keyEqual = document.getElementById('equal');

// var keys = document.querySelectorAll('input');
// keys.addEventListener('keyup', function(){
//     event.preventDefault();
//     console.log('key');
//     display.innerText = keys.values;
// })

// (function() {
//  // When: Number is clicked. Get the current number selected
//  var setNum = function() {
//   if (resultNum) { // If a result was displayed, reset number
//     theNum = this.getAttribute("data-num");
//     resultNum = "";
//   } else { // Otherwise, add digit to previous number (this is a string!)
//     theNum += this.getAttribute("data-num");
//   }

//   viewer.innerHTML = theNum; // Display current number

// };

// // When: Operator is clicked. Pass number to oldNum and save operator
// var moveNum = function() {
//   oldNum = theNum;
//   theNum = "";
//   operator = this.getAttribute("data-ops");

//   equals.setAttribute("data-result", ""); // Reset result in attr
// };

// // When: Equals is clicked. Calculate result
// var displayNum = function() {

//   // Convert string input to numbers
//   oldNum = parseFloat(oldNum);
//   theNum = parseFloat(theNum);

//   // Perform operation
//   switch (operator) {
//     case "plus":
//       resultNum = oldNum + theNum;
//       break;

//     case "minus":
//       resultNum = oldNum - theNum;
//       break;

//     case "times":
//       resultNum = oldNum * theNum;
//       break;

//     case "divided by":
//       resultNum = oldNum / theNum;
//       break;

//       // If equal is pressed without an operator, keep number and continue
//     default:
//       resultNum = theNum;
//   }

//   // If NaN or Infinity returned
//   if (!isFinite(resultNum)) {
//     if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
//       resultNum = "You broke it!";
//     } else { // If result is infinity, set off by dividing by zero
//       resultNum = "Look at what you've done";
//       el('#calculator').classList.add("broken"); // Break calculator
//       el('#reset').classList.add("show"); // And show reset button
//     }
//   }

//   // Display result, finally!
//   viewer.innerHTML = resultNum;
//   equals.setAttribute("data-result", resultNum);

//   // Now reset oldNum & keep result
//   oldNum = 0;
//   theNum = resultNum;

// };

// // When: Clear button is pressed. Clear everything
// var clearAll = function() {
//   // Shortcut to get elements
//   var el = function(element) {
//     if (element.charAt(0) === "#") { // If passed an ID...
//       return document.querySelector(element); // ... returns single element
//     }

//     return document.querySelectorAll(element); // Otherwise, returns a nodelist
//   };

//   // Variables
//   var viewer = el("#viewer"), // Calculator screen where result is displayed
//     equals = el("#equals"), // Equal button
//     nums = el(".num"), // List of numbers
//     ops = el(".ops"), // List of operators
//     theNum = "", // Current number
//     oldNum = "", // First number
//     resultNum, // Result
//     operator; // Batman

//   oldNum = "";
//   theNum = "";
//   viewer.innerHTML = "0";
//   equals.setAttribute("data-result", resultNum);
// };


// // Add click event to numbers
// for (var i = 0, l = nums.length; i < l; i++) {
//   nums[i].onclick = setNum;
// }

// // Add click event to operators
// for (var i = 0, l = ops.length; i < l; i++) {
//   ops[i].onclick = moveNum;
// }

// // Add click event to equal sign
// equals.onclick = displayNum;

// // Add click event to clear button
// el("#clear").onclick = clearAll;

// }

// ());




function displayStrokes() {
    event.preventDefault();

    let screen = document.getElementById('viewer');
    screen.textContent = this.value;    
}

let key1 = document.getElementById('1');
key1.addEventListener('click', displayStrokes, false);

// key1.onclick = displayStrokes;

// keys.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('hello1');
// });
