// this is  function body

function sleep (){
    console.log('hello bangladesh ')
}

sleep()

function run(names ,time){
    console.log(names +'everyday run ' + time)
}
run("rakib" , "3 hours")
run("sakib" , "4 hours")
run("nakib" , "5 hours")


function myFunction (){
    console.log("hello function")
    return console.log("rakib") ;//When JavaScript reaches a return statement, the function will stop executing.
    console.log("how are you")// can not executing
}

myFunction()


function tocelcius(fahrenheit){
        return (5/9) * (fahrenheit - 32)
}

let value = tocelcius(77)
console.log("today temparature is " + value)


function abc(e){
    return 4 * 4
}

let d = abc //Accessing a function without () returns the function and not the function result:
console.log(d)

function carname(){
    let mycar = "this is my car"
    console.log(mycar)
}
carname()
//console.log(mycar)// // code here can NOT use myCar

var sum = 20 + 3
function test(){
    var sum = 40 + 43 ;//Local variables can only be accessed from within the function.
    console.log(sum)
}

test()

console.log(sum)