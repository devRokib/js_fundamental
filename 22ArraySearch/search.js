const fruits = ['Banana','Orange', 'Apple','Orange','Lemon']
let fideIndex = fruits.indexOf('Orange',2) + 1 // find the index number of element . i can define the starting point
console.log(fideIndex)
console.log(fruits)

const month = ['january','february','march','april','january','march']
let lastIndex = month.lastIndexOf('january')  // find the last indexof in same element
console.log(lastIndex)

const Countries = ['Bangladesh','Pakistan','China','Japan']
let includeCountry = Countries.includes('Pakistan') // includes method find an specific element and if find the element it's return trun otherwise it's return false
console.log(includeCountry)

const number = [3,5,8,9,12,35 ,3,6]

function isGretherthen (num){
    return num > 10
}

let findBigNumber = number.find(isGretherthen) // find method return the first true value
console.log(findBigNumber)

const FindIndex = [3,5,6,8,10,13,15,18]
function myFunction (value , index, array){
    return value > 10
}
const findindexNumber = FindIndex.findIndex(myFunction) // find the index of that's first largest number then 10
console.log(findindexNumber)

const temp = [20, 30,27, 36, 33, 28]

function high (tempUp){
    return tempUp > 30
}
let highTemp = temp.findLast(high) // return the last index element that's match the condition
console.log(highTemp)

const nmbr = [40,42,25,32,43,50,36]
function lastindexFind (last){
    return last > 40
}

let lastIndexOfNmbr = nmbr.findLastIndex(lastindexFind) // return the last index which match this condition
console.log(lastIndexOfNmbr)