let str = "hello Bangladesh" //use double quetes
let str2 = 'here is use single quetes' //use single quetes

console.log(str)
console.log(str2)

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let lesson = "hello i'm 'Rakib' "
let lesson2 = 'hello ! you know "JavaScript"'

console.log(lesson)
console.log(lesson2)

// Templates allow single and double quotes inside a string:

let Template = `hello ! he's so nice` // Templates are not supported in Internet Explorer.
let Template2 = `he  is "Takik"`

console.log(Template)
console.log(Template2)

let strlength = "abcde fghijklm nopqrs tuvwxyz" // spaces are count are in length

console.log(strlength.length)

let text = "hello ! i am rakib . my goal is a \"javascript\" programmer" /// \" inserts a double quote in a string:
console.log(text)

let text2  = 'it\'s alright' // \' inserts a single quote in a string:

console.log(text2)

let text3 = "the man \\ all are called him as a scientist" // \\ inserts a backslash in a string:
console.log(text3)

// A safe way to break up a statement is after an operator:

// A safe way to break up a string is by using string addition:


let text4 = `hello bangladesh
    . i am try to a bangladeshi programmar
    and shine the name of bangladesh ` // Templates allow multiline strings:

    console.log(text4)

// Normally, JavaScript strings are primitive values, created from literals:
    let names = 'Rakib'
    let person = new String("Rakib") // But strings can also be defined as objects with the keyword new:

    console.log(names)
    console.log(person)

    let booleanTest = (names == person) // When using the == operator, names and person are equal: it is return true

    console.log(booleanTest)

    // Comparing two JavaScript objects always returns false.

    let Obj = new String("Rakib")
    let Obj2 = new String("Rakib")
 
    console.log(Obj == Obj2) // return false . cause comparing two javascript value always return false


    // String literal

    let greeting = "hello world"
    let name = "javaScript"
    let multiline = `hello this is javascript
        multiline `

        console.log(greeting)
        console.log(name)
        console.log(multiline)
    
        // String objects (less common)

    let strObj = new String("hello Rakib")
    console.log(strObj)

    // String concatenation

    let strConcat = greeting + " " + name
    let strMultiline = `${greeting} ${name}`
    console.log(strConcat)
    console.log(strMultiline)
    