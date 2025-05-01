for (let i = 0 ; i < 10 ; i++){ 
    if(i === 4){
        break // break jump out of a loop
    }
    console.log(i)
}

for (let i = 0 ; i < 5 ; i++){
    if(i === 2){
        continue // continue jump over one iteration loop
    }
    console.log(i)
}

const cars = [' Volvo ',' Saab ','Fiat','BMW']
let text = ''

list:{
    text = text + cars[0] ;
    text = text + cars[1] ;
    break list ;
    text = text + cars[2];
    text = text + cars[3] ;
}
console.log(text)

for(let i = 1 ; i < 20 ; i++){
    if (i % 7 === 0){
        console.log('it"s got it' , i)
        break
    }
    console.log('Executed' , i)
}

for(let i = 1 ; i < 10 ; i++){
    if( i % 2 === 0){
        continue
    }
    console.log('Odd Number' , i)
}