console.log("hello search")


// JavaScript counts positions from zero.

// 0 is the first position in a string, 1 is the second, 2 is the third, ...


let text = "Please locate where 'locate' occurs!";
let textIndex = text.indexOf("where") //The indexOf() method returns the index (position) of the first occurrence of a string in a string
console.log(textIndex)

let text2 = "in this folder . i practices some indexof search ."
let textIndex2 = text2.indexOf("rakib")  //  it returns -1 if the string is not found:
console.log(textIndex2)

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
let text3 = "Please locate where 'locate' occurs!";
let lastIndex = text3.lastIndexOf("locate") 
console.log(lastIndex)

// Both methods accept a second parameter as the starting position for the search:
let text4 = "Please locate where 'locate' occurs!";
let lastIndex2 = text4.lastIndexOf("locate",15) 
console.log(lastIndex2)

let strSearch = "Please locate where 'locate' occurs!";
let textSearch = strSearch.search("locate");
console.log(textSearch) 
//
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).



// The match() method returns an array containing the results of matching a string against a string
let strMatch = "The rain in SPAIN stays mainly in the plain";
let textMatch = strMatch.match("ain");
console.log(textMatch)

let strMatchAll = "The rain in SPAIN stays mainly in the rain plain";
let textMatchAll = strMatchAll.matchAll("rain")
console.log(textMatchAll)


let textInclude = "Hello world, welcome to the universe.";
let strIncloud = textInclude.includes("world"); // return false or true
let strIncloud2 = textInclude.includes("Rakib"); // return false or true
let strIncloud3 = textInclude.includes("world" , 12); // Check if a string includes "world". Start at position 12:
console.log(strIncloud)
console.log(strIncloud2)
console.log(strIncloud3)


let textStart = "Hello world, welcome to the universe.";
let strStart = textStart.startsWith("Hello"); // return true or false

console.log(strStart)

let startPosition = "Hello world, welcome to the universe.";
let textPosition = startPosition.startsWith("world", 6) // A start position for the search can be specified:
console.log(textPosition)

let textEnd = "John Doe";
let strEnd = textEnd.endsWith("Doe"); /// the endwith method like as start method
console.log(strEnd)

