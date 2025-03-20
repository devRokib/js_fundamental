//  const pi ; // A variable defined with the const keyword cannot be reassigned:
//  pi = 3.14

const pi = 30; //JavaScript const variables must be assigned a value when they are declared:
console.log(pi)



const num = [1, 2, 3, 4];
num[0] = 20; // you can change a elements
const addNum = 5;
num.push = (addNum) // you can add elements
console.log(num)


// const country = [bd, pakistan, india, china, japan]
// country = [morocco, pakistan, india, china, japan] // but can not reassign or   redeclared


const car = { type: "fiat", model: "500", color: "white" }

car.color = "green" // you can change value
car.model = "1000" // you can change value
car.condition = "second hand" // you can add a value
car.owner = "Rakib Ahmed" // you can add a value
console.log(car)


 // const car = { type: "fiat", model: "500", color: "white" } //
 // car = { type: "fiat", model: "300", color: "red" } // but can not reassign


 const x = 10 ; // here x is 10
 {
    const x = 15 // here x is 15 
    console.log(x)
 }
 console.log(x)

// var y = 50 ; // allowed
// const y = 220 ; // not allowed

 {
    let y = 30 // allowed
   // const y = 80 // not allowed
   console.log(y)
 }

 {
    const y = 2 ; // not allowed . because of line 40 
   // const y = 3 // not allowed
   console.log(y)
 }

 const z = 3 ; // allowed
 //z = 2 // not allowed 
 // var z = 4 ; //not allowed
 // let z = 5 ; // not allowed
 // const z = 6 ;// not allowed
 console.log(z)

 {
    const z = 3 ; // allowed
   // z = 2 // not allowed 
    // var z = 4 ; //not allowed
    // let z = 5 ; // not allowed
    // const z = 6 ;// not allowed
    console.log(z)
 }


 const a = 8 ; // allowed
 console.log(a)
 {
    const a = 10 ; // allowed
    console.log(a)
 }
 {
    const a = 30 // allowed
    console.log(a)
 }


 console.log(str)
 const str = "bangladesh" //  can't access lexical declaration 'str' before initialization