const carBrands = ['volvo', 'tesla', 'bmw'];
const firstValue = carBrands[0]; // the square bracket notation is easiest way to get a value using its index.
console.log(firstValue);  //

const thirdValue = carBrands[2]; // this is actually the last value in the array
console.log(thirdValue); // bmw

const fourthValue = carBrands[3]; // what if you try to get an item using an index that does not exists (there are only 3 keys: 0,1,2 and no 3)
console.log(fourthValue); // undefined, no error, but returns nothing

const numberOfCars = carBrands.length // get the amount of items in the array
console.log(numberOfCars); // 3
const lastCarInArray = carBrands[numberOfCars - 1]; // get the last item in the array by using its reported length. Remember, because it is zero based we should substract 1 to convert to an index.
console.log(lastCarInArray) // bmw

carBrands.unshift('toyota', 'alfa-romeo'); // push items to the front of the array, note the contents of the array itself are modified, so no need to assign it to a new array variable
console.log(carBrands);


// a more complex and relevant example, I would encourage to run this one yourself:"
const inputNAW = [
    {
        firstName: 'Marcel',
        lastName: 'Maas',
        homeTown: '\'s-Hertogenbosch', // look at how I escaped the apostrophe here to make sure it doesn't register it as the ending of the string, but as its content. (if you ever need a backslash in a string you can escape that as well \\)
        yearsSinceBirth: 35
    },
    {
        firstName: 'James',
        lastName: 'Dean',
        homeTown: 'Nashville',
        yearsSinceBirth: 48
    },
    {
        firstName: 'Lizzy',
        lastName: 'Fairchild',
        homeTown: 'London',
        yearsSinceBirth: 21
    }
];

const output = inputNAW.map((person) => {
    return {
        fullName: `${person.firstName} ${person.lastName}`,
        city: person.homeTown,
        age: person.yearsSinceBirth
    }
});

console.log(output);

/**
 * Answers to Excercises
 */

// 1. Mapping data
const names = ['James Dean', 'Anna Bloom', 'Alexander Manning', 'Jack Daniels', 'Johhny Walker'];
const persons = names.map(name => {
    return {
        name: name // you are even allowed to use a shorthand for this (when both key and value have the same name you can say "name" instead of "name: name")
    }
});
console.log(persons);

// 2. Looping over an array 
persons.forEach(person => {
    console.log(person.name);
});

// 3. Remove item from persons array
persons.pop();
console.log(persons);

// 4. Added myself and friend to array
persons.push(
    { 
        name: 'Marcel Maas'
    }, 
    { 
        name: 'James Bond'}
    );
console.log(persons);

// 5. Create a single line of names
let singleNameString = ''; // start with an empty string
persons.forEach(person => {
    singleNameString = `${singleNameString}${person.name}, `;
})
console.log(singleNameString);

// a better way to do the above would be to use the "join" method on the array object, like so:
console.log(persons.map(person => person.name).join(', ')); // more concise, even takes care of the last comma which seems out of place in the other piece of code.
// in the above piece of code, we first transform the array using "map" back to a simple list of strings, and then join them together...


/**
 * Bonus content
 */

const employeeData = [
    { employeeNumber: 1281, name: 'Marcel Maas', loanCategory: 6 },
    { employeeNumber: 1451, name: 'Jack Daniels', loanCategory: 4 },
    { employeeNumber: 2, name: 'Steve Jobs', loanCategory: 11 }
]; // basic set of employee data

// convert employee data to a map of employees where their employeeNumber is key for easy lookup
const employeeMap = new Map();
employeeData.forEach(employee => {
    employeeMap.set(employee.employeeNumber, employee);
})

// you can now lookup an employee easily by using the map and the employeeNumber;
console.log(employeeMap.get(2).name); // how to make an employee feel like a person instead of a number. :)
console.log(`Steve his loan category is: ${employeeMap.get(2).loanCategory}`); 
console.log(employeeMap.get(1281).name);
