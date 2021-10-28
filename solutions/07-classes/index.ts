// Solution 
class Dog {
    constructor(public name: string, public age: number, public color: string, public furryness: string) {

    }

    public trimDog(newFurryness: string): void {
        this.furryness = newFurryness;
    }

    public printInfo(): void {
        console.log(`My ${this.color} dog is caled ${this.name}, is ${this.age} years old, and is looking ${this.furryness} today.`);
    }
}

const myDog = new Dog('Whiskey', 4, 'brown', 'quity hairy');
myDog.printInfo();
myDog.trimDog('nice and short');
myDog.printInfo();

// Bonus example
class Ship {
    constructor(public name: string, public tonnage: number) {} // just give the ship a couple of properties

    public turnLeft(): void {
        // ...
    }

    public turnRight(): void {
        // ...
    }
}

class SailYacht extends Ship { // Define a SailYacht based on the Ship class
    /**
     * Make sure to add both the parent class its parameters as well as the new parameters
     */
    constructor(public name: string, public tonnage: number, public numberOfSails: number, public length: number) {
        super(name, tonnage); // call to "super" calls the parent class its constructor which has 2 parameters. this is mandatory
    }

    public raiseSails(): void {
        // ...
    }
}

class MotorBoat extends Ship { // Define a MotorBoat based on the Ship class
    constructor (public name: string, public tonnage: number, public horsePower: number) {
        super(name, tonnage);
    }

    public startEngine(): void {
        // ...
    }
}

const rowBoat = new Ship('Tiny tim', 0.1); // You can instantiate the parent class by itself
const myYacht = new SailYacht('Memphis belle', 1.6, 2, 120);
const motorYacht = new MotorBoat('Princess Elena', 2.5, 750);

rowBoat.turnLeft(); // the parent (or superclass) can only turn right or left

myYacht.raiseSails();  // the sailyacht can raise sails in addition to turning right or left
myYacht.turnLeft();

motorYacht.startEngine(); // as you can see a motorboat has different methods again, no way to rais sails, but a way to start the engine
motorYacht.turnRight();

// bonus solution
abstract class Mammal { // made this class abstract, because everyone is a specific type of mammal
    constructor(public name: string, public age: number) {

    }
}

class Cat extends Mammal {
    constructor(public name: string, public age: number, public color: string, public furryness: string) {
        super(name, age);
    }

    public trimDog(newFurryness: string): void {
        this.furryness = newFurryness;
    }

    public printInfo(): void {
        console.log(`My ${this.color} dog is caled ${this.name}, is ${this.age} years old, and is looking ${this.furryness} today.`);
    }
}

class Dolphin extends Mammal {
    constructor(public name: string, public age: number, public numberOfFlippers: number) {
        super(name, age);
    }

    public printInfo(): void {
        console.log(`My dolphin is caled ${this.name}, is ${this.age} years old, and has got ${this.numberOfFlippers} flippers.`);
    }
}