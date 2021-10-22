# Hello World
Traditionally any programmer starts its first foray into programming by writing or printing "Hello world". In our case we will use NodeJS to print a line to the console.

## 3 Important points about NodeJS.
NodeJS can run on any machine as long as it is installed on this machine. So it can run on Linux, Mac, Windows etc. There a 3 things to take note of.
1. NodeJS code can run javascript code written for web applications. For example you can use an ajax request to get data from a backend service both from a browser based javascript application as well as a NodeJS service. However you cannot always run any JavaScript code written for NodeJS in the browser. This is mainly when you are using the I/O operations api. This is logical since in the browser (client) you do not have access directly to files like you do have when you are on the server.
2. NodeJS has an event-loop. In essence this is a never ending loop in which NodeJS checks if there is some work to be done. This work is provided by your code. This means a NodeJS application is always running until you stop it, or it crashes.
3. NEVER BLOCK THE EVENT LOOP. This is a very important rule. NodeJS is single threaded. This means every piece of code is executed in sequence. When you write a line of code which does a very expensive computational task it can take a long time. During this time the application will not proceed to the next line until the previous line / task is done. The application seems to hang at that time. This is called "blocking the event loop". So always try to write lines of code that can execute quickly. There are ways to also do computational expensive tasks in NodeJS without blocking the event loop. Thats where synchronous and asynchronous comes in. We will cover this later on in the work shop. For more info look here: https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/


## Lets get started
### **1. Lets install NodeJS and NPM first.**
Go to https://nodejs.org/en/ and download the installer for your machine. This will install both NodeJS so yo can run javascript code on your machine as well as the package manager to easily add libraries to your application.
### **2. Run **npm init** in the folder in which this readme resides. (01-hello-world)**
Provide the name **hello-world** and accept all other defaults. (you can just press enter to use the default). This results in a package.json file in this folder. The package.json is the first file you should look at when you are working with a javascript application. It gives you basic information about the application, but more important also provides a number of scripts you can run and specifies the libraries that are being used by this application. More about this later.
### **3. Lets create the "index.js" file in the "01-hello-world" folder.**
You might have already spotted a reference to this file in the package.json. It is assumed the entry point for an application is "index.js", just like a website. You can change this if you like.
### **4. Write the following code:**
```javascript
console.log('Hello world');
```
console.log is a command which alwas logs whatever string you provide to it. Depending on where you run the javascript code it will log to the "out log" (for NodeJS) or the browser console for client side javascript. You can also use "console.warn('')", "console.error('')". These speak for themselves. By the way, you can choose single or double quotes for strings. As long as you do it consistently. 

### **5. Run your code**
Open a terminal in the "01-hello-world" folder and run the following command:"
```
node index.js
```
You should be greeted in the terminal with your console.log message

### **6. Modify the code to greet yourself.**
For me it should print: "Hello Marcel!"

### **7. That was easy right?**
Now lets see if we can make it more variable. We are going to introduce a variable to hold your name, or any name for that matter. We are going to add a variable:
```javascript
var myName = 'Marcel'; 
```
You can concatenate strings easily by using the + sign. So for example "Marcel" + "Maas" makes a string: "MarcelMaas".
Please modify the code you already have to use the variable "myName" instead of hard coding it. So, you should be able to get the same output as before, but when you change the variable name to 'John' it should say "Hello John!" when you run the program. Also the equals (=) sign assigns a value to a variable and has nothing to do with equality. This topic will be discussed later on.

### **8. Better JavaScript syntax, var vs let and const**
The code we have just written will work on every browser and NodeJS version. This is because it uses syntax based on very old ECMAScript specification. To bring our code into te present we need to change 2 things. The first is the keyword "var" which is used to denote a variable. Instead of using "var" we use "let" or "const" to denote a variable. You should use "let" when you create a variable which assignment you want to change later on in the code. When an assignment to a variable will not change you should use a "const" variable. A couple of examples to demonstrate can be found below Note the use of comments in the code by using the // syntax.
```javascript
const myName = 'marcel'; // use const because it hasn't changed, also called "immutable"
console.log('hello ' + marcel);
```

```javascript
const myName = 'marcel'; 
myName = 'Jack'; // not allowed to change assignment (we are assigning 'Jack' to myName which is a const), app will crash here
console.log('hello ' + marcel) ;
```

```javascript
let myName = 'marcel'; 
myName = 'Jack'; // alllowed to change assignment because myName is a let
console.log('hello ' + marcel) ;
```

The reasoning for this split is that a "const" is more efficient to process and it will speed up the application compared to a "let".

Please change your code to use either a "const" or "let" and comment why you have done so in the code.

### **9. Better JavaScript syntax, string interpolation**
The second new syntax we need to use is the way we concatenate the string. Right now we use the + sign to concatenate strings. These days there is a more efficient way of doing this which is also better readable. It is called string interpolation. Instead of "Hello " + myName, we can do the following: \`Hello ${myName}` Note the use of apostrophe instead of quotes and the dollar sign with brackets to use a variable.
Now modify your code to use string interpolation instead of using the + sign.

Congratulations, you have now created your first up to date hello world in NodeJS. You can either continue with the [JavaScript Functions](../02-functions/README.md) or continue reading for some more in depth info. I would at least recommend the first tip: **Using npm as starting point for your application**

## Additional tips
### **Using npm as starting point for your application**
Right now you are simply running node yourself and providing the same script in the commandline. A best practice is to keep npm as the starting point for all the things you possibly want to do in a project. All scripts npm can act on are configured in the package.json file. There are 2 standard scripts with a shortcut to start them quickly, namely "npm start" and "npm test". All of these "npm start" should be used to quickly start your application in development mode with no questions asked. "npm test" should run unit tests. You can add unlimited scripts yourself in the package.json and you can call using "npm run <script-name>". For example "npm start" is the same as "npm run start". To make life easy for us, lets add the "start" script in the package.json. Modify the scripts portion of the package.json as such:

```json
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
When you run the command "npm start" or "npm run start" you will see the same output as before.

### **More about const and let**
I have just explained how const and let work and how a variable denoted by a const is immutable. This only goes for the assignment of the variable. I will dive deeper into how assignments work in a later lab, but for now consider the following code which has an assignment of an object with 2 properties:

```javascript
const myName = {
    firstName: 'Marcel',
    lastName: 'Maas'
};

console.log(`Hello ${myName.firstName} ${myName.lastName}!`); // uses the dot-notation to get to properties of an object.
```

The above code will say "Hello Marcel Maas" and work properly. However it is also valid to do the following:

```javascript
const myName = {
    firstName: 'Marcel',
    lastName: 'Maas'
};

myName.lastName = 'Terpstra'; // this is allowed

console.log(`Hello ${myName.firstName} ${myName.lastName}!`); // prints: "Hello Marcel Terpstra"!
```

So why does this work while myName is immutable? Thats because we have changed the contents of the assignment, namely the lastName property of the object, not the entire object. The following code would break:

```javascript
const myName = {
    firstName: 'Marcel',
    lastName: 'Maas'
};

myName = {
    firstName: 'Marcel',
    lastName: 'Terpstra'
}; // This breaks the application. We create a new object and assign it to myName, instead of modifying the contents of the object.

console.log(`Hello ${myName.firstName} ${myName.lastName}!`); // prints: "Hello Marcel Terpstra"!
```

### **Whats with this semicolon after everything you write?**
The semicolon ( ; ) specified where every command ends. It is not mandatory because javascript will assume the end of a line of code is also the end of the command, but it is a best practise to always write it. A couple of examples;

```javascript
const myName = 'Marcel'
console.log(`hello ${myName}`) // this code works because every command is on a new line
```

```javascript
const myName = 'Marcel' console.log(`hello ${myName}`) // this code breaks
```

```javascript
const myName = 'Marcel'; console.log(`hello ${myName}`) // this code works because of termination of the first command by semicolon
```

```javascript
const myName = 'Marcel'; // This is a best practise, its more readable and fool proof
console.log(`hello ${myName}`); 
```