{
    let x = 10 // Variables declared inside a { } block cannot be accessed from outside the block:
    console.log(x)
}

{
    var x = 12 // var always have Global Scope.
}

console.log(x)

// let x = 20 ;
 // let x = 30 ; // Identifier 'x' has already been declared . can not redeclared
console.log(x)

{
    var x = "rakib"
    var x = 25 // Variables defined with var can be redeclared.
    console.log(x)
}

var z = 50 ;

{
    var z = 100
}
 console.log(z) // var z here is 100

 let a = 40 ;
 console.log(a) // here a is 40 

 {
    let a = 80
    console.log(a) // here let a = 80 . cause let is a block scope
 }

 var y = 150 ;
 // let y = 200 // y has already been declared

 {
    let y = 8
   // let y = 12 ; // y has already been declared
 }

 {
    let y = 60 ;
    // var y = 90 ; y has been already been declared
    console.log(y)
 }
 
 {
    let a = 10 ; // allowed
 }

 {
    let a = 70 ; // allowed
 }

 {
    let a = 90 ; // allowed
 }

 // var bikename "reason for hoisting"
 // bikename = undifine " var can set a default value"

 bikename = "discover"
 var bikename ;  // var can access "bikename " before initalization
 console.log(bikename)

// let carname ;
// let can not set a default value

 // carname = "Volvo" ; 
// let carname ; // let cannot access "carname " before initialization
// console.log(carname)

 