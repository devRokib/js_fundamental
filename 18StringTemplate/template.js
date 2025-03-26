// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

let text = `Hello World` ;
console.log(text)

let text2 = `He's often called "Johnny"`; //Template Strings allow both single and double quotes inside a string:
console.log(text2)

let text3 =
`The quick
brown fox
jumps over
the lazy dog`; //Template Strings allow multiline strings:
console.log(text3)

let firstName = "RAkib"
let lastName = "Ahmed"
let num = 20
let num2 = 5
let fullName = `Welcome ${firstName} ${lastName} and he is ${num + num2} years old`
console.log(fullName)//Automatic replacing of variables with real values is called string interpolation.