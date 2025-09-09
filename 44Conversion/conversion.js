
// String to number

let str = '4.32'
let nmbr = Number(str)
console.log(typeof nmbr)

let empty = ''
let nmbr2 = Number(empty)
console.log(typeof nmbr2)

let str2 = 'rakib'
let nmbr3 = Number(str2)
console.log(typeof nmbr3)

let str3 = '44 22' 
let nmbr4 = Number(str3) // NaN
console.log(typeof nmbr4)

// Unary Operator

let y = '5' // y is string
let x = + y // x is number

// Number to String

let nmbr5 = 12
let str4 = String(nmbr5)
console.log(typeof str4)

let nmbr6 = 10
let str5 = String( nmbr6 + 10)
console.log(typeof str5)

let nmbr7 = 150
let str6 = nmbr7.toString()
console.log(typeof str6)