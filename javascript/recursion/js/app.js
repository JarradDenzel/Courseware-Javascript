function revStr(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {        
        newString += str[i];  
    }
    return newString;
}
console.log(revStr('cat')); // tac
console.log(revStr('cat dog')); // god tac
println();
​
// https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
function recursiveRevStr(str){
    if (str == '') {
        return ''
    };
    return recursiveRevStr(str.substr(1)) + str[0];
}
console.log(recursiveRevStr('cat')); // tac
console.log(recursiveRevStr('cat dog')); // god tac
println();
​
function countdown(value) {
    for (let i = value; i >= 0; i--) {
        console.log(i);
    }
};
countdown(5);
println();
​
function recursiveCountdown(value) {
    if (value >= 0) {
        console.log(value);
        return recursiveCountdown(value - 1);
    } else {
        return value;
    }
};
recursiveCountdown(5);
println();
​
function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}
console.log( pow(2,3) ); // 8
println();
​
function recursivePow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * recursivePow(x, n - 1);
    }
}
​
console.log( recursivePow(2, 3) ); // 8
println();
​
var factorial = function(n) {
    var result = 1;
    if(n === 0) {
        return result; // 1
    }
    
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
​
    return result;
};
​
console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));
println();
​
var recursiveFactorial = function(n) {
	if (n == 0 || n == 1) {
	    return 1;
	}
	
	return n * recursiveFactorial(n - 1);
}; 
​
/*
var result = recursiveFactorial(3);
3 * recursiveFactorial(3 - 1) // 2
2 * recursiveFactorial(2 - 1) // 1
1 * recursiveFactorial(1 - 1) // 1
​
1 * 1
1 * 2
2 * 3
result == 6
*/
console.log("The value of 1! is " + recursiveFactorial(1) + ".");
console.log("The value of 0! is " + recursiveFactorial(0) + ".");
console.log("The value of 5! is " + recursiveFactorial(5) + ".");
console.log("The value of 6! is " + recursiveFactorial(6) + ".");
println();
​
// function sumRangeOfNumbers(startNum, endNum) {
//     let numbers = rangeOfNumbers(startNum, endNum);
//     return numbers.length/2 * (numbers[0] + numbers[numbers.length - 1]);
// }
​
// console.log(sumRangeOfNumbers(2,6));
​
function println(section = '--------') {
    console.log(`<---------${section}------------>`);
}
​
// freecodecamp
println('freecodecamp');
function sum(arr, n) {
    // Only change code below this line
      if (n <= 0) {
        return arr[0];
      } else {
        return sum(arr, n - 1) + arr[n];
      }
    // Only change code above this line
}
console.log(sum([2, 3, 4], 1));
// sum(arr, 1 - 1) + arr[1]; // 3
// arr[0] + arr[1] = 5
console.log(sum([1,2,3,4,5], [1,2,3,4,5].length - 1));
​
function rangeOfNumbers(startNum, endNum) {
    if (endNum === startNum) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1); 
      numbers.push(endNum);
      return numbers;
    }
};
console.log(rangeOfNumbers(1,5));
​
function countdown2(myArray, n){
    if (n > 0) {
        myArray.push(n);
        return countdown2(myArray, n - 1);
    } else {
        return myArray;
    }
}
let myArray = [];
console.log(countdown2(myArray, 5));

