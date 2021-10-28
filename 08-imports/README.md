# Structuring you source code using modules and imports.
Now that we have a basic understanding of how to code, lets see how we can structure our code into different files, so that everythings stays managable. 

In the old days it was really hard to split your code into multiple files so after a while libraries where formed to tackle this problem. In NodeJS you can use Require() to load code from different files, however these days there is a better way to do so which is part of the ES6 standard. This functionality is based around Javascript modules. A module is a piece of javascript code, which can be a class or function or even just a variable. Some background can be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). We will go over the basics in this lab.

## It's all about import and export keywords
In a nutshell, you can make a module available for import by marking it with the export keyword. Have a look at the "players.ts" file combined with the "index.ts" file in the "08-imports" folder. You can see in the "players.ts" file 2 classes are exported as modules. In the "intex.ts" file they are both imported on a single line. It's that easy to use code that has been declared in other files as long as they follow the module syntax using exports. This also the way you can import libraries you have added to your project from a npm registry like npmjs.com.

### The default export
You can also setup a default export like so: 
```typescript
export default Player { // there can only be one default export in a file.
    // content goes here
}
```

You can then import the player like so: 
```typescript
import Player from './players.ts'; // without the brackets

const player = new Player('name', 28); // instantiate in the same way 
```