
// number data types


let num = 10;
let num1 = 10.3;
let num2 = 3 + 5;
console.log(num, num1, num2)


// string data types 

let names = " Rakib ahmed"
let home = "Narsingdi"
let religion = "Islam"
console.log(names, home, religion)


// booleans data types 

let a = 10;
let b = 10;
let c = 12;
let result = a == b;
let result2 = b == c;
console.log(result)
console.log(result2)



// object data types

const profile = {

    name: "Rakib Ahmed",
    age: 25,
    nationality: "bangladesh",
    education: "H.S.C",
    married_status: "unmaried",

}

console.log(profile)

// array object data types

const carname = [
    "Saab",
    "Volbo",
    "bmw",
    "royel Enfield"
]
console.log(carname)

// date Object

const date = new Date()
console.log(date)


let str = 16 + "volvo" //When adding a number and a string, JavaScript will treat the number as a string.
console.log(str)

let str2 = 16 + 9 + "Rakib" //JavaScript evaluates expressions from left to right. Different sequences can produce different results:
console.log(str2)

let str3 = "Rakib" + 16 + 9
console.log(str3)

let str4 = "Ahmed" //JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
str4 = 20 
console.log(str4)


let str5 = 'hello bangladesh' // Using single quotes:
let str6 = "Hello bangladesh"// Using double quotes:
console.log(str5 , str6)
 

let answer = " hello boy's." // Single quote inside double quotes:
let answer2 = "he called 'Jhonny" // Single quote inside double quotes:
let answer3 = 'he called "Jhonny" ' // Double quotes inside single quotes:
console.log(answer, answer2, answer3)

let num3 = 12.00 //  All JavaScript numbers are stored as decimal numbers (floating point).
let num4 = 12
console.log(num3 , num4)

//Extra large or extra small numbers can be written with scientific (exponential) notation:

let y = 923e5;    // 12300000
let z = 123e-9;   // 0.00123
console.log(y, z)


let x = BigInt("123456789012345678901234567890");
console.log(x)

let undef = undefined;
let str7 = "my mother" ;
let num6 = 155 ;
let boolen = 5 == 5 ;
console.log(typeof undef)
console.log(typeof str7)
console.log(typeof num6)
console.log(typeof boolen)
