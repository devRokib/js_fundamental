function displayTime() {
  alert("are you sure ? you want to see the time");
  document.getElementById("demo").innerHTML = Date();
}

// js string methods

let carName1 = "Volvo XC60"; // string with doubel quetes
let carName2 = "Volvo XC60"; // string with single quetes

let fName = "Rakib";
let lName = "Ahmed";

let fullName = `welcome ${fName}  ${lName} `;
console.log(fullName);

let price = 10;
let vat = 0.25;

let total = `Total ${(price * (1 + vat)).toFixed(2)}`;
console.log(total);

let x = 100 / "Apple";
let res = isNaN(x);
console.log(res);

let nmbr = 20;
let nmbr2 = new Number(20);
let compareValue = nmbr == nmbr2; // return true . cause value are same
let compareValueType = nmbr === nmbr2; // return false . cause value are same but type is not same
console.log(compareValue);
console.log(compareValueType);

let nmbrObj = new Number(30);
let nmbrObj2 = new Number(30);
let comNmbrObj = nmbrObj == nmbrObj2; // return false . cause objects value did't compare with any objects value
let comNmbrObj2 = nmbrObj === nmbrObj2; // return false . cause objects type  did't compare with any objects  type

console.log(comNmbrObj);
console.log(comNmbrObj2);

const carName = ["bmw", "fiat", "royel rose"];
carName[1] = "rakib";
let findCar1 = carName[0]; // an array element find index bases
let findCar2 = carName[1];
let findCar3 = carName[2];
console.log(findCar1, findCar2, findCar3);

const blankArray = [];
blankArray[0] = "one";
blankArray[1] = "two";
blankArray[2] = "three";
blankArray[3] = "four";
console.log(blankArray);

 
const fruits = ['banana' , 'mango', 'orange','lemon']

let pushElement = fruits.push('pineapple')
console.log(pushElement)
  
