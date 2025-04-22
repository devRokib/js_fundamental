const fruits = ['Banana', 'orange', 'mango','lemon']
let fruitLength = fruits.length // find the array length
console.log(fruitLength)

const number = ['one', 'two', 'three', 'four']
let arrayString = number.toString() // convert an array to string 
console.log(arrayString)

const cars = ['Saab', 'Fiad','BMW']
let carsAt = cars.at(1) // get the second element of the array
console.log(carsAt)

const nmbr = [1,3, 5, 6, 7, 8]
let nmbrIndex = nmbr[3] // number index like as "at" method
console.log(nmbrIndex)

const countries = ['Bangladesh', 'Pakistan','China','Nepal']
let countryJoin = countries.join(' $ ') // "join" method customly join the element of an array
console.log(countryJoin)

const cities = ['Narsigndi','Gazipur','Narayanganj','Sirajganj']
let popCity = cities.pop() // removed the last element of array
console.log(popCity) // return pop element
console.log(cities)

const Thana = ['Shibpur','Palash','Monohordi','Belabo']
let pushThana = Thana.push('Narsingdi','Madobdi') // added element in array
console.log(pushThana) // return length
console.log(Thana)

const name = ['Rakib','Jisan',"Tarek",'Mondol']
let shiftName = name.shift() // remove the first element of array and changes all indexes number of array
console.log(shiftName)
console.log(name)

const animal = ['cat','dog','tiger']
let unshiftAnimal = animal.unshift('lion') // add a element in first of array and i can more then added element use unshift method and it's can changes all indexes number 
console.log(animal)

const village = ['Baznabo','Kharia','Bandardia']
    village[0] = 'Purandia' // changes the first element
    console.log(village)

const sports = ['cricket','football','hockie']
sports[sports.length]= 'badminton' // add an element an array in the last
console.log(sports)

const flower = ['Jhoba','Gada','Gulap']
let deleteFlower = delete flower[0] // delete element and  define an undefine value
console.log(flower)
console.log(deleteFlower)

let myGirls = ['Rashida','Khadija']
let myBoys = ['Lokman','Mohon']
let myChildren = myGirls.concat(myBoys) // concat the two arrays 
console.log(myChildren)

const arr1 = ['One','Two','Three']
const arr2 = ['Four','Five','Six']
const arr3 = ['Seven','Eight','Nine']
const concateThreeArrays = arr1.concat(arr2,arr3) /// i can also concate three or more arrays
console.log(concateThreeArrays)

const arr4 = ['Ten','Eleven','Twoelve']
const Element  = 'Thirteen'
const addElement = arr4.concat(Element) // i can add one or more then element use condate
console.log(addElement)

const arr5 = ['fourteen','fifteen','sixteen','seventeen']
const arr5Copy = arr5.copyWithin(2,3) /// copy the element of arrays
console.log(arr5Copy)

const arr6 = ['Eighteen','Nineteen','twoenty','twoentyOne']
const arrRepeat = arr6.copyWithin(2,0,3) // copy the element of array
console.log(arrRepeat)

const myArr = [[1,2],[5,6],[3,4]]
let arrFlat = myArr.flat() // flat array create a new array with sub array concatenate
console.log(arrFlat)
console.log(myArr)
let arrLength = myArr.length
console.log(arrLength)

const FlatMap = [2,3,5, 7,8]
const flatMapOutput = FlatMap.flatMap(num => [num, num * 2]) // flatmap first map all element and creates a new array flatening the array
console.log(flatMapOutput)
console.log(FlatMap)

const arrSplice = ['one ','two', 'three', 'four']
 arrSplice.splice(-1,0,"five ,six") // splice method use for add element in array and it's changes main array

console.log(arrSplice)

const arrSplice2 = ['realme','samsung','redmi','oppu']
    arrSplice2.splice(0,1) // splice method can remove the element
    console.log(arrSplice2)

const month = ['jan','fev','march','april']
let sliceMonth = month.slice(2) // slice method create an new array and it can't changes main array
console.log(month)
console.log(sliceMonth)