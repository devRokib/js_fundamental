const str = 'Hello Check'
console.log(typeof str)

const newStr = new String('I Love Bangladesh')
console.log(typeof newStr)

const nmbr = 41.3
console.log(typeof nmbr)

const newNmbr = new Number('52')
console.log(typeof newNmbr)

const booleanType = false
console.log(typeof booleanType)

const nullType = null
console.log(typeof nullType)

const undefinedType = undefined
console.log(typeof undefinedType)

function isArray (myArray){
    console.log(myArray.constructor.toString().indexOf('Array') > -1)
}
isArray([2,3])