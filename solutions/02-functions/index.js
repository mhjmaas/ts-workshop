// answer to question 2 for traditional function.
function createGreetingFor(name) {
    const baseGreeting = 'Hello';
    return `${baseGreeting} ${name}!`;
}

function sayWelcome(name) { // get the name to provide the welcome to
    const greeting = createGreetingFor(name); // use the createGreetingFor function and pass through the name
    const welcomeMessage = `${greeting}, welcome to this workshop.`; // create the final message
    console.log(welcomeMessage); // print it to console, this line and the previous could be done in a single line, but this way its cleaner.
}

sayWelcome('Marcel'); // actually call the function or nothing will happen.
// end of answer to question 2 for traditional functions





// arrow function assignment solution
const createGreetingFor = (name) => { // actually only this line needs changing
    // I have provided an even shorter version of this arrow function below.
    const baseGreeting = 'Hello';
    return `${baseGreeting} ${name}!`;
}

const sayWelcome = (name) => { // actually only this line needs changing
    const greeting = createGreetingFor(name); 
    const welcomeMessage = `${greeting}, welcome to this workshop.`; 
    console.log(welcomeMessage);
}

sayWelcome('Marcel'); 







// more consice createGreetingFor method using arrow function:
const createGreetingFor = (name) => `Hello ${name}!`;
