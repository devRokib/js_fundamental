const time = new Date ()
let getYear = time.setFullYear(2023)
console.log(getYear)

const time2 = new Date('January 02 , 2024')
let setYear = time2.setFullYear(2020)
console.log(setYear)

const time3 = new Date ('January 02 , 2024')
let setMonth = time3.setMonth(5)
console.log(setMonth)

const time4 = new Date('January 02 , 2024')
let setDates = time4.setDate(18)
console.log(setDates)

const mili = 1705514400000
let convertDate = new Date(mili)
console.log(convertDate)

const time5 = new Date('January 02 , 2024')
let setHour = time5.setHours(16)
console.log(setHour)

const time6 = new Date('January 02 , 2024')
let setMinute = time6.setMinutes(34)
console.log(setMinute);

const time7 = new Date('January 02 , 2024')
let setSecond = time7.setSeconds(43)
console.log(setSecond)

const time8 = new Date('January 02 , 2024')
let setMili = time8.setMilliseconds(435)
console.log(setMili)