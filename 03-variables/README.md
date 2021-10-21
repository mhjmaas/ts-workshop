# Variables
In the last 2 labs we have already seen various forms of variables. We have seen how to declare variables using the "var", "let" and "const" keywords. Also we have seen we assign values to variables by using the equals sign. We haven't really talked about data types like text and numbers but with javascript this is a rather important topic. 

Firstly, when we talk about text in programming we also call them "Strings", which stands for "A string of characters". When we use either single quotes or double quotes around a piece of text and assign it to a variable, JavaScript will assume this is a string and act accordingly. If we want to work with numbers or decimals, we provide them without quotes and JavaScript will understand it is a number.

### **Create 3 variables and print them**
Use the "03-variables\index.js" file and create 3 variables, one should hold your name, one should hold your favourite type of pet and the last one should specify how many siblings you have. Then modify the console.log line which is already there to use the variables using string interpolation.

As you can see when printing them, JavaScript can convert numbers to strings when it needs to.

### **Type safety**
JavaScript is inherently not a type safe language. This means you do not have to specify before you assign a value to a variable what data type it is. As you have seen, it assumes what kind of data it is from the data that is being provided.
To demonstrate this, copy the following code in the index.js after the console.log statement which you have just modified and run the code.

```javascript
let whatever = 'Jerry Lee Lewis';

console.log(whatever); // prints 'Jerry lee lewis';

whatever = 1;

console.log(whatever); // prints '1';

whatever = whatever + 5; // variable 'whatever' is already 1 and a number, so does 1 + 5

console.log(whatever); // prints '6';

whatever = '1'; // string version of 1
whatever = whatever + 5; 

console.log(whatever); // prints '15'
```

So why is the last console.log printing '15'? thats because we first assigned a string value of '1' to the variable "whatever". Therefore JavaScript assumes it is now a string, and when you use a plus sign together with a string it will always concatenate the provided value with the string, even if the provided value (in the case the number 5) is not a string. It will simply be converted. As you can see this is sometimes very handy but can also lead to some nasty bugs if you are not carefull. Most object oriented languages these days are type safe like Java, .Net and C++; 
Typescript was introduced to help make JavaScript type safe among other reasons.

### **Other types**
There are a couple of other data types you can use. I will provide you with a couple of examples:

```javascript
var emptyVariable; // you do not have to immediately initialize a variable, but then it has no value and no type.
console.log(emptyVariable); // prints: undefined, also this only works with the "var" keyword, let and const need to be initialized

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
```

### **Primitives vs Objects**
All data types except objects define immutable values (that is, values which can't be changed). For example (and unlike in C), Strings are immutable. We refer to values of these types as "primitive values". So behind the scenes in Javascript strings are never changed, but new strings are created and referenced instead. Consider the following code:

```javascript
let name = 'Marcel'; // initialise the name variable with my name
name = name + ' Maas'; // this does not change the value 'Marcel' but instead creates a new string using the old name and the new surname ' Maas' and assigns that to the name variable. (and by extent the memory in which the original value was held is freed because no one is referencing it anymore.)
```

This was kind of a boring lab but really had to be done to understand how variables work, and also sometimes conspire to work against you. Lets continue with the next lab: [Arrays and loops]((../04-arrays-and-loops/README.md))