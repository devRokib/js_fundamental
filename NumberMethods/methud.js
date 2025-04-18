let nmbr = 523
let result = nmbr.toString() // The toString() method returns a number as a string.
console.log(result)
console.log(typeof result)

let nmbr2 = 40
let nmbr3 = 30
let res = (nmbr2 + nmbr3).toString()
console.log(res)

let nmbr4 = 3.9853
let res2 = nmbr4.toExponential() //toExponential() returns a string, with a number rounded and written using exponential notation.
let res3 = nmbr4.toExponential(2) // A parameter defines the number of characters behind the decimal point:
let res4 = nmbr4.toExponential(4)
let res5 = nmbr4.toExponential(6)
let res6 = nmbr4.toExponential(8)
let res7 = nmbr4.toExponential(20)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)


let nmbr5 = 5.9648
let rusult2 = nmbr5.toFixed(0)
let rusult3 = nmbr5.toFixed(2) // toFixed() returns a string, with the number written with a specified number of decimals:
let rusult4 = nmbr5.toFixed(3)
let rusult5 = nmbr5.toFixed(4)
let rusult6 = nmbr5.toFixed(6)
let rusult7 = nmbr5.toFixed(8)

console.log(rusult2)
console.log(rusult3)
console.log(rusult4)
console.log(rusult5)
console.log(rusult6)
console.log(rusult7)

let preciNum = 4.365
let result2 = preciNum.toPrecision(1) //toPrecision method argument must be 1 and 100
let result3 = preciNum.toPrecision(2) // toPrecision() returns a string, with a number written with a specified length:
let result4 = preciNum.toPrecision(4)
let result5 = preciNum.toPrecision(6)
let result6 = preciNum.toPrecision(8)
let result7 = preciNum.toPrecision(10)

console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)
console.log(result7)

let valNum = 132
let result8 = valNum.valueOf()
let result9 = (valNum + 18).valueOf() //valueOf() returns a number as a number.
console.log(result8)
console.log(result9)
console.log(typeof result8)

 // Number(),parseFloat(),parseInt() ,The methods above are not number methods. They are global JavaScript methods.
let strNum = "25"
let conNum = Number(strNum)
console.log(conNum)

let floatNum = 3.56
let convertIntNum  = parseInt(floatNum)
console.log(convertIntNum)

let IntNum = 20
let convertFloat = parseFloat(IntNum)
console.log(convertFloat)

let numMethod = Number(true)
let numMethod2 = Number(false)
let numMethod3 = Number("10")
let numMethod4= Number("10+10") // If the number cannot be converted, NaN (Not a Number) is returned.
let numMethod5= Number("  20")
let numMethod6= Number("5.10")
let numMethod7= Number("5,6")
let numMethod8= Number("5  3")
let numMethod9= Number("hello")

console.log(numMethod)
console.log(numMethod2)
console.log(numMethod3)
console.log(numMethod4)
console.log(numMethod5)
console.log(numMethod6)
console.log(numMethod7)
console.log(numMethod8)
console.log(numMethod9)

let x = "10"
let y = "10"
let z = x + y
console.log(z)