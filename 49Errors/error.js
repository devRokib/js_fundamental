try{
    addlert  ('welcome guest')
}catch(err){
    document.getElementById('error').innerHTML = err.message
}



function myFunction (){
    const checkedMessage = document.getElementById("p01") ;
    checkedMessage.innerHTML = ""
    let x = document.getElementById("demo").value ;
    try{
        if (x.trim() == ""){
            throw 'empty'
        } ;
        if (isNaN(x)){
            throw " not a Number"
        } ;
        x = Number(x)
        if (x <= 5){
            throw "too Low"
        } ;
        if (x >= 10){
            throw " too High"
        } ;
    } catch (err){
        checkedMessage.innerHTML = "The input is " + err ;
        }
}


// error 2 ============================
//=====================================


function showError (){
    let messageCheker = document.getElementById('p02') ;
    messageCheker.innerHTML = "" ;

    let y = document.getElementById("showMessage").value ;
    try{
        if( y.trim() == ""){
            throw "empty . Please give some value"
        } ;
        if( isNaN(y)){
            throw "Not a Number"
        } ;
        y = Number(y) ;
        if( y <= 17){
            throw " he/she is still child now"
        } ;
        if (y => 18){
            throw " he/she is adult"
        } ;
    }catch(error){
        messageCheker.innerHTML =  "Input is " + error + "" ;
    } finally {
        document.getElementById("showMessage").value = "" ;
    }
}

// range Error =====================================
//==================================================

let num = 1
try {
    num.toPrecision(500)
}catch( rrr){
    document.getElementById("rangeError").innerHTML = rrr.name
}

// referanceError ================================
//================================================

let a = 10

try {
    a = b + 1
} catch(err){
    document.getElementById("referanceerror").innerHTML = err.name
}

// syntax error ===========================

try{
    eval("alert('hello syntax error)") // missing (') quoets
}catch(err){
    document.getElementById("syntaxError").innerHTML = err.name ;
}

// type Error =================================

let myNumber = 2

try{
    myNumber.toUpperCase()  // you can't convert a number to uppercase8./52
}catch(err){
    document.getElementById("typeError").innerHTML = err.name
}


//    uri Error ===========================

try{
    decodeURI( '%%%' ) // you can not docode percentage sign
}catch( err){
    document.getElementById("decodeError").innerHTML = err.name
}
