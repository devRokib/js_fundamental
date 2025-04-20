const cars = ["Saab", "Volvo","BMW"] // an array is a special variable . which can hold more then one value
    console.log(cars)

// if i have a list item and i want to storing data of list item . it's looks like this
const car1 = "Saab"
const car2 = "Volvo"
const car3 = "BMW"
console.log(car1)
console.log(car2)
console.log(car3)

const number = [1, 2, 3, 4 , 5 , 6] // An array can hold many values under a single name, and you can access the values by referring to an index number.
console.log(number)

// Spaces and line breaks are not important. A declaration can span multiple lines:
const Item = [
    'item1',
    'item2  ',  
    'item3',
    'item4' , 'item5'

]
console.log(Item)

let alpha = [] // i can create an array and then provide element . like this
alpha[0] = "A"
alpha[1] = "B"
alpha[2] = "C"
alpha[3] = "D"
console.log(alpha)

const arr = ["Rakib", "Sakib", "Akib"]
const newArr = new Array("Rakib", "Sakib", "Akib")
console.log(arr)
console.log(newArr)
console.log(arr == newArr)  // can not compare array. that's why it's always returns false

const buses = ["Saab", "Volvo", "BMW"]
let bus = buses[1] // i can accessing an array element by array index number
console.log(bus)

const nnbr = [2, 3 , 4, 5 , 5,7 ,8 ,9]
nnbr[4] = 6 // changes an array element
console.log(nnbr)

const fruits = ["banana", "Apple","mango","orange"]
// document.getElementById("demo").innerHTML = fruits.toString() // by javascript access the full array by refferring the array name

const RollNo = [1, 2, 3, 4, 5 , 6, 7, 8, 9]
// document.getElementById("rollNo").innerHTML = RollNo.toString()

const person = ["Jhon", "Doe",46] // array are object
console.log(typeof person)

const users = []
users["firstName"] = "Jhon" ,
users["lastName"] = "Doe"
users["age"] = 46
console.log(users["lastName"])
console.log(users)

// const users = [];
// users["firstName"] = "Jhon";
// users["lastName"] = "Doe";
// users["age"] = 46;

// console.log(users["lastName"]); // বা users.lastName
// console.log(users);


//Array Elements Can Be Objects

let myFunciton = function(Num){
    return 5 * Num
}
let myFunc = myFunciton(10)
console.log(myFunc)

let myCars = ["Ena", "GreenLine","Bilash","Nowmi"]
const myArr = []
myArr[0] = Date.now()
myArr[1] = myFunc
myArr [2] = myCars
// console.log(myArr)
console.log(myArr[0])
console.log(myArr[1])
console.log(myArr[2])

const myFruits = ["Banana", "Mango", "Orange","Apple"] 
let length = myFruits.length // The length property is always one more than the highest array index.
console.log(length)

const oddNum = [9, 99, 999, 9999] 
let oddAccess = oddNum[0] // accessing the first array element
console.log(oddAccess)

const evenNum = [2, 4, 6, 8, 10, 12]
let lastAccess = evenNum[evenNum.length -1] // accessing the last array element
console.log(lastAccess)


const countries = ['Bangladesh','China','Pakistan','Russia']

countries.forEach(myCountry) // one way to loop through an array

function myCountry(value){
    console.log(value)
}

const numbers = ['one','two','three']
      numbers.push("five")
console.log(numbers)
