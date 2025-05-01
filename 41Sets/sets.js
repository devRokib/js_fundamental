const letters = new Set(['a','b','c','d'])

console.log(letters)


const numbers = new Set([])

numbers.add(4)
numbers.add(5)
numbers.add(6)
numbers.add(7)

console.log(numbers)

const score = new Set([])

score.add(40)
score.add(41)
score.add(42)
score.add(43) 
score.add(43) // if you duplicate a value it's just save first value
score.add(43)

console.log(score)

const rollNumber = new Set([1,2,3,4,5,6,7,8,9])

for(let roll of rollNumber){
    console.log(roll)
}

console.log(typeof rollNumber) // object

let checkLetter = letters instanceof Set;  // instance of return true
console.log(checkLetter)

const letter2 = new Set(['a','b','c','d'])
let letterCheck = letter2.has('b') // check an element if find it . it's return true otherwise it's false
console.log(letterCheck)

const cars = new Set(['Saab','Volvo','Fiat','BMW'])

let text = ''
cars.forEach(function(value){
    text = text + value
})
console.log(text)


const buses = new Set(['Ena','GreenLine','London','Isakha'])

let allBus = buses.values() // values are return set iterator
console.log(allBus)
console.log(buses)

let text2 = ''
for(let x of allBus){
    text2 = text2 + x
}
console.log(text2)


const name = new Set(['rohan','borhan','sakib','kashem'])
let keyName = name.keys()


let text3 = ''
for(let y of keyName){
    text3 = text3 + y
}
console.log(text3)

const subject = new Set(['bangla','english','math','finnance'])
let text4 = ''
let allSub = subject.entries()

for(let z of allSub){
    text4 = text4 + z
}
console.log(text4)