
const car = {
    Name: "Fiat",
    Model: 500,
    weight: "585gm",
    color: "White",

    start: function () {
        console.log("The car is Starting")
    },

    stop: function () {
        console.log("The car is Stoped")
    },

    drive: function () {
        console.log("The car is Driving by me")
    },

    brake: function () {
        console.log("The car is Braked");
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
    firstName: "Jhon",
    lastName: "Doe",
    age: 36,
    eyeColor: "Blue",
    FullName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
};
person.FullName()
console.log(person.age)
console.log(person["eyeColor"])
console.log(person.firstName)
console.log(person["lastName"])


const animals = new Object()  // Add Properties a new object

animals.No1 = "Cat";
animals.No2 = "cow";
animals.No3 = " Tiger ";
animals.No4 = " Lion ";
animals.No5 = " Horse "

console.log(animals)


// Object literals

const person2 = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    city: "New York",
    isStudent: false,
    hobbies: ["reading", "hiking", "coding"],
    address : {
        street : "123 Main St",
        Zip : "10001" ,
        
    },
    greet : function(){
        return `Hello , my name is ${this.firstName} ${this.lastName}`
    }
}

console.log(person2.firstName)
console.log(person2["lastName"])
console.log(person2.age)
console.log(person2.city)
console.log(person2.isStudent)
console.log(person2.hobbies[2])
console.log(person2.address.street)
console.log(person2["address"]["Zip"])
console.log(person2.greet())


const cars = {
    make : "Toyota",
    model : " Camry " ,
    year : 2022 , 
    colors : ["silver" , "black" , "white"] ,
    start : function () {
        return " Engine started "
    } ,
}

console.log(cars.make)
console.log(cars.model)
console.log(cars["year"])
console.log(cars["colors"][1])
console.log(cars.start())


const book = {
    title : " The Hitchhiker's Guide to the Galaxy",
    author : "Douglas Adams",
    pages : 224 ,
    genres : ["science fiction " , "comedy"]
}

console.log(book["title"])
console.log(book.author)
console.log(book.pages)
console.log(book["genres"][0])


const circle = {
    radius : 5 ,
    area : function () {
        return Math.PI * circle.radius * this.radius ;
    } ,
    circumference : function() {
        return 2 * Math.PI * this.radius
    }
} ;
console.log(circle.radius)
console.log(circle.area())
console.log(circle.circumference())


const student = {
    studentId : "12345" ,
    courses :{
        math : "A" ,
        science : "B+" ,
        english : "A- "
    } ,
    getGrade : function (courseName){
        return this.courses[courseName] || "Courses not Found"
    }
}
console.log(student.getGrade("math"))
console.log(student.getGrade("science"))
console.log(student.getGrade("Higher Math"))
console.log(student.studentId)


// Objects created with constructor functions (older style, but still valid):


function rectAngle (width , height) {
        this.width = width ;
        this.height = height ;
        this.area = function(){
            return this.width * this.height
        }
}

const lect1 = new rectAngle( 10 ,5)
console.log(lect1.area())


function dog (name , breed) {
    this.name = name ;
    this.breed = breed ;
    this.bark = function (){
        return "Woof"
    }
}

const myDog = new dog("Buddy" , "Gulden Retriever")

console.log(myDog.name)
console.log(myDog["breed"])
console.log(myDog["bark"]())

