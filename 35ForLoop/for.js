for ( let i = 0 ; i <= 10 ; i++){
    console.log(`the number is ${i}`)
}

let fruits = ['apple','banana','mango','lemon','pineallpe','orange']

for( let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]) 
}

let number = [4,3,6,8,9,2]
let sum = 0
for( let i = 0 ; i < number.length ; i++){
    sum = sum + number[i]
   
}
console.log(sum)


let mixNumber = [1,53,3,2,8,5,83,8,12,18, 7,24,30]

for (let i = 0 ; i < mixNumber.length ; i++){
    if( mixNumber[i] % 2 === 1){
        console.log(mixNumber[i])
    }
    
}

let i, x = '';
for (i = 0; i < 5; i = i + 2) {
  x += i;
}
console.log(x)