

console.log("Hello World");

// 3 ways to declare a variable
// let & var are mutable, they can be changed
// const is immutable, it cannot be changed

let bar2 = 'hola';
let bar3 = 1;

const bar4 = 'mundo';
const bar5 = 6;

let foo; // value is undefined

console.log(foo);

var bar = 'hello'; // data type = string 
var boo = "World!"; // data type = string

console.log("message: ", bar, boo);


let foo2 = 1; // data type = int
let foo3 = []; // data type = array literal
let foo4 = {}; // data type = object literal
let foo5 = true; // data type = boolean (true/false)

let baz = 'Hello y\'all'; // escaping the character
let baz1 = "Hello y'all"; // wrap with opposite quote
let baz2 = 'Hello y"all'; // wrap with opposite quote
let baz3 = "Helly \"you guys\""; // escaping the character

console.log("Escaping the character: ", baz);
console.log("Wrap with the opposite quote: ",baz1);
console.log("Wrap with the opposite quote: ",baz2);

// page 67
let baz4 = 'foo';

let baz5, baz6, baz7;
baz5 = 'bar';
baz6 = 'foo';
baz7 = 'baz';

console.log(baz6);

let baz9 = 9, baz10 = 10;

let baz8 = baz5 + baz6;

let i = 2;
i++;
let yo = i;
console.log(yo);


// start

// SET INT paychecksPerYear = 26
// SET INT hrsPERPaychck = 5
// SET INT PTOperYearInHours =hoursPerCheck * paychecksPerYear
// SEt INT PTOperYearInWeeks = PTOperYearInHours/40
// Display
// ljlk


let paydays = 26;
let PTOusedInHours = 5;
let PTOusedInWeeks = PTOusedInHours / 40;
let PTOusedInDays = PTOusedInWeeks / 5;


let paychecksPerYear = paydays;
let hoursPerCheck = 3;


let PTOperYearInHours = paychecksPerYear * hoursPerCheck;
console.log('You earn this many hours per year to take a vacay: ', PTOperYearInHours);
let PTOleftInHours = PTOperYearInHours - PTOusedInHours;
console.log('You have ', PTOleftInHours, 'hours of PTO leftover!');


// let PTOperYearInWeeks = PTOperYearInHours / 40;
// console.log('You earn this many weeks per year to take a vacay: ', PTOperYearInWeeks);
// let PTOleftInWeeks = PTOperYearInWeeks - PTOusedInWeeks;
// console.log('You have ', PTOleftInWeeks, 'weeks of PTO leftover!');


// let PTOperYearInDays = PTOperYearInHours / 8;
// console.log('You earn this many days per year to take a vacay: ', PTOperYearInDays);
// let PTOleftInDays = PTOperYearInDays - PTOusedInDays;
// console.log('You have ', PTOleftInDays, 'days of PTO leftover!');


// Investment Calculator


// SET INT initialInvestment = 100;
// SET INT initialAccountAmt = 0;
// SET INT investmentTermsMonth = 12;
// SET INT investmentTermYear = investmentTermsMonth / 12;
// SET INT interestRate = .02;

// Logic
// 1. Start with an initial amount in an account.
// 2. Calcuate interest earned EQUALS investment * term * rate
// 3. Calcuate amount in account EQUALS interest earned + initial account amount
 

// Result => total interest earned
// Result => total amount in account

let initInvest = 100;
let initAccount = 1000;
let vestTerms = 12;
let interestRate = 0.05;
let addInvestment = 100;

let totInterestEarned = initInvest * vestTerms * interestRate;
let totAccount = totInterestEarned + initAccount + (vestTerms * addInvestment);

console.log('You earned a total of ', totInterestEarned ,'dollars, so now you have ', totAccount ,'in your bank account.');








// cmd + shift + R = Hard Reload ==> Dumps Cache
// use Hard Reload at all times!!!

// Set debugger breakpoints on the first dimension and work your way up

// Naming Conventions p 69
// Dont't use reserved keyword eg: break, return, boolean...
// Variables are case sensitive
// You can sart with an underscore, it indicates a private variable

// Single Line Comment

/*
Multi Line Comment
*/


/*
JavaScript Reserved Words

abstract	
arguments	
await*	
boolean
break	
byte	
case	
catch
char	
class*	
const	
continue
debugger	
default	
delete	
do
double	
else	
enum*	
eval
export*	
extends*	
false	
final
finally	
float	
for	
function
goto	
if	
implements	
import*
in	
instanceof	
int	
interface
let*	
long	
native	
new
null	
package	
private	
protected
public	
return	
short	
static
super*	
switch	
synchronized	
this
throw	
throws	
transient	
true
try	
typeof	
var	
void
volatile	
while	
with


JavaScript Objects, Properties, and Methods

Array	
Date	
eval	
function
hasOwnProperty	
Infinity	
isFinite	
isNaN
isPrototypeOf	
length	
Math	
NaN
name	
Number	
Object	
prototype
String	
toString	
undefined	
valueOf


JavaScript Java Reserved Words

getClass	
java	
JavaArray	
javaClass
JavaObject	
JavaPackage
*/

// Dont't start with a number eg: var 9lives
// nnnn

// Global Connect LLC is a digital utilities company that provides disadvantaged communities access to the internet economy. Global Connect delivers internet service to low-income citizens living in high-density residencies by leveraging pre-existing internet service provider infrastructure with low-cost equipment and commoditized networking resources. 

// Traditional telecomm operators initially approached affluent neighborhoods to deliver fiber-optic internet service because it requires expensive installation costs. Global Connect targets low-income residents in dense multi-unit dwelling, like federal housing projects because GC's internet service providing cost  