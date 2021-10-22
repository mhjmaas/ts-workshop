# Decisions
Decisions are a simpler topic than arrays or loops so lets make this a quick one. You can imagine you sometimes want to make decisions based on data, thats where "if statements" or "switches" come in.

# If statements
The if statement executes a statement if a specified condition is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). If the condition is falsy, another statement can be executed. Consider the following examples:

```javascript
const myAge = 35;

if (myAge < 30) { // if myAge is less than 20, other possible options are <=, >, >=, == and ===
    console.log('Prime of your life!');
} else {
    // everything else falls into this block
    console.log('It\'s over before you know it!');
}
// also note the "else" block is optional, if you don't need to do anything else, just leave it out...

```
The above code is alreay in the index.js file in this folder. Modify the myAge value to be 29, 30 and observe. now change the operator to any of >=, > or === and observe what happens to the result.

As you can see you every expression that resolves to true will then be executed in the "if" block. You can also compare strings and execute code when they match. However that's when we run into one of the quirks of javascript and type safety. The rule of thumb is if you want to compare for equality always use the triple equals operator (===) instead of double equals (==) like in other programming languages. Double equals converts to the same type first before comparing, where triple equals does not, and that is more advisable to use. Let me illustrate with an example:

```javascript
const number = 1234; // number type
const stringNumber = '1234'; // string type

console.log(number == stringNumber); //true, because they both get converted to the same type first and the values are the same then
console.log(number === stringNumber);  //false, even though the values are the same, one is a string and the other is a number   

console.log(0 == false); //true, because 0 is falsy (whereas 1 and higher is thruthy) and false is falsy
console.log(0 === false); //false, because 0 is a number and false is a boolean.
```

## **Else-if**
You can nest if statements for more complex logic, but you can also use the else-if construct like so:

```javascript
const myAge = 35;

if (myAge < 30) { // if myAge is less than 20, other possible options are <=, >, >=, == and ===
    console.log('Prime of your life!');
} else if(myAge === 30){
    console.log('You are at a turning point in life!');
} else if(myAge > 30 && myAge <= 35) { // you can combine statements using && which is like AND or || which is like OR.
    console.log('Welcome to the twilight zone!');
} else {
    // everything else falls into this block
    console.log('Lets face it, your life is basically over...');
}
```
test the above code in the index.js file and modify the myAge variable again from below thirty until over it until 36 or higher and see how it works..

# Switch statements
If you have a value that can be one of a select number of values you can use the if-else construct like above but there is a better way of doing so using the switch statement:

```javascript
const direction = 'left'; // or straight or right
switch(direction) { // the variable to switch on
  case 'left': // in case of variable value, left: execute this block
    console.log('go left!');
    break; // break execution
  case 'right':
    console.log('go right!');
    break;
  default:
    console.log('go straight on!');
}
```
Copy the code above into the index.js and modify the direction variable to left, right, straight, and some random string like your pets name. Can you explain why at always chooses one of three no matter what you do?

Also remove one of the break statements to see what happens.