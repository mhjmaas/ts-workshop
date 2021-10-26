const sayHello = (name: string) => {
    console.log(`Hello ${name}`);
}

const myName: string = 'Marcel';

sayHello(myName);

// Typescript examples
function helloWorld(name: string): string { // define a string parameter, and it should return a string value
    return `Hello ${name}, welcome to this world`;
}

function printHelloWorld(name: string): void { // define a string parameter, but it should not return anything -> void
    console.log(`Hello ${name}, welcome to this world`);
}

const friendsList: string[] = ['Jack', 'Johnny', 'Glenn']; // how to specify a strongly typed array.
