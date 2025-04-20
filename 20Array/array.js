const cars = ["Saab", "Volvo", "BMW"] // an array is a special variable . which can hold more then one value
console.log(cars)

// if i have a list item and i want to storing data of list item . it's looks like this
const car1 = "Saab"
const car2 = "Volvo"
const car3 = "BMW"
console.log(car1)
console.log(car2)
console.log(car3)

const number = [1, 2, 3, 4, 5, 6] // An array can hold many values under a single name, and you can access the values by referring to an index number.
console.log(number)

// Spaces and line breaks are not important. A declaration can span multiple lines:
const Item = [
    'item1',
    'item2  ',
    'item3',
    'item4', 'item5'

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

const nnbr = [2, 3, 4, 5, 5, 7, 8, 9]
nnbr[4] = 6 // changes an array element
console.log(nnbr)

const fruits = ["banana", "Apple", "mango", "orange"]
// document.getElementById("demo").innerHTML = fruits.toString() // by javascript access the full array by refferring the array name

const RollNo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// document.getElementById("rollNo").innerHTML = RollNo.toString()

const person = ["Jhon", "Doe", 46] // array are object
console.log(typeof person)

const users = []
users["firstName"] = "Jhon",
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

let myFunciton = function (Num) {
    return 5 * Num
}
let myFunc = myFunciton(10)
console.log(myFunc)

let myCars = ["Ena", "GreenLine", "Bilash", "Nowmi"]
const myArr = []
myArr[0] = Date.now()
myArr[1] = myFunc
myArr[2] = myCars
// console.log(myArr)
console.log(myArr[0])
console.log(myArr[1])
console.log(myArr[2])

const myFruits = ["Banana", "Mango", "Orange", "Apple"]
let length = myFruits.length // The length property is always one more than the highest array index.
console.log(length)

const oddNum = [9, 99, 999, 9999]
let oddAccess = oddNum[0] // accessing the first array element
console.log(oddAccess)

const evenNum = [2, 4, 6, 8, 10, 12]
let lastAccess = evenNum[evenNum.length - 1] // accessing the last array element
console.log(lastAccess)


const countries = ['Bangladesh', 'China', 'Pakistan', 'Russia']

countries.forEach(myCountry) // one way to loop through an array

function myCountry(value) {
    console.log(value)
}

const numbers = ['one', 'two', 'three']
numbers.push("five") // The easiest way to add a new element to an array is using the push() method:
console.log(numbers)

const str = ["A", "B", "C", "D"]
str[str.length] = "E" // add an element with length
console.log(str)

const flower = ['Shapla', "Jhova", "Gada"]
flower[8] = "Rojoni Gonda" // Adding elements with high indexes can create undefined "holes" in an array:
console.log(flower)


const person2 = []
person2[0] = "Jhon" // In JavaScript, arrays always use numbered indexes.  
person2[1] = "Doe"
person2[2] = 46

console.log(person2)
console.log(person2[0])

const person3 = []
person3['fName'] = "jhon" // If you use named indexes, JavaScript will redefine the array to an object.
person3['lName'] = "doe"
person3['age'] = 40
console.log(person3)
console.log(person3[0])

const points = new Array(100, 40, 60) // create an array with three element 
console.log(points)

const point = new Array(20) // if i create a new array with one element it's not not calculate accurately . here are 20 undefined slot
console.log(point[0])

const cityName = ['Dhaka', 'Sylhet', 'Barishal', 'Rangpur']
let recArr = Array.isArray(cityName) // i can recognize an array with Array.isArray method
console.log(recArr)

const myObj = {
    name: "Rakib",
    age: 25,
    dist: "narsingdi"
}
let instanceObj = (myObj instanceof Array) // recognize an array or a object use instaceof method
console.log(instanceObj)

const obj = {
    name: "Jhon",
    age: 40,
    cars: [
        {
            carName1: "Ford",
            models: ["Fiesta", 'Focus', 'Miustang']
        },
        {
            carName2 : 'BMW' ,
            models : ['320','X3','X5']
        },
        {
            carName3 :'Fiad',
            models : ['500','Panda']
        }
    ]
}
console.log(obj.name)
console.log(obj.age)
console.log(obj.cars)
console.log(obj.cars[0])
console.log(obj.cars[0].carName1)
console.log(obj.cars[0].models)
console.log(obj.cars[0].models[2])