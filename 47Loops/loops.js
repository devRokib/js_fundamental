let numbers = ""

for( let i = 0 ; i < 20 ; i++){
    numbers += " The Number is " + i  + "<br>"
    
}
document.getElementById("demo").innerHTML=numbers



let some = "" ;
for(let text = 0 ; text < 40 ; text++){
    some +=  "The Number is " + text +"<br>"
}
document.getElementById('texts').innerHTML = some

// shile loops ======================================
// ==================================================

let conuntNumber = ""
let nmbr = 0
while ( nmbr < 15){
    conuntNumber = conuntNumber + 'The number is ' + nmbr + '<br>' ;
    nmbr++
}
document.getElementById('whileLoop').innerHTML = conuntNumber

let countPlusNumber = ""
let plusNumber = 0
  
while( plusNumber < 20){
    countPlusNumber = countPlusNumber + plusNumber + "<br>" ;
    plusNumber = plusNumber + 2
}
document.getElementById("plusNumbers").innerHTML = countPlusNumber


let count = ""
let countDown = 10

while (countDown > 0){
    count = count + countDown + "<br>"
    countDown--
}
document.getElementById("countDowns").innerHTML = count

// do while loops =========================================
// ========================================================

let doWhile = ""
let num = 0
do{
    doWhile = doWhile + num + "<br>"
    num++
}
while(num < 10)

document.getElementById("doWhiles").innerHTML = doWhile

let falsyValue = ""
let value = 20

do{
    falsyValue = falsyValue + value + "<br>";
    value ++
}while(value < 10)

document.getElementById("falsyDoWhile").innerHTML = falsyValue