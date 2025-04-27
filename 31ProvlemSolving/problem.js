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



