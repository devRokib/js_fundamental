const numbers = [25, 8, 35, 12, 18, 23]
function myFunction(value, index, array) {
    console.log(value)
    console.log(index)
    console.log(array)
    console.log("---------")
}
numbers.forEach(myFunction)


const number = [40, 25, 32, 21, 15, 41]
let text = ''

number.forEach(eachFuction)

function eachFuction(value) {
    console.log(text += value + "  ")
}

const mapNumber = [20, 41, 30, 25, 32]

mapNumber.map(mapFunction) // ceate an new array . Don't changed the main array
function mapFunction(value) {
    console.log(value * 2)
}

const nmbrs = [20, 25, 13, 30, 28]

function flatMapFunction(x) {
    return [x, x * 2]
}
let flatMapResult = nmbrs.flatMap(flatMapFunction) // return a new array 
console.log(flatMapResult)

const ages = [41, 35, 12, 24, 16, 20]
let adultPerson = ages.filter(adult) // ceate a new  array that's pass the test
function adult(x) {
    return x > 18
}
console.log(adultPerson)


const reduceNumber = [24, 23, 54, 15, 20]

let sum = reduceNumber.reduce(findReduceSum)
function findReduceSum(total, value) {
    return total + value
}
console.log(sum)


const point = [52, 42, 82, 53, 86, 72, 64]
let initialWithSum = point.reduce(initialValueReduce, 1000) // i can sent initial value
function initialValueReduce(total, value) {
    return total + value
}
console.log(initialWithSum)

const Arr = [32, 53, 24, 63, 6, 23]
let reduceRightSum = Arr.reduceRight(rightReduce) // it's count right side
function rightReduce(total, value) {
    return total + value
}
console.log(reduceRightSum)

const myNumber = [24, 43, 13, 53, 32, 12, 53, 16]
let checkedEveryNumber = myNumber.every(checkedEvery) // it check the number and any values fail the test . it's return false 
function checkedEvery(value) {
    return value > 18
}
console.log(checkedEveryNumber)

const score = [33 ,23 ,53 , 64, 12, 32, 31]
let scoreResult = score.some(someFunction) // it's return true . if atleast one value pass the test 
function someFunction (value){
    return value > 50
}
console.log(scoreResult)

const fromArr = 'ABCDEFGHIJ'
let fromRes = Array.from(fromArr) // create an new array and every letter like as an element
console.log(fromRes)

const fruits = ['banana','orange','lemon','apple']
let keysResult = fruits.keys() // return an object iterate array
console.log(keysResult)

const cars = ['Toyota','Fiat','Saab','BMW']
let entrisName =cars.entries()// Create an Array Iterator, and then iterate over the key/value pairs:
console.log(entrisName)

const months = ['jan','feb','mar','april']
let updateMonthName = months.with(1,"february") // this method safe for update one or more element in array
console.log(updateMonthName)

const q1 = ['jan','feb','mar']
const q2 = ['april','may','jun']
const q3 = ['jul','aug','sep']
const q4 = ['oct','nov','dec']
const year = [...q1 ,...q2,...q3,...q4] // expand an itarabe into more element
console.log(year)