const fruits = ['banana', 'orange','apple','lemon']
    fruits.sort() // sort method sorted by alhpabet and change the main array
    fruits.reverse()
    console.log(fruits)
    
const languages = ['Bangla','Hindi','Urdo','English']
languages.reverse()
console.log(languages)
  
const months = ['jan','april','feb','march']
let a = months.toSorted() // to sorted method  unchanged the main array
console.log(a)
console.log(months)
let toReverseMethod = months.toReversed() // toReversed method also unchange the main array and reverse the array

console.log(toReverseMethod)
console.log(months)

const points = [4,5,10,6,30,20,15]
points.sort(function(a,b){
    return a -b
})
let smallValue = points[0]
console.log(smallValue)
let maxValue = points[points.length -1]
console.log(maxValue)
console.log(points)

const numbers = [40,55,34,80,56,70,28]
numbers.sort(function( a , b ){
    return a - b
})
let minValue = numbers[0]
let maximumValue = numbers[numbers.length -1]
console.log(minValue)
console.log(maximumValue)

const marks  = [40,60,56,70,38,68]
marks.sort(function(){
    return .5 - Math.random() // math.random work 0 to 0.9
})
console.log(marks)

const myArr = [5,8,45,95,358, 25,2564,25,]
function findMaxValue (myArr){
    return Math.max.apply(null ,myArr)
}
let highestValue = findMaxValue(myArr)
console.log(highestValue)
 

const Arr = [54, 58,68,57,75,59,38,82]
function findMinValue (Arr){
    return Math.min.apply(null , Arr)
}
let lowestValue = findMinValue(Arr)
console.log(lowestValue)

const myCar = [
    {type:'volvo', year: 2016} ,
    {type : 'BMW', year:2019},
    {type: 'Fiad' , year : 2012}
]
myCar.sort(function(a,b){
    return a.year - b.year
})
console.log(myCar)

const cars = [
    {type : 'Fiad', year : 2010} ,
    {type : 'Toyota' , year : 2008},
    {type : 'Royal Ross' , year : 2014}
]
cars.sort(function (a , b){
    let x = a.type.toLowerCase()
    let y = b.type.toLowerCase()
    if (x < y ) {return -1}
    if (x > y) {return 1}
})
console.log(cars)