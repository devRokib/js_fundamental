console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)

let number = 4.6
let roundNum = Math.round(number)
console.log(roundNum)

let number2 = 4.5
let roundNum2 = Math.round(number2) // .5 or more then value it's convert to next number value
console.log(roundNum2)
console.log(number2)

let number3 = 4.4 
let roundNum3 = Math.round(number3) // less then .5 it's convert to previous value
console.log(roundNum3)

let number4 = 4.7
let ceilNumber = Math.ceil(number4)
console.log(ceilNumber)

let number5 = 4.2
let ceilNumber2 = Math.ceil(number5) // it's alway up a nearest integer number
console.log(ceilNumber2)

let number6 = 4.8
let floorNumber = Math.floor(number6)// it's always down a nearest integer number
console.log(floorNumber)

let number7 = 4.9
let truncNumber = Math.trunc(number7) // it's alway down a nearest integer number like floor method
console.log(truncNumber)
console.log(Math.trunc(-4.4))

console.log(Math.sign(-4)) // if value is negative it's return -1
console.log(Math.sign(0)) // if value is zero it's returns zero
console.log(Math.sign(4)) // and value is 1 or more it's return 1

console.log(Math.sin(90 * Math.PI / 180)  )

console.log(Math.min(0, 150, 30, 20, -8, -200))
console.log(Math.max(0, 150, 30, 20, -8, -200))
console.log(Math.random())
console.log(Math.log(1))
console.log(Math.log2(8))
console.log(Math.log10(1000))

let randomNumber = Math.random() * 10
let roundingRandom = Math.round(randomNumber)
console.log(randomNumber)
console.log(roundingRandom)

 function rndNumber(min,max){
    return Math.round(Math.random() * (max - min) + min) // includes min but not includs max number
}
let findRandom = rndNumber(0,10)
console.log(findRandom)

function myFunction (min ,max){
    return Math.round(Math.random() * (max - min) + 1)
}
let findMaxRandomNumber = myFunction(0,50)
console.log(findMaxRandomNumber)