function getScore (min,max){
     return Math.round(Math.random() * (max - min + 1 ) + min)
}
let result = getScore(1,6)
console.log(result)

const students = ['Rakib','Sakib','Akib','Rahim','Karim','Mokles']
let sortByName = students.sort()
console.log(sortByName)

const Roll = [6,1,9,2,3,7,5, 8,10 ,4]
function findRoll (a,b){
    return a - b
}

let findSerial = Roll.sort(findRoll)
console.log(findSerial)

function isLeapYear (year){
    if( ( year % 400 === 0 ) || ((year % 4 === 0 && year % 100 !== 0)) ){
        console.log(`${year} is leap year`)
    } else{
        console.log(` ${year} is not leap year `)
    }
}

isLeapYear(2028)

const vowels = ['a','e','i','o','u','A','E','I','O','U']

function countVowels (sentence){
    let count = 0 ;
    const letter = Array.from(sentence)
    letter.forEach( function (value) {
        if ( vowels.includes(value))
            count ++
    })

    return count
}
const totalVowels = countVowels('problem solving with count Vowels')
console.log(totalVowels)


const numberArr = [2,3,5,6, 8, 9, 20,35,16]

function findEvenNumber (number){
    let countNumber = 0
    number.forEach(function (num){
        if (num % 2 === 0){
            countNumber ++
        }
    })
    
    return countNumber
}

const totalEvenNumber = findEvenNumber(numberArr)
console.log(totalEvenNumber)


const mixNumber = [4,5,21,53, 64,73,52,65,72,77]

function oddNumber (oddNum){
    let countOdd = 0
    oddNum.forEach( function (odd){
        if ( odd % 2 === 1){
            countOdd ++
        }
    })
    return countOdd
}

let totalOddNumber = oddNumber(mixNumber)
console.log(totalOddNumber)

const numbers = [2,5,6,7,8,9,1,2,5,6,7,3]

let duplicats = numbers.filter( function ( value,index,array ){
    return array.indexOf(value) !== index
})
console.log(duplicats)