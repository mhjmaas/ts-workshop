# Classes / Object Oriented Programming
Welcome to object oriented programming. In this lab we will be focussing on classes. Classes are a big part of object oriented programming. Up until now we have mainly been writing a couple of scripts with some reuse in the form of functions. With object oriented programming or OOP, we mainly start working with Objects, objects that contain functions that are related to that objects main function. You can read entire books about OOP but for the sake of keeping things short and concise I'll try to explain by leading by examples.

## Friends and cats and dogs
For the last couple of labs we have been talking about names, friends, cats and dogs. These are all objects in real life and can be treated as such in the programming world as well. You define an object using a "Class". Consider the following 2 objects defined in classes and read the comments for explanation about what is what:


**A person object**
```typescript
class Person { // a class definition always start by specifying the "class" keyword, and the name of the class starts with uppercase.
    
    /**
     * What follows here are class properties, so these make up the information the object can hold.
     * These properties (and methods) are either public or privately accessible
     * Public or Private determines if this variable or function can be used both inside or outside its class.
     * Public properties and method can be used both inside and outside its class
     * Private properties and  can only be used inside its class
     */
    public name: string; 
    public gender: string;
    private birthDate: Date;

    /**
     * The constructor is a special kind of funtion that runs when creating the instance of the class. So only once, and 
     * as you can see it allows you to set the initial values of the class
     */
    constructor(name: string, gender: string, birthDate: Date) {
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
    }

    /**
     * A public method, that allows to get your age in years, accessible from both inside and outside the class
     */
    public getAge(): number {
        const today: Date = new Date();
        const age: number = today.getFullYear() - this.birthDate.getFullYear(); // not the most accurate way, bit it will do for now
        return age;
    }

    /**
     * A private method, which is only allowed to be accessd from inside the class, like you see done in the
     * printInfo method
     */
    private isAllowedToDrink(): boolean {
        if (this.getAge() >= 18) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Another public method, which uses both other public and private methods to be able to print 
     * a line of information about this instance.
     */
    public printInfo(): void {
        const age = this.getAge();
        const allowedToDrink = this.isAllowedToDrink();
        console.log(`${this.name} is a ${this.gender} and ${age} years old, thus${allowedToDrink ? ' ' : ' NOT '}allowed to drink`);
    }
}

/**
 * Here you see how a class is "instantiated" by providing the information the constructor needs, using the "new" keyword.
 */
const marcel = new Person('Marcel Maas', 'male', new Date(1986, 2, 18)); 
const lizzie = new Person('Lizze Jones', 'female', new Date(2005, 11, 3));

// call a public method on the instance of the class
marcel.printInfo();
lizzie.printInfo();

// so you cannot do marcel.isAllowedToDrink() here... because it is private
```

**A game object**
```typescript
class Game {
    /**
     * This constructor is a shorthand version of creating class properties and populating them using the constructor
     */
    constructor(private running: boolean, public score:number) {
    }

    public setScore(score: number) {
        this.score = score; // once again, this.score refers to the class level property score, while the score refers to the value provided in the method
    }

    public start() {
        this.running = true;
        this.score = 0;
    }

    public end() {
        this.running = false;
    }

    public printStatus() {
        if (this.running) {
            console.log(`The game is running and the score is: ${this.score}`);
        } else {
            console.log(`The game has ended with a score of ${this.score}`);
        }
    }

}

const game = new Game(true, 0); // create instance of the game
game.printStatus();
game.setScore(5);
game.printStatus();
game.end();
game.printStatus();
```

As you can see you can completely think of your own objects and you control which methods are made available on the instance of the object. When you use framworks like Angular or React there are usually more methods yo can define that function like the constructor. For example a method called "onDestroy" that runs when the instance of the object is deleted. These are called lifecycle methods. You do not need to instantiate every class property in the constructor, but only those you need to function correctly. For example we could completely leave out both the "running" and "score" variables from the constructor. You could then set them using setScore and respectively setRunning methods. However you cannot use the shorthand methode as displayed in the "Game" class anymore and just declare them like on the "Person" class.

Now onwards to an excercise:

## Excercise
Create your own class called "Pet" and describe either the pet you have or you would like. It should at least have a name and a type (like Cat or Dog). But you are allowed to think of more properties, like age or furryness. Hower you have a couple of requirements:
- The name and type should be set using constructor, (either shorthand or old-school fully declared)
- There should be a way to modify the extra properties you add, like furryness because you have sent your dog to te barber shop or something. (it would not be logical to modify the name or type, cats cannot become dogs all of a sudden)
- There should be a way to print the information about your pet to the console.

### **Bonus excercise**
Can you use inheritance to extract generic properties to a superclass "Mammal" which holds the name and type and create more specific subclasses like a "Cat" or "Dog" or "Dolphin" object with specific properties for "numberOfLegs" and "landOrSeaBased". For more information read the bonus section about inheritance.

## Bonus: inheritance
Now this is where you can learn about another power of OOP, called inheritance. The main point of inheritance is you can ...