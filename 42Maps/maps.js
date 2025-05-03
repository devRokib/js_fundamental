const fruits = new Map([
    ['apples', 500] ,
    ['lemon' , 300],
    ['banana' , 200]
])
console.log(fruits)
console.log(fruits.size)
console.log(fruits.get('lemon'))

const colors = new Map()

colors.set('green',20)
colors.set('yellow',15) ;
colors.set('red' , 10)
console.log(colors)
console.log(colors.size)
console.log(typeof colors)
console.log(fruits instanceof Map)
console.log(colors.delete('yellow'))
console.log(colors)
console.log(colors.keys())
console.log(colors.clear())
console.log(fruits.has('banana'))

const mapArr = new Map([
    ['name' , 'rakib'] ,
    [ 'age', 20] ,
    [ 'subject' , 'math'] ,
    [ 1 , 100]  
])


let user = ''
mapArr.forEach(function(info , key){
    user =user + key + info
})
console.log(user)

