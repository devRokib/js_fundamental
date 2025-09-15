let num = ""
for (let i = 0 ; i < 10 ; i++){
    if(i === 4){
        break
    }
    num = num + 'The number is '  + i + "<br>"
}
document.getElementById('break').innerHTML = num

let nmbr = ""

loop1: for(let i = 1 ; i < 5 ; i++){
    loop2: for(let j = 1 ; j < 5 ; j++){
        if ( j === 3 ){
            break loop1
        }
        nmbr = nmbr + j + "<br>"
    }
}
document.getElementById('doubleLoopBreak').innerHTML = nmbr

const cars = ['BMW','Volvo','Fiat','Royel Rose']
let text = ""

list : {
    text = text + cars[0] + "<br>" ;
    text = text + cars [1] + "<br>";
    break list
    text = text +  cars [2] + "<br>" ;
    text = text + cars [3] + "<br>"
}
document.getElementById("breakArray").innerHTML = text

// contineu loops =====================================
//=====================================================

let continues = ''

for (let i = 0 ; i < 10 ; i++){
    if ( i === 4){
        continue
    }
    continues = continues + i + "<br>"
}
document.getElementById('loopContinues').innerHTML = continues


let contineuLoop = ""

loop3: for ( let j = 0 ; j < 5 ; j++ ){
    loop4: for ( let i = 0 ; i < 5 ; i++ ){
        if( i===3){
            continue loop3
        }
        contineuLoop = contineuLoop + i + "<br>"
    }
}
document.getElementById('continueLoop').innerHTML = contineuLoop