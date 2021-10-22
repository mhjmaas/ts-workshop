# Arrays and loops
In this lab we will talk about arrays and loops together, because they usually go hand in hand together with a couple of other handy functions you can use to modify arrays.

## Arrays
Arrays are used to store multiple values in a single variable, like so:

```javascript
const carBrands = ['volvo', 'tesla', 'bmw']; // you can create an array like this
const teslaModels = new Array('Model S', 'Model 3', 'Model Y'); // or like this
const emptyArray = []; // or new Array();
```

### **Retrieving data from arrays**
There are various ways of retrieving data from arrays. You can get a single value from an array, split the array op or easily get the last or first value in the array.

The main thing to know is that every value in an array is connected to an index number. Like a key-value pair, where the index is the key and the value is the content associated with that key.

Consider the following array with its index value below:

```
[ 'volvo', 'tesla', 'bmw']
     0        1       2  
```

JavaScript arrays are zero-based, meaning the first item in the array has the index number 0. This is also demonstrated in the example above. Below are couple of examples you can try yourself in the index.js file as well.

```javascript
const carBrands = ['volvo', 'tesla', 'bmw'];
const firstValue = carBrands[0]; // the square bracket notation is easiest way to get a value using its index.
console.log(firstValue);  //

const thirdValue = carBrands[2]; // this is actually the last value in the array
console.log(thirdValue); // bmw

const fourthValue = carBrands[3]; // what if you try to get an item using an index that does not exists (there are only 3 keys: 0,1,2 and no 3)
console.log(fourthValue); // undefined, no error, but returns nothing

const numberOfCars = carBrands.length; // get the amount of items in the array
console.log(numberOfCars); // 3
const lastCarInArray = carBrands[numberOfCars - 1]; // get the last item in the array by using its reported length. Remember, because it is zero based we should substract 1 to convert to an index.
console.log(lastCarInArray); // bmw

const teslaIndex = carBrands.indexOf('tesla'); // does a reverse lookup to find the index for the specified value
console.log(teslaIndex); // 1

```

### **Adding data to arrays**
You can add data to arrays by using the method "push" on an array, it pushes data onto the array at the end. Copy the first line with carBrands into the "index.js" file for this lab and use "carBrands.push('your-car-name')" to the array and print it using console.log. It should return something like this:
```
[ 'volvo', 'tesla', 'bmw', 'fiat' ]
```

As you can see it's rather simple to add data to an array at the end. In contrast to the "push" method to add items to the front of the array using the "unshift" method. Can you modify the carBrands array using this method to create a result like this? (tip: unshift and push can take more than one argument/parameter at once) You can find the solutions in the solutions/04-arrays-and-loops folder.
```javascript
[ 'toyota', 'alfa-romeo', 'volvo', 'tesla', 'bmw', 'fiat' ]
```

### **Modifying arrays**
There are hosts of way's to modify array's like retrieving a subset of values from an array, remove items from the array or modifying the values in an array. Here are a couple of examples:
```javascript
const carBrands = ['volvo', 'tesla', 'bmw'];
lastValue = carBrands.pop(); // removes the last value in the array and returns it to you.
console.log(lastValue); // bmw
console.log(carBrands); // [ 'volvo', 'tesla' ]
```

```javascript
const carBrands = ['volvo', 'tesla', 'bmw'];
carBrands.splice(2, 0, "horse", "cart"); // At index position 2 (after 'tesla'), remove 0 items and add horse and cart
console.log(carBrands); // [ 'volvo', 'tesla', 'horse', 'cart', 'bmw' ]
carBrands.splice(2, 2); // at index position 2 (after 'tesla'), remove 2 items
console.log(carBrands); // [ 'volvo', 'tesla', 'bmw' ]
```

The examples above are operations that modify the carBrands array itself. Therefore you can simply print the value of carBrands after the operation and see it has been modified

The next method is one of many helpfull methods to modify or restructure your array but return a new array instead of modifying the original. I'm talking about the "map", "find" and "some" methods for example. The "map" method is one of the most useful method's there is because it allows you to modify the contents of an array. This allows you to easily transform data. A couple of examples.

```javascript
const carBrands = ['volvo', 'tesla', 'bmw'];
const modifiedCarBrands = carBrands.map((brand) => `carbrand: ${brand}`); // simple map to add 'carbrand: ' before each item in the array. Please not the use of an arrow function here.
console.log(carBrands); // [ 'volvo', 'tesla', 'bmw' ] as you can see the original array was not modified
console.log(modifiedCarBrands); // [ 'carbrand: volvo', 'carbrand: tesla', 'carbrand: bmw' ] 

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

console.log(output); // just run it and see for yourself.
```

## **Loops**
I hope the last example proved how powerfull these array methods are. However when you couple them with loops it gets even btter. Loops can make the same piece of code loop over and over. You can use this to process each value in an array for example. (if it isn't possible with a method like "map"). A loop can keep looping for as long as you want, for example for as long as there are new values in an array, or indefinitely like a game's main loop.

**Game loop: Nice to know, but useless for now:**
````
A game loop is a loop that keeps looping for as long as a game is running. Every time it loops it will update the state of the game, it moves the main character a few pixels, what is its health etc. Thus it is the base of every game...
````

### **Examples**
Have a look at the following examples, run them yourself and see of you can explain how they work for yourself.
```javascript
// the for loop: its rarely used anymore in modern days
for (i = 0; i < 10; i++) { // start with i = 0, loop as long i < 10, after each loop increment with one
    // this loop will run 10 times
    console.log(i * i);
}
```

```javascript
// the while loop, does exactly the same as the for loop, but differently
let  i = 0; // define a variable use in the while loop
while (i < 10) { // while (a statement is true) keep looping
    // this loop will run 10 times
    console.log(i * i);
    i++; // update the variable, if you forget this, the loop will run forever
}
```

```javascript
// example of a game loop with pesudo code
let gameRunning = true; // define a variable use in the while loop
while (gameRunning) { // while (a statement is true) keep looping
    // this is pseudo code
    updateCharacterPosition();
    renderOnScreen();

    if (gameOver) { // next lab will talk about decisions
        gameRunning = false; // update the gameRunning variable to false so the loop will end
    }
}
```

These days you most likely want to be looping over collections of data mostly stored in arrays or other loopable constructs. You can easily loop over an Array using the "forEach" method. Lets compare this method with the old way of looping over arrays. (before the forEach method existed)

```javascript
// this is the old way using a for loop (or a while loop was also possible)
const carBrands = ['volvo', 'tesla', 'bmw'];
const amountOfBrands = carBrands.length;
for (i = 0; i < amountOfBrands; i++) { // create a loop that loops exactly as many times as there is data in the array
    const brand = carBrands[i]; // get the data at the index indicated by the i variable
    console.log(brand); // prints the brand to the out log
}
/**
 * This contstruct makes it possible to create multiline comments
 * Outputs:
 * volvo
 * tesla
 * bmw
 */
```

```javascript
// this is the new, shorter and easier way using forEach
const carBrands = ['volvo', 'tesla', 'bmw'];
carBrands.forEach(brand => { 
    // forEach loops over each item in the array and the item will be made available in the first parameter of the method.
    // tip: you can name this variable yourself to whatever you like, so choose something that makes sense
    console.log(brand);
});
/**
 * Outputs:
 * volvo
 * tesla
 * bmw
 */
```

## **Excercises**
Now that you know about loops and array's it's time to put this knowledge to the test.

### **1. Transform an array**
Consider the array with names below:
```javascript
const names = ['James Dean', 'Anna Bloom', 'Alexander Manning', 'Jack Daniels', 'Johhny Walker'];
```
I would like you to transform this to an array with the following contents using the "map" operator into a new array called "persons":
```
persons = [
    {
        name: 'James Dean'
    },
    {
        name: 'Anna Bloom'
    },
    {
        name: 'Alexander Manning'
    },
    {
        name: 'Jack Daniels'
    },
    {
        name: 'Johhny Walker'
    },
]
```
Print the resulting array to the out log. (it does not need to be formatted the same, its about the)
You can find the solution in the well know folder with solutions.

### **2. Loop over the array**
Loop over the persons array from excercise 1 and print the name using console.log.

### **3. Remove an item from the end of the array**
Please use the most efficient way to remove the last person (Johhny) from the persons array

### **4. Add items to an array**
Push your own name, and that of your best friend onto the array of names. 

### **5. Use loop to create a single string of names, comma separated**
The result should be: 
```
James Dean, Anna Bloom, Alexander Manning, Jack Daniels, <your-name>, <your-friends-name>,
```

You can now continue to the lab about [decisions](../05-decisions/README.md)

## **Bonus**
There is also such a thing as a Map object, not to be confused with the "map" method on an array. The Map object functions like an array but the main thing here is you can choose your own index key. So you can do the following:

```javascript
const employeeMap = new Map(); // define the map

/**
 * You define the map by using a primitive key, like a string below, 
 * and a value can be anything, primitive or object.
 * Imagine the keys below are employee numbers, and the value the employee data.
 */
employeeMap.set('1281', { name: 'Marcel Maas', loanCategory: 6 });
employeeMap.set('1451', { name: 'Jack Daniels', loanCategory: 4 });
employeeMap.set('2', { name: 'Steve Jobs', loanCategory: 11 });

// You can now easily retieve data based on the key (employee number)
const employeeNumber = '1451';
const employee = employeeMap.get(employeeNumber);
console.log(employee); // -> jack daniels his data is printed
```

Sometimes it can be handy to transform an array to a map to more easily work with its data.
Consider the following example:
```javascript
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
```

I hope the above code demonstrates how maps work. For more info check out [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

