const person = {
  fName: "Jhon",
  lName: "Doe",
  age: 45,
};

for (let details in person) {
  console.log(person[details]);
}


const numbers = [2, 4, 6, 8, 21, 3];

let sum = 0;
for (let number in numbers) {
  sum = sum + numbers[number];
}
console.log(sum);


const newNumber = [21,32,51,13,25,26]

let sum2 = 0 ;
newNumber.forEach(myfunction)
function myfunction (value,index,array){
    sum2 = sum2 + value
}
console.log(sum2)

const person2 = {
    name:'Alice',
    age : 30 ,
    job : 'Engginiar'
}
for (let info in person2){
    console.log(`${info} : ${person2[info]}`)
}

const colors = ['red','yallow','green','pink']
for(let getColor in colors){
    console.log(`${getColor} : ${colors[getColor]}`) // don't use for in loop if index number are needed
}


const users = {
    user1 : {name :'rakib' ,age :25},
    user2 : {name : 'sakib' , age :23}
}
for(let user in users){
    console.log(`Name : ${users[user].name} Age : ${users[user].age}`)
}