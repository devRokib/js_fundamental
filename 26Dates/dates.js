const time = new Date()
console.log(time)

const checkTime = new Date('2022-4-20')
console.log(checkTime)

const time2 = new Date('October 13 , 2015 11:13:00')
console.log(time2)

const time3 = new Date(2018, 11, 24, 10, 33, 30, 0) // js count month 0 to 11
console.log(time3)

const time4 = new Date(2018, 15, 24, 10, 33, 30) // spicifing a month higher then 11 .it's not return an error . it's overflow the next year
console.log(time4)

const time5 = new Date (2017,1,1,10,1,0) // 6 numbers specify year, month, day, hour, minute, second:
console.log(time5)

const time6 = new Date (2019,3,20,12,13) // 5 numbers specify year, month, day, hour, and minute:
console.log(time6)

const time7 = new Date(2021 , 5 , 11, 20)
console.log(time7)

const time8 = new Date(2018, 11, 24);
console.log(time8)

const time9 = new Date(2018, 11);
console.log(time9)

const time10 = new Date(2025) // i can't use a single value . if i can . it's return milisecond since 1970 to present date
console.log(time10)

const time11 = new Date(90,7,10) //One and two digit years will be interpreted as 19xx:
console.log(time11)

const time12 = new Date(100000000000) // milisecond create new date object as milisecond plus zero time
console.log(time12)

const time13 = new Date(-1000000000000)
console.log(time13)