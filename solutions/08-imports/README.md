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
import Player from './players.ts'; // Notice no brackets around Player

const player = new Player('name', 28); // instantiate in the same way 
```

### Specific imports
Have a look at the "players.ts" class. Here you see 2 classes being exported, namely the "Player" and the "Referee". They have no "default" keyword. These exports can be exported as follows:

```typescript
import { Player } from './players.ts'; // This time we use the brackets around the player

const striker = new Player('Jack', 20);
```

Or import multiple items at once
```typescript
import { Player, Referee } from './players.ts'; // This time we use the brackets around the player

const striker = new Player('Jack', 20);
const ref = new Referee('Chris', 31);
```

## Excercise
Note all the various .ts files in the folder for this lab. They work together to simulate a match with goals and yellow and red cards. Try it out by commenting in the last line in the index.ts file and calling "npm start".

I would like you to order the source code a bit better by creating a subdirectory with all source files in it called: "src". This is a best practise, but the exact format of the entire project is usually based on the frameworks you use in combination with the agreements within the team. Now make sure to create a folder structure like below. You have to update the imports in all the files to make sure the application keeps running. Also update the package.json file's run script. Also as you can see you need to split the "players.ts" file 2 separate files. One with the base player and one with the referee.
```
--| assets
  |-- availablePlayers.json
  | node_modules
  | src
  |--| controller
  |  |  |-- gameController.ts
  |  |  |-- matchController.ts
  |  |  |-- playerController.ts
  |  | model
  |  |  |-- player.ts
  |  |  |-- referee.ts
  |  |-- index.ts
  |-- package.json
  |-- README.md
  |-- tsconfig.json
  |-- yarn.lock
```
You can always have a look at the solution if you are stuck. Also feel free to make any modification to make the simulation better or more fun.

When you are done you can continue to the [next part of this workshop](../09-use-case/README.md)