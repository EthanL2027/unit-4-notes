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

/* Functions are like RECIPES;
Reliably perform the same set of actions for a consistent result.
PARAMETERS (input) are like ingredients.
RETURN values (output) - are like the completed meal 
*/

// Sandwich-making example of a function
// that requires PARAMETERS and returns data
// (takes input, provides output)

function makeSandwich(bread, filling, sauce){
    // function BODY (procedure, recipe steps)
    let sandwich = filling + "sandwich with" + sauce + "on" + bread;
    return sandwich;
}
// Call a function that RETURNS data
// store the output in a variable!
let burger = makeSandwich("bun", "patty", "ketchup");
console.log(burger);

//TRY the function with different ARGUMENTS (input data)
let caprese = makeSandwich("Skibidi-bread", "sigma-chese", "rizz-sauce");
console.log(caprese);

// *** Selection (CONDITINALS) ***/
// A conditional expression is like a QUESTION
// where a boolean (true/false) is the ANSWER

// conditions that icnlud COMPARISON OPERATORS get EVALUATED and result in true/false

console.log( 2 > 1 );
console.log(  2 ==1   );
console.log(  2 !=1   );

// ASSIGN a comparison result to a variable
let result = ( 5> 4);
console.log(result);

// Comparing STRINGS (text) uses dictionary order
// TRUE if letter is later in order
console.log('z' > 'A');
console.log('Nikita' == 'Danny');

// IF STATEMENTS evaluate a condition
// then execute a block of code if TRUE
let age = 18;
// "is your age equal to 16?"
if (age == 16) {
    console.log("Happy sweey sixteen");
}
else {
    console.log("You can't have a sweet sixteen party");
}

// To test MULTIPLE conditions, use ELSE-IF statements
let year = 2025;
if (age == 18){
    console.log("Congrats on your first time voting!");
}
else if (age > 18) {
    console.log("Go vote!");
}
else {
    console.log("You're too young to vote...");
}