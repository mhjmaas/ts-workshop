# ts-workshop
This is a beginner JavaScript and Typescript workshop which introduces you to the basic concepts of JavaScript and TypeScript. You can do this workshop standalone or use it in combination with a training. This is by no means an in depth explanation but more a workshop to get you up and running quickly in understanding JavaScript and being able to write some of it.

## History of JavaScript
Before we begin a bit of history. JavaScript was introduced in december 1995 to the then dominant browser Netscape Navigator to be able to add dynamic content to until then static html websites. In 1996 JavaScript was submitted to Ecma International which led to the official release of the first ECMAScript language specification. This is the standard specification all browsers adhere to.

JavaScript has was named so because it has somewhat similar syntax as Java and they tried to ride on the popularity of Java itself. However it has nothing to do with Java and works quite differently. 

An important point to note is that JavaScript is an interpreted language. This means it does not get compiled into byte-code which machines can understand. Instead it is interpreted by an engine in the browser. This makes it inherently slower than pre compiled languages like C++. Because of this interpretation it is very flexible and is easy to start working with. 

However in these early years (until 2004) javascript was mainly used for creating interactivity on websites and flashy effects and there was no more growth in client-side scripting. Client side means that code runs on the client, in this case the PC that runs the browser, instead of server-side, which would run code on the server before sending it to the clients browser like PHP.

When the Mozilla corporatoin released FireFox in 2004 it took a lot of share from Internet Explorer ending it's dominance and paving the way forward for JavaScript. In 2005 a white paper was released introducing Ajax which is a way to load data in the background of web applications using JavaScript. This paved the way for may popular frameworks like JQuery, Prototype, Dojo etc which skyrocketed the popularity of JavaScript which by itself is rather bare-bones.

In 2008 chrome was launched and with it came a vastly improved JavaScript engine called V8. This introduced a form of compilation called JIT (Just in Time) compilation. This is just like the name says, a quick compilation into code which the chrome browser could execute much faster than other javascript interpreters. Other browsers where quick to implement their own JIT compiler. This meant performantclient-side applications in the browser where now possible. 

### History - NodeJS
In 2009 the first version of NodeJS was released. Up until this moment it was only possible to run in a browser. NodeJS makes it possible to run Javascript on any machine standalone. It uses googles V8 engine with an event loop and a low level I/O operations api so you can work with files on the host machine for example. Because of NodeJS, millions of web developers could now also transfer their skills to the server-side world. NodeJS is bundled these days with NPM (Node Package Manager) which is the largest software package registry in the world. Using NPM you can easily use libraries made by others in your application.

## A note about Javascript, ECMAScript and Typescript
JavaScript is notoriously famous for its quirks and sometimes weird construct which can lead to unexpected results. As said before JavaScripts adheres to the ECMAScript specification. There have been multiple releases of ECMAScript over time which in term removes some of these quirks and issues. The latest specification is ECMAScript 12 released in 2021. The main point here is if you write javascript for older browsers you need to make sure you use the syntax this browser understands. For example you cannot use syntax defined in ECMAScript 11 in IE11, because IE11 was released before ECMAScript 11 was released. Thankfully TypeScript can help here. TypeScript is a syntactic superset of javascript and adds optional typing to javascript. The main point for Typescript will reveal itself in this workshop later on. For now it is important to know that Typescript cannot be run natively in the browser or NodeJS and always needs to be compiled to Javascript. Because of this there are tools you can use to target a specific ECMAScript specification. In a green field project where you are starting out it is always advisible to write code in TypeScript instead of JavaScript because with TypeScript you can write better understandable and maintainable code. The default extension for JavaScript is .js and for TypeScript it is .ts.

## Writing your first application
Lets move on quickly to the first hands-on part after this dreary history lesson: [01-hello-world](01-hello-world/README.md)

## Solutions
All solutions can be found in the solutions folder. duh ;)
