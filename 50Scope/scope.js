var a = 10 ; // global scope 

let b = 12 ;// global scope 

const c = 15 ;// global scope 

console.log(a)
console.log(b)
console.log(c)
// global scope and function scope ================

// let carName = "volvo"
// console.log(carName)

function myFunction (){
    let carNames = "Fiat"
    console.log(carNames)

}
myFunction()

// function Scope ==========================

function varFunction (){
    var carName = "volvo"
    console.log(carName)
}
varFunction()

function letFunction (){
    let carName = "BMW"
    console.log(carName)
}
letFunction()

function constFunction (){
    const carName = "Fiat"
    console.log(carName)
}
constFunction()

// blocke scope =================================

{
    // var carName = "volvo" // var is not a block scope

}
{
    let carName = "volvo" // throw an error
    console.log(carName)
}
{
    const carName = "volvo"
    console.log(carName)
}