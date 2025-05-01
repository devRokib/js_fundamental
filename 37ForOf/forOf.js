// for of loop use for array

const arr = [23,53,87,12,53]
let sum = 0
for(let sumArr of arr){
    sum += sumArr
    console.log(sum)
}

const cars = ['Fiat','Volvo','BMW']
for(let car of cars){
    console.log(car)
}

let language = 'JavaScript'
for(let x of language){
    console.log(x)
}

const colors = ['red','yellow','blue']
for(let color of colors){
    console.log(color)
}

const numbers = new Set([4,2,5,6,6,8,9])
let sum2 = 0
for(let num of numbers){
    console.log(sum2 += num )
}

const students = new Map([
    ['sakib',90],
    ['akib',85]
])
for(let [name,score] of students){
    console.log(`${name} scored : ${score}`)
}
