const hour = new Date().getHours();
let greeting;

if (hour < 18) {
  greeting = "good day";
} else {
  greeting = "good evening";
}

document.getElementById("demo").innerHTML = greeting;

// ====================================

// uses if else conditon ============

const time = new Date().getHours();

let findGreeting;

if (time < 10) {
  findGreeting = "Good Morning";
} else if (time < 17) {
  findGreeting = "Good Day";
} else {
  findGreeting = "Good Evening";
}

document.getElementById("greetings").innerHTML = findGreeting;

// =======================================================
// =======================================================

// switch conditon ============================

let today;
switch (new Date().getDay()) {
  case 0:
    today = "Sunday";
    break;

  case 1:
    today = "Monday";
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4:
    today = "Thusday";
    break;
  case 5:
    today = "Friday";
    break;
  case 6:
    today = "Saturday";
    break;
  default:
    today = " Looking for the Weekend";
}

document.getElementById("findDay").innerHTML = " Today is " + today;
// ====================================
// ====================================
// one condition but many values

let text;

switch (new Date().getDay()) {
  case 0:
  case 6:
    text = " It's Weekend  ";
    break;
  case 1:
  case 2:
  case 3:
    text = " It's Middle of Weekend";
    break;
  case 4:
  case 5:
    text = " Weekend is Coming Soon";
    break;
  default:
    text = " Looking for the weekend";
}

document.getElementById("moreFindDay").innerHTML = text;

// ========================================
// =========================================
// Strict comparison Condition ============

let click = 1; // if data is not match or data type is not match it did't work . if data and type  match just it working

switch (click) {
  case 0:
    fan = "Off";
    break;
  case 1:
    fan = "On";
    break;
  default:
    fan = " No Value Fonnd";
}

document.getElementById("fanOnOff").innerHTML = fan;


let grade = "C" 
let result ;

switch(grade){
    case "A" :
        result = "Excellent" ;
        break
    case "B" :
        result = "Good" ;
        break
    case "C" :
        result = "Average"
        break
    case "D" :
        result = "Poor"
        break
    case "F" :
        result = "Fail"
        break
    default :
        result = " Value is Not Found"
}

document.getElementById('examResult').innerHTML = result

// ===================================
// Traffic Singnal ===================

let light = "green";
let action ;

switch (light){
        case "red":
            action = "Car Stop" ;
            break
        case "yellow" : 
            action =  "Get Ready" ;
            break
        case "green":
            action = "Car Go"
            break
        default :
            action = " Color is Invalid"
}
document.getElementById("traffic").innerHTML = action

// =====================================================
 /// weather Condition ==================================


 let weather = "snowy" ;
 let suggestion ;

 switch (weather){
        case "sunny":
            suggestion = " Wear a Sunglass";
            break ;
        case "rainy":
            suggestion = " Take an Umbrella" ;
            break ;
        case "snowy":
            suggestion = "Wear a Coat";
            break ;
        default:
            suggestion = "Check The Wheather";
 }

document.getElementById("check").innerHTML = suggestion


