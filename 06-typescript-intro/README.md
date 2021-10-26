# TypeScript introduction and setup

As I hope you've seen JavaScript has everything you need to start programming. It can be quite easy to start with and gives you lots of freedom. However as soon as you start creating applications you will find that as soon as your codebase grows, the need for more structure and strictness also because apparent. This is where typescript comes in. As I've said before this is a superset of JavaScript and any code you have written as plain vanilla JavaScript will also work perfectly in TypeScript. 

## How does typescript work?
In contrast with JavaScript, TypeScript cannot be understood by browsers or node directly. TypeScript was always meant to be converted (transpiled) to JavaScript before running. The transpiler will create optimized javascript code to run in the browser or in a nodejs environment. There are many ways to transpile TypeScript into JavaScript. Some frameworks already do this for you, like Angular, but in our case we are just going to do it ourselves using the library "ts-node".

### Adding libraries to your project
We have already talked about npm and how the package.json works with it. You can easily add libraries (packages) from the npm repository (search for packages here: [NPMJS](https://www.npmjs.com/)) with either npm itself or Yarn.

Both NPM and Yarn do the same thing, they will look for a package in the npmjs repository and add them to your project in the "node_modules" folder and depending on the options you specify it will update the package.json file. Lately Yarn is gaining traction to fullfill this same role because Yarn installs packages faster because it can fetch packages simulteanously. We will be using yarn for the rest of this workshop.

**note**: _never commit the node_modules folder to version control, when someone clones your application from version control it should not have a node_modules folder. You can install all dependencies using either "npm install" or the "yarn" command. This will download all packages and create the node_modules folder. So rule of thumb: if you just cloned a new repo, run "yarn" or "npm install"_

## Installing yarn
Install yarn from npm:
```
npm install --global yarn
```
The --global says to install yarn into your user profile, so you can use it from any folder instead of only the folder in which the package.json resides.

If installation was successful you can run:
```
yarn -v
```
This should sepcify the yarn version and you are good to go.

## Installing typescript support
Now lets get the typescript package installed together with the transpiler "ts-node". Run the following code inside the "06-typescript-intro" folder:
```
yarn add typescript ts-node --dev
```
As you can see you can specify multiple packages as once. When yarn is done, check out the package.json file and verify typescript and ts-node have been added as a "devDependency". Also, when using Yarn, a yarn.lock file is made. This file stores the exact versions of installed packages and is used when resolving dependencies on first install. As you might find out in future the package.json file does not always specify specific versions, but usually a range of versions. The npm version of the yarn.lock file is the package.lock file.

**note:** _there are 2 kind of dependencies, "devDependency" and "dependency". All libraries you use only for development only and are not needed at runtime in production should go in the "devDependency" section. In this case typescript will be compiled to javascript before it is run so these are dev dependencies. If JavaScript was a library you needed to include before you could use it you would include it in the regular dependencies.

## Converting to typescript
Take note of the index.js file already present in the "06-typescript-intro" folder. This is the starting point for today and for now it is still javascript. Try and run the application using either: npm start or node index.js. It should work and print my name. Feel free to modify it to your name. :)

If we want to convert this to TypeScript the process is simple. Lets start by renaming the file to index.ts.

Now we can try to run transpile and run the typescript code by using the "npx" tool to quickly invoke a tool in our library:
```
npx ts-node index.ts
```

As you can see you get a couple of errors now. You can see some type checking is happening already on the "name" paramter for example. It doesn't allow to have a variable of any type. You have to specify its type explicitly. You can customize the behaviour of typescript. This is done through a "tsconfig.json" file. You can for example disable the check for implicit any type if you like. Because we have not tsconfig.json file yet we can generate it easily. Run the following command from the root of the "06-typescript-intro" folder:
```
npx tsc --init
```
Have a look in the generated file and as you can see there are very many options, and they are nicely commentated out so you can add them in when you want to.

No lets try the "npx ts-node index.ts" command again to see what happens with a default typescript configuration. 
```terminal
PS C:\Users\marce\Developer\nn\workshop\ts-workshop\solutions\06-typescript-intro> npx ts-node index.ts
⨯ Unable to compile TypeScript:
index.ts:1:19 - error TS7006: Parameter 'name' implicitly has an 'any' type.

1 const sayHello = (name) => {
        
```
There is only one error left, lets explicitly type all our variables to get rid of these errors. Modify the line in the index.ts file as such:
```typescript
const sayHello = (name: string) => {
```
And for good mesure lets do the "myName" variable like this as well:
```typescript
const myName: string = 'Marcel';
```
The reason why it did not complain about the myName variable before was that it could defer myName is a string because we assigned a string to it. If we had simply declared it without a value we would have gotten an error there as well.

Finally, can you update the "npm start" script in the package.json to run the new ts-node command as well?

And just like that we migrated to TypeScript. That wasn't so bad right? Feel free to continue to [Classes](../07-classes/README.md) or have a look at some typescript examples below:

## Bonus: typescript examples:
```typescript
// Typescript examples
function helloWorld(name: string): string { // define a string parameter, and it should return a string value
    return `Hello ${name}, welcome to this world`;
}

function printHelloWorld(name: string): void { // define a string parameter, but it should not return anything -> void
    console.log(`Hello ${name}, welcome to this world`);
}

const friendsList: string[] = ['Jack', 'Johnny', 'Glenn']; // how to specify a strongly typed array.
```