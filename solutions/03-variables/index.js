// provide your variables here
const myName = 'Marcel';
const pet = 'dog';
const numberOfSiblings = 1;

console.log(`Hi, my name is ${myName}, and my favourite pet is a ${pet} and I have ${numberOfSiblings} sibling(s).`);

let whatever = 'Jerry Lee Lewis';

console.log(whatever); // prints 'Jerry lee lewis';

whatever = 1;

console.log(whatever); // prints '1';

whatever = whatever + 5; // whatever is already 1 and a number, so does 1 + 5

console.log(whatever); // prints '6';

whatever = '1'; // string version of 1
whatever = whatever + 5; 

console.log(whatever); // prints '15', wait what?

var emptyVariable; // you do not have to immediately initialize a variable, but then it has no value and no type.
console.log(emptyVariable) // prints: undefined

const isDeveloper = true; // boolean value, meaning a yes or no value, always defined as either 'true' or 'false'
console.log(isDeveloper);

const unknown = null; // initialized with the primitive type 'null' which is different from 'undefined' which means "non-existant"
console.log(unknown);

const naw = {
    name: 'Marcel',
    age: 35,
    birthPlace: 'Amsterdam'
}; // an object is a collection of properties and can consist of other objects or primitives.

console.log(naw);

let name = 'Marcel'; // initialise the name variable with my name
name = name + ' Maas'; // this does not change the value 'Marcel' but instead creates a new string using the old name and the new surname ' Maas' and assigns that to the name variable. (and by extent the memory in which the original value was held is freed because no one is referencing it anymore.)

console.log(name);;