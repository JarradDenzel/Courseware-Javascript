// Review

// Declare Variables 3 Ways: var, let, & const


let count=0;
let arr7 = [1,2,3,1,2,3,1];

arr7.forEach(num => {
    if (num == 1) {
        count++;
    }
});

console.log(count);

let obj = {};

let obj1 = {
    keyString: 'value',
    keyInt: 2,
    keyArr: [1,2,3],
    keyObj: {
        key: 'value'
    }
};

let person = {
    fname: "Jarrad",
    lname: "Washington",
    lang: ['js','r','java']
};

console.log(person['fname']);
console.log(person.lname);
console.log(person['lang'][0]);


let obj4 = {
    fname: 'jarrad',
    lname: 'denzel'
}

let name = 'fname';
console.log(obj4[name]);

let num = 52*6
console.log(num);





