let x = 6;
console.log(x == 7); // false
console.log(x == 6); // true
console.log(x == "6"); // true

console.log(x === 6); // true
console.log(x === "6"); // false

console.log(x != 7); // true

console.log(x !== 6); // false
console.log(x !== "6"); // true
console.log(x !== 7); // true

console.log(x > 7); // false
console.log(x < 7); // true
console.log(x >= 7); // false
console.log(x <= 7); // true

let age = 17;

if (age > 18) {
  console.log("you are adult");
} else {
  console.log("you are too young");
}

let score = 70;

if (score > 49 && score > 50 && 99 >= score) {
  console.log("half century complete");
} else {
  console.log("not complete half century");
}

let a = false;
let b = true;
const result = a || b;
console.log(result);

let userInput = "";
let name = userInput || "Rakib Ahmed";
console.log(name);

console.log(5 != 5); // false
console.log(5 != 6); // true
console.log(5 !== "5"); // true

let ages = 18;

let voteAble = ages > 18 ? "you are able for vote" : "not able for vote";
console.log(voteAble);

let number = 9;
let evenOrOdd = number % 2 === 0 ? "Even Number" : "Odd Number";
console.log(evenOrOdd);

let user = "";
let isUser = user ? user : "Rakib";
console.log(isUser);

let score2 = 72;
let grade = score2 >= 90 ? "A" : score2 >= 80 ? "B" : score2 >= 70 ? "C" : "F";
console.log(grade);


let score3 = 12
score3 = Number(score3)

if( isNaN(score3)){
    console.log('it"s not a number')
}else{
    console.log(score3 >= 10 ? '10 for passed' : 'not passed')
}

let names = null
let text = 'missing' 
let result2 = names ?? text ;
console.log(result2)