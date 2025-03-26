console.log("hello string method")

let text = "hello bangladesh"
let lengthNo = text.length
console.log(lengthNo)


let char = "hello ! I am Rakib"
let indexCharAt = char.charAt(10) // The charAt() method returns the character at a specified index (position) in a string:
console.log(indexCharAt)

let charCode = "Hello! Rakib"
let code = charCode.charCodeAt(10) //The charCodeAt() method returns the code of the character at a specified index in a string:
console.log(code)

let names = "Rakib Ahmed" ; // The at() method returns the character at a specified index (position) in a string.
let letter = names.at(2)
let letter2 = names[4]
console.log(letter)
console.log(letter2)

/// JavaScript counts positions from zero.

// First position is 0.

// Second position is 1.
// slice() extracts a part of a string and returns the extracted part in a new string.
let fruits = "banana,mango,apple,malta"
let strSlice = fruits.slice(7,12)
let strSlice2 = fruits.slice(-17,-12) //If a parameter is negative, the position is counted from the end of the string:
let strSlice3= fruits.slice(7) //If you omit the second parameter, the method will slice out the rest of the string:
console.log(strSlice)
console.log(strSlice2)
console.log(strSlice3)


let number = "One,Two,Three,Four,Five"
let strSubString = number.substring(14,18)
let strSubString2 = number.substring(-15,-10) // The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(strSubString)
console.log(strSubString2)

let strSub = "hello,men"
let subStr = strSub.substr(6) // The substr() method is removed (deprecated) in the latest JavaScript standard.
console.log(subStr)


let upCase = "hello ,Bangladesh .How are you"
let strUpCase = upCase.toUpperCase() // A string is converted to upper case with toUpperCase():
let strLowCase = upCase.toLowerCase() // A string is converted to lower case with toLowerCase():

console.log(strUpCase)
console.log(strLowCase)


let text1 = 'hello ! i am rakib';
let text2 = 'i am 25 years old'
let text3 = text1.concat("" + text2) // concat() joins two or more strings:
console.log(text3)

let text4 = "hello "
let text5 = "world"
let text6 = text4 + text5 // The concat() method can be used instead of the plus operator. These two lines do the same:
console.log(text6)

// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.

let strTrim = "    hello bangladesh    "
let strTrim2 = strTrim.trim() // The trim() method removes whitespace from both sides of a string:


console.log(strTrim2)

let startTrim = "   Hello World !"
let startTrim2 = startTrim.trimStart() // whitespace only from the start of a string.
console.log(startTrim2)

let endTrim = " this is my job    "
let clgEndTrim = endTrim.trimEnd() // whitespace only from the end of a string.
console.log(clgEndTrim)


// It pads a string with another string (multiple times) until it reaches a given length. 

let padded = "5"
let consolPadded = padded.padStart(4,"0") // The padStart() method is a string method.
console.log(consolPadded)


let endPad = "8"
let endPadded = endPad.padEnd(4,"0") // The padEnd() method pads a string from the end.
console.log(endPadded)


let textRepeat = "hello World "
let TextRepeat2 =textRepeat.repeat(5)
console.log(TextRepeat2)

/* 
The repeat() method returns a string with a number of copies of a string.

The repeat() method returns a new string.

The repeat() method does not change the original string.
*/



// By default, the replace() method is case sensitive

let peopleInfo = "hello . this is Rakib Khan . he lives in Dhaka" ;
let replaceInfo = peopleInfo.replace("Rakib","Shakib") //The replace() method replaces a specified value with another value in a string:
console.log(replaceInfo)


let anotherInfo = "hello . this is rocky . rocky is very dangareus person";
let anotherReplace = anotherInfo.replace("rocky" ,"rokib") // The replace() method replaces only the first match
console.log(anotherReplace)

let allInfo = " rocky is very dangareus person ,he lives in Dhaka"
let allReplace = allInfo.replaceAll("rocky is very dangareus person ,he lives in Dhaka","It's Alright") // replaceAll() does not work in Internet Explorer.
console.log(allReplace)


let number2 = "One,Two,Three,Four,Five"  // Split on commas
let numArrays = number2.split(",")
console.log(numArrays)

let men = "Rakib Ahmed" ;
let menArray= men.split(" ") // Split on spaces
console.log(menArray)

let number3 = "One|Two|Three|Four|Five" // Split on pipe
let numSplit = number3.split("|")
console.log(numSplit)

let textSplit = "RakibAhmed"
let blankSplit = textSplit.split("") // if split an empty string .it is return an array as per letter like looks a element
console.log(blankSplit)

let x = "7"
console.log(x.padStart(4,7))