// Array


/* Arrays in TypeScript are used to group related data, store collections of items, and facilitate iteration and manipulation of data. 
They offer dynamic size, zero-based indexing for efficient access, and are commonly used in functions for passing multiple values. */

// Array format

let fruit1 = 'Banana'
let fruit2 = 'Orange'
let fruit3 = 'Kiwi'

let fruits = ['Banana','Orange','Kiwi']
console.log(fruits[2])

// Arrays: Adding and removing elements

// Remove elements

// let fruit1 = 'Banana'
// let fruit2 = 'Orange'
// let fruit3 = 'Kiwi'

// let fruits = ['Banana','Orange','Kiwi']
// console.log(fruits.pop())

// Add Elements

// let fruit1 = 'Banana'
// let fruit2 = 'Orange'
// let fruit3 = 'Kiwi'

// let fruits:string[] = ['Banana','Orange','Kiwi']
// console.log(fruits.push('Mango'))
// console.log(fruits)

// /* The shift() method is called on the fruits array, which removes and returns the first element ('Banana') from the array.*/
console.log(fruits.shift())
console.log(fruits)

// /* The unshift() method is called on the fruits array to add a new element ('guava') at the beginning of the array.*/
console.log(fruits.unshift('guava'))
console.log(fruits)

console.log(fruits.splice(1,0,'apple'))
console.log(fruits)





// Using slice method to create a new array with elements from index 1 to 2 (exclusive)
let slicedFruits = fruits.slice(2,);

console.log(slicedFruits); // Output: ['Orange', 'Kiwi']

