let a = 10;
let b = 9;
let c = Boolean(a > b); // return true
console.log(c);

// every thing with a value is true

let number = 100;
let isTrue = Boolean(number);
console.log(isTrue);

let floatNumber = 4.13;
let floatIsTrue = Boolean(floatNumber);
console.log(floatIsTrue);

let negativeNumber = -10;
let negativeIsTrue = Boolean(negativeNumber);
console.log(negativeIsTrue);

let str = "hello";
let strIsTrue = Boolean(str);
console.log(strIsTrue);

let str2 = "false";
let str2IsTrue = Boolean(str2);
console.log(str2IsTrue);

// every thing without a value is false
let zero = 0;
let zeroIs = Boolean(zero); // 0 is false
console.log(zeroIs);

let negativeZero = -0;
let negativeZeroIs = Boolean(negativeZero); // -0 is false
console.log(negativeZeroIs);

let emptyStr = "";
let emptyStrIs = Boolean(emptyStr); // empty string  false
console.log(emptyStrIs);

let x;
let xIs = Boolean(x); // undefine is false
console.log(xIs);

let y = null;
let yIs = Boolean(y); // null is false
console.log(yIs);

let falsy = false;
let falsyIs = Boolean(falsy); // false is false
console.log(falsyIs);

let nmbr = 20;
let string = "hello";
let nanIs = Boolean(nmbr / string); // NaN is false
console.log(nanIs);

let booleanValue = false;

let booleanObj = new Boolean(false);

let comparison = booleanValue == booleanObj; // same value but type is diffarent
console.log(comparison);
