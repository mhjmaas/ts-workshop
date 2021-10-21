# JavaScript functions
Welcome to the next lab about functions. Functions are in virtually every programming language the starting point for reuse. In a function you define a piece of code which can be invoked from many other places and scripts. The behaviour of the function can be dynamic because of parameters you can declare and provide. Lets just dive in and everything will become clear. 

Our starting point is where we left off last lab. I've provided this starting point in the index.js file in the folder "02-functions" to make sure we all start from the same point.

Over time there have been multiple ways of creating functions but in general there is an old way, and a new way. The old way is using the "function" keyword, and the new way being the "arrow function". We will start with the old and proceed to the new.

## Traditional functions
### **1. Lets start by creating a function wich can greet us.**
In general you create a function, specify what it expects as parameter, and it can potentially return something. Have a look at the provided function who will take care of creating the greeting text for us:

```javascript
function createGreetingFor(name) { // the name is "createGreatingFor" and its parameter is the name
    const baseGreeting = 'Hello'; // this is a scoped variable, meaning you can only use it within the brackets of this function
    return `${baseGreeting} ${name}!`; // return a concatenation of the baseGreeting and the name
}

console.log(createGreetingFor('Marcel')); // prints "Hello Marcel!"
console.log(createGreetingFor('Lucy'));// prints "Hello Lucy!"
```

Now copy this function into the "02-functions\index.js" file (you can overwrite what's there) and run the code to verify it prints both lines and make sure you understand whats happening. Main point here is the scoped variable "baseGreeting". Try to console.log the "baseGreeting" outside of the function and verify the code breaks. 

Also in the example we are directly printing the output of the function to the console. In reality you will probably assign it to a variable and work with this variable somewhere further down the line like so:

```javascript
const name = 'Marcel';
const greeting = createGreetingFor(name);
const welcome = `${greeting}, welcome to this workshop.`; // prints: Hello Marcel!, welcome to this workshop.

```

### **2. You can also call functions from within other functions, like so:**
```javascript
function foo() {
    /// do something
}

function bar() {
    foo()
}
```

Please create a new function called "sayWelcome", which takes as a parameter a persons name and prints to the console: _"Hello <name>!, welcome to this workshop."_. You don't need to return a variable here, just use console.log to print to console from the "sayWelcome" function.

You must reuse the "createGreetingFor" function. Test if your function works by running the program. You can have a look at the solutions folder for an example of a solution, but try it first before you peek.

## Arrow functions
A newer addition since the ECMAScript 2015 specification is the arrow function. This is a different way of writing functions and has its own pro's and con's. For full reference look at [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). The main thing you need to know for now is that the syntax of an arrow function is as follows:

```javascript
param => expression
```

Hence the name arrow function, because it looks like there is an arrow in between the param and its expression.
An example of a arrow function is:

```javascript
(a, b) => a + b // when a = 1 and b = 2, the result would be 1 + 2 = 3
```

Arrow functions can be used inline, but also as a named function. We will now focus on the latter. You will get plenty of inline examples down the road. You have to name an arrow function to be able to reuse it just like the function in the previous chapter. This is an example of a named function:

```javascript
const calculateSumOf = (a, b) => a + b;
```

Or when you need more lines of code: 
```javascript
const calculateSumOf = (a, b) => {
    return a + b;
};
```

Both can be called in the same manner as a traditional function, by name: 
```javascript
const sum = calculateSumOf(1, 2);
console.log(sum) // 3
```
### 1. Assignment: convert functions to arrow functions
Now your assignment will be to convert the current functions "createGreetingFor" and "sayWelcome" to arrow functions and make sure the program still works when you run it. You can find the solution in the solutions folder

So much for functions, lets continue with a bit of basic knowledge about [variables](../03-variables/README.md)