let time = new Date('2021-3,20')
let getYears = time.getFullYear()
console.log(getYears)

let time2 = new Date()
let getYear2 = time2.getFullYear()
console.log(getYear2)

let time3 = new Date()
let getOnlyYear = time3.getYear() // don't use the get year
console.log(getOnlyYear)

let time4 = new Date()
let getMonth = time4.getMonth()
console.log(getMonth)

let time5 = new Date()
let getHour = time5.getHours()
console.log(getHour)

let time6 = new Date()
let getMinute = time6.getMinutes()
console.log(getMinute)

let time7 = new Date()
let getSecond = time.getSeconds()
console.log(getSecond)

let time8 = new Date()
let getMiliSecond = time.getMilliseconds()
console.log(getMiliSecond)

let time10 = new Date()
let getDay = time10.getDay()
console.log(getDay)

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const time9 = new Date()
let month = months[time9.getMonth()]
console.log(month)

