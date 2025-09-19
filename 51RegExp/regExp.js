let fullName = 'Rakib Ahmed'
let findLName = fullName.search(/ahmed/i) // return indexes
console.log(findLName)

let matchText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam itaque debitis         explicabo quis! Aliquam, ducimus."
let findMatch = matchText.match(/aliquam/i) // return an array
console.log(findMatch)

let replaceText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus odio suscipit culpa officia dicta esse aliquid ea iure expedita."
let findReplace = replaceText.replace(/dicta/i, "Rakib")
console.log(findReplace)

// =======================================================
// Global match  =========================================

let color = " black , white , red, yellow , green, blue "
let globalMatch = color.match(/green|yellow|black/g)
console.log(globalMatch)

let paternText = "hello ! it is for test . don't take is seriously  "
let petarn = /is/g // global flag (g)
let seePetarn = paternText.match(petarn)
console.log(seePetarn)

let insensitiveText = "hello Brother ! What's Up" ;
let findInsensitive = insensitiveText.search(/what's/i) // case insensitive flag (i)
console.log(findInsensitive)