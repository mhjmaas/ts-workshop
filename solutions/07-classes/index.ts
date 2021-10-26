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
        this.name = name; // this.name refers to the name property on class level, while the name is the provided name in the constructor
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