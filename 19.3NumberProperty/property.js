let x = Number.EPSILON // is the difference between the smallest floating point number greater than 1 and 1.
console.log(x)

let y = Number.MAX_VALUE // Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
console.log(y)

let a = 5
let res = a.MAX_VALUE // Number Properties Cannot be Used on Variables.it's returns undefined
console.log(res)

let Min = Number.MIN_VALUE // Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.
console.log(Min)

let maxSafe = Number.MAX_SAFE_INTEGER // Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
console.log(maxSafe)

let minSafe = Number.MIN_SAFE_INTEGER // Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.
console.log(minSafe)

let posInfinity = Number.POSITIVE_INFINITY
console.log(posInfinity)

let posInfi = 1 / 0  // POSITIVE_INFINITY is returned on overflow:
console.log([posInfi])

let negInfinity = Number.NEGATIVE_INFINITY
console.log(negInfinity)

let negInfi = -1 / 0
console.log(negInfi)

let jsNan = Number.NaN // NaN is a JavaScript reserved word for a number that is not a legal number.
console.log(jsNan)

let jsNan2 = 100 / 'hello'
console.log(jsNan2)