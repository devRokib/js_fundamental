// JavaScript integers are only accurate up to 15 digits:

let x = 999999999999999
let y = 9999999999999999  // after 15 digit its can not work properly
console.log(x)
console.log(y)

// big integer written way
let myInt = 223333344444999999999n
console.log(myInt)

let integer = BigInt(383200243)
console.log(typeof integer) // typeof bigint

let a = 5

// let sum = myInt * a // Arithmetic between a BigInt and a Number is not allowed (type conversion lose information)

// console.log(sum)

let bigNum  = 10n
let Num = 2
let sum2 = Number(bigNum) / 2 // use explicit conversion.
console.log(sum2)

let bigNum2 = 40n
let Num2 = 10
let sum3 = Number(bigNum2) * Num2 // use explicit conversion.
console.log(sum3)


let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;

console.log(hex)
console.log(oct)
console.log(bin)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

let nmbr = 125485
let res = Number.isInteger(nmbr) // full number is a integer number . that's why it's return true
console.log(res)

let nmbr2 = 4766589332689993
let res2 = Number.isSafeInteger(nmbr2) //max 15 digit can safe as integer number
console.log(res2)