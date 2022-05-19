/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

//  

// Arrow Function With Parameters

const addNumbers = (a, b) => {
    // Code Block 
    return a + b
}

let sum = addNumbers(3, 4)
console.log (sum) 

// Single Line Arrow Function With Parameters
// const addNumbers2 = (a, b) => (a + b); also valid
const addNumbers2 = (a, b) => a + b;
let sum2 = addNumbers2(5, 5);
console.log (sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello mates')

const sayHello = () => console.log ('hello')
sayHello()
// Returning Multiple Lines
const multipleLines = () => (
    `<p>
        this is a multiple line string
    </p>`
)
console.log (multipleLines())