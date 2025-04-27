const time = new Date("2015-03-25") // ISO date format
console.log(time)

const time2 = new Date("2015-03") // iso year and month format
console.log(time2)

const time3 = new Date('2015')
console.log(time3)

const time4 = new Date("2015-03-25T12:00:00Z") // iso date time format
console.log(time4)

const time5 = new Date("2015-03-25T12:00:00-06:30") // utc date format
console.log(time5)

const time6 = new Date("03/25/2015"); // short date time syntax
console.log(time6)

const time7 = new Date("2015-3-25");
console.log(time7)

let msec = Date.parse("March 21, 2012"); // date parseing mili second
let d = new Date(msec)
console.log(d)
console.log(msec)