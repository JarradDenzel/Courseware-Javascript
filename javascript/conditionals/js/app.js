

// let foo = 5;

// if (foo < 6) {
//     console.log("here!");
// } 

// let bar = 10;

// if (bar > 20) {
//     console.log('Yo');
// } else {
//     console.log('else','yo yo ma');
// }

// let baz = 15;

// if (baz < 10) {
//     console.log('less than 10.');
// } else if (baz < 20) {
//     console.log('less than 20');
// } else { 
//     console.log('greater than 20');
// }



// let years = 1;
// let hoursPerCheck = 0;

// if (years < 5) {
//     hoursPerCheck = 3;
// } else if (years >= 10) {
//     hoursPerCheck = 6.6;
// } else if (years >= 5) {
//     hoursPerCheck = 5;
// }   

// let paydays = 26;
// let PTOusedInHours = 5;
// let PTOusedInWeeks = PTOusedInHours / 40;
// let PTOusedInDays = PTOusedInWeeks / 5;


// let paychecksPerYear = paydays;



// let PTOperYearInHours = paychecksPerYear * hoursPerCheck;
// console.log('You earn this many hours per year to take a vacay: ', PTOperYearInHours);
// let PTOleftInHours = PTOperYearInHours - PTOusedInHours;
// console.log('You have ', PTOleftInHours, 'hours of PTO leftover!');

// do you want a pet with fur?

// yes 
//     do you want a pet that has one syllable

//     yes
//         do you want a pet that purrs?
        
//         yes
//             cat
        
//         no
//             dog
//     no
//         do you want a pet with long ears?

//         yes
//             rabbit
        
//         no  
//             hamster    


// no 
//     do you want a pet with legs?

//     yes
//         do you want a pet with feathers?

//         yes
//             parrot
//         no
//             spider
//     no
//         do you want a pet that sheds it's skin?

//         yes
//             snake

//         no
//             fish


// let firstAnswer;
// let secondAnswer;
// let thirdAnswer;


// console.log("Do you want a pet with fur?");
// firstAnswer = prompt("Type Y for 'Yes' or N for 'No'");
// if (firstAnswer === "Y" || firstAnswer === "y") {
//     console.log("Do you want a one-syllable-named pet?");
//     secondAnswer = prompt("Type Y for 'Yes' or N for 'No'");
//     if (secondAnswer === "Y") {
//         console.log("Do you want a pet that purrs?");
//         thirdAnswer = prompt("Type Y for 'Yes' or N for 'No'")
//         if (thirdAnswer === "Y") {
//             console.log("Take this Cat");            
//         } else if (thirdAnswer === "N") {
//             console.log("Take this Dog");
//         }
//     } else if (secondAnswer === 'N') {
//         console.log("Do you want a pet with long ears?");
//         thirdAnswer = prompt("Type Y for 'Yes' or N for 'No'")
//         if (thirdAnswer === "Y") {
//             console.log("Take this Rabbit");
//         } else if (thirdAnswer === "N") {
//             console.log("Take this Hamster"); 
//         } 
//     }
// } else if (firstAnswer === "N" || firstAnswer === "n") {
//     console.log("Do you want a pet with legs?");
//     secondAnswer = prompt("Type Y for 'Yes' or N for 'No'");
//     if (secondAnswer === "Y") {
//         console.log("Do you want a pet with feathers?");
//         thirdAnswer = prompt("Type Y for 'Yes' or N for 'No'")
//         if (thirdAnswer === "Y") {
//             console.log("Take this Parrot");
//         } else if (thirdAnswer === "N") {
//             console.log("Take this Spider");
//         }
//     } else if (secondAnswer === 'N') {
//         console.log("Do you want a pet that sheds it's skin?");
//         thirdAnswer = prompt("Type Y for 'Yes' or N for 'No'")
//         if (thirdAnswer === "Y") {
//             console.log("Take this Snake");
//         } else if (thirdAnswer === "N") {
//             console.log("Take this Fish");  
//         } 
//     } 
// }



let answer1;
let answer2;
let answer3;

answer1 = prompt("Is it A. Hot [85-105degF], B. Cool [65-85degF], C. [45-65degF]? Answer 'A','B', or 'C'");
if (answer1 === 'A') {
    answer2 = prompt("Is the weather A. Sunny, B. Cloudy, or C. Rainy? Answer 'A','B', or 'C'");
    if (answer2 === 'A') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Hot, Sunny and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");
        } else if (answer3 === 'B') {
            alert("It is Hot, Sunny and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Hot, Sunny and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    } else if (answer2 === 'B') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Hot, Cloudy and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");
        } else if (answer3 === 'B') {
            alert("It is Hot, Cloudy and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Hot, Cloudy and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    } else if (answer2 === 'C') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Hot, Rainy and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");
        } else if (answer3 === 'B') {
            alert("It is Hot, Rainy and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Hot, Rainy and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    }

} else if (answer1 === 'B') {
    answer2 = prompt("Is the weather A. Sunny, B. Cloudy, or C. Rainy? Answer 'A','B', or 'C'");
    if (answer2 === 'A') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Cool, Sunny and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");
        } else if (answer3 === 'B') {
            alert("It is Cool, Sunny and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Cool, Sunny and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    } else if (answer2 === 'B') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Cool, Cloudy and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");       
        } else if (answer3 === 'B') {
            alert("It is Cool, Cloudy and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Cool, Cloudy and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    } else if (answer2 === 'C') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Cool, Rainy and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");
        } else if (answer3 === 'B') {
            alert("It is Cool, Rainy and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Cool, Rainy and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    }

} else if (answer1 === 'C') {
    answer2 = prompt("Is the weather A. Sunny, B. Cloudy, or C. Rainy? Answer 'A','B', or 'C'");
    if (answer2 === 'A') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Cold, Sunny and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");
        } else if (answer3 === 'B') {
            alert("It is Cold, Sunny and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Cold, Sunny and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    } else if (answer2 === 'B') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Cold, Cloudy and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");
        } else if (answer3 === 'B') {
            alert("It is Cold, Cloudy and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Cold, Cloudy and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    } else if (answer2 === 'C') {
        answer3 = prompt("Are getting dressed for the A. Workplace, B. Gym, C. Club? Answer 'A', 'B', or 'C'.");
        if (answer3 === 'A') {
            alert("It is Cold, Rainy and your headed to work, wear a J.Crew fit with Nike Cortez kicks.");
        } else if (answer3 === 'B') {
            alert("It is Cold, Rainy and your headed to the gym, wear a tee, shorts and solja ree's.");
        } else if (answer3 === 'C') {
            alert("It is Cold, Rainy and you're headed to the club, wear a Ralph Lauren fit with loafers.");
        }
    }

}