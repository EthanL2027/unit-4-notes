/*This is a MULTI-LINE comment in JS
Below is an example of a JS STATEMENT
(instructiion/command)
Statements end with a SEMICOLON (;)
 */
console.log("Jalen Brunson");

//This is a SINGLE-LINE comment
//console.log is a FUNCTION to display imformation
console.log("this is the console/output");

//DECLARE a VARIABLE to hold data
// Use the LET keyword to create the variable
let pokemon;

// ASSIGN a VALUE to that variable
// Like packing an item into a box
pokemon = "Pikachu";

// Can DECLARE + ASSIGN in one statement
let name = "Ethan"

// DECLARE a new variable (buying a box)
let luckyNumber;

// ASSIGN a value to that variable 
// (putting an item in a box)
luckyNumber = 7;

// DECLARE + ASSIGN in one statement 
let worstNumber = 13;

// you can "PASS IN" a variable into a FUNCTION
console.log(luckyNumber);

// Can Change the value stored in a variable
let mood = "Happy";
console.log(mood);
mood = "Sad";
console.log(mood);

// Can COPY the value from one variable into another
let isHappy = true;
let isThrilled;
isThrilled = isHappy;
console.log(isThrilled);

// MATH OPERATIONS
let score = 0;
score = score + 5;
console.log(score);
score = score -10;
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);

//Can combine operations, evaluation follows PEMDAS
score = (score * 7 / 5) ** 2 - 10 + 5;
console.log(score);

// Working with STRINGS (words/sentences/characters)
// QUOTES always go adound string LITERALS
let greeting = "Hey " + "Skibidi";
// The PLUS SIGN merges (CONCATENATES) strings
console.log(greeting);

// Combine literal strings with VARIABLES
let username = "King_Hill69"
greeting = "Hello " + username;
console.log(greeting);

// Can CONCATENATE inside a function
console.log("Goodbye," + username + "!");

// Converting to strings
console.log(4+5); // 9 (added numbers)
console.log("4"+5); // 45
console.log(4+'5'); // 45

// SPECIAL OPERATORS: Increment/Decrement
let counter = 0;
counter = counter + 1; // LONG way
counter++; // SHORTCUT
console.log("Count:" + counter);
counter--; 
console.log("count:" + counter);

/* FUNCTIONS:
Reusable sets of code statments that perform a specific task or process
*/

//Example of CALLING (using) a function
console.log("hello");

//Example of DECLArING (creating) a function
function skincare(){
    // 3 statements (steps/instructions)
    console.log("1. Double cleanse")
    console.log("2. Apply toner")
    console.log("3. Moisturizer")
}
// To CALL (run) our function, say its name
skincare();
skincare(); // Repeated the routine again!