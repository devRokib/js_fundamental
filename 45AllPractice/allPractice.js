 function displayTime(){
            alert('are you sure ? you want to see the time')
            document.getElementById('demo').innerHTML = Date()
        }

 // js string methods 

 let carName1 = "Volvo XC60" // string with doubel quetes
 let carName2 = 'Volvo XC60' // string with single quetes

 let fName = 'Rakib'
 let lName = 'Ahmed'

 let fullName = `welcome ${fName}  ${lName} `
 console.log(fullName)

 let price = 10
 let vat = 0.25

 let total = `Total ${(price * (1 + vat)).toFixed(2)}`
 console.log(total)

 let x = 100 / "Apple";
 let res = isNaN(x);
 console.log(res)

 let nmbr = 20
 let nmbr2 = new Number(20)
 let compareValue = nmbr == nmbr2 // return true . cause value are same
 let compareValueType = nmbr === nmbr2 // return false . cause value are same but type is not same
 console.log(compareValue)
 console.log(compareValueType)

 let nmbrObj = new Number(30)
 let nmbrObj2 = new Number(30)
 let comNmbrObj = nmbrObj == nmbrObj2 // return false . cause objects value did't compare with any objects value 
 let comNmbrObj2 = nmbrObj === nmbrObj2 // return false . cause objects type  did't compare with any objects  type

 console.log(comNmbrObj)
 console.log(comNmbrObj2)






