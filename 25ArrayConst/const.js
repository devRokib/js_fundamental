const cars = ['Saab','Volvo','Fiat'] // assinging the value in constant
// cars = ['Toyota', 'BMW','Marcities'] // can not reassign a constant variable

const months = ['jan','april', 'mar']
months[1] = 'feb' // i can reassign an element of an array
console.log(months)

{
    const Name = ['Rakib','Sakib','Akib'] // i can write the same constant name in differnt block scope
}
{
    const Name = ['Rahim','Karim','Selim'] // i can write the same constant name in differnt block scope
}

{
    const cars = ['A','B','C']
    // const cars = ['D','E','F'] // can not declare the same variable as constant .
}