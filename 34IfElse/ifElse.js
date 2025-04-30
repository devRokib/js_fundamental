let a = 10
if( a === 10 ){
    console.log('This is a integer number')
}

let b = 13
if ( b >= 12){
    console.log('This is first half of day ')
} else{
    console.log('This is second half of the day')
}

let temparature = 18

if (temparature >= 30){
    console.log('the weather is too hot')
} else if ( temparature >= 20){
    console.log('the weather is normal')
} else{
    console.log('the weather is cool')
}

let marks = 82

if( marks >= 80){
    console.log('excellent number . you are so good')
} else if(marks >= 70){
    console.log('good result')
} else if (marks >= 40){
    console.log( 'you are passed but need more study')
}else{
    console.log('you are fail . try to hard')
}

// switch statment

let months = new Date()
let getMonth = months.getMonth()
let month ;
switch (getMonth){
    case 0:
        month = " This is January Month" ;
        break ;
    case 1:
        month = "This is February Month" ;
        break ;
    case 2 : 
        month = 'This is March Month' ;
        break ;
    case 3 : 
        month = 'This is April Month' ;
        break ;
    case 4 : 
        month = 'This is May Month' ;
        break ;
    case 5 : 
        month = 'This is June Month' ;
        break ;
    case 6 : 
        month = 'This is July Month' ;
        break ;
    case 7 : 
        month = 'This is August Month' ;
        break ;
    case 8 : 
        month = 'This is September Month' ;
        break ;
    case 9 : 
        month = 'This is October Month' ;
        break ;
    case 10 : 
        month = 'This is November Month' ;
        break ;
    case 11 : 
        month = 'This is Dicember Month' ;
        break ;
    default :
        month = "Not a valid Number"
     
}
console.log(month)


let day = new Date()
let getDay = day.getDay()
let text ;
switch (14) {
    case 0:
    text = "Sunday"; 
    break;
   
  case 1:
    text = "Monday";
    break;
  
  case 2:
     text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text)


  let x = "0" // switch case also check data type 
  let find ;
  switch (x){
    case 0 :
        find = 'Off' ;
        break ;
    case 1 :
        find = 'On' ;
        break ;
    default :
        find = 'No value Found'
  }
  console.log(find)