
const car = {
    Name: "Fiat" ,
    Model:500 ,
    weight : "585gm",
    color : "White" ,

    start : function (){
        console.log("The car is Starting")
    },

    stop: function(){
        console.log("The car is Stoped")
    } ,

    drive : function(){
        console.log("The car is Driving by me")
    },

    brake: function (){
        console.log("The car is Braked") ;
        this.start() // 

    }

}
console.log(car.Model) //Accessing Object Properties by objectName.propertyName
console.log(car["Name"]) //objectName["propertyName"]
console.log(car.color)
console.log(car["weight"])


car.brake() // the brake function is called
car["drive"]()
// car.start()
car["stop"]()

const person = {
    firstName : "Jhon",
    lastName : "Doe" ,
    age : 36 ,
    eyeColor : "Blue" ,
    FullName : function (){
        console.log(this.firstName + " " + this.lastName)
    }
} ;
person.FullName()
console.log(person.age)
console.log(person["eyeColor"])
console.log(person.firstName)
console.log(person["lastName"])


const animals = new Object()  // Add Properties a new object

animals.No1 = "Cat" ; 
animals.No2 = "cow" ;
animals.No3 = " Tiger " ;
animals.No4 = " Lion " ;
animals.No5 = " Horse "

console.log(animals)


