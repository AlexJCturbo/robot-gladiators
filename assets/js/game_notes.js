/*
window. referes to the browser itself and allows to "communicate" with it.
The window object is supported by all browsers.
It represents the browser's window.

All global JavaScript objects, functions, and variables automatically
become members of the window object.

Global variables are properties of the window object.
Global functions are methods of the window object.
Even the document object (of the HTML DOM) is a property of the window object
E.g. 
window.document.getElementById("header");
is the same as:
document.getElementById("header");
*/

// There are no official standards for the Browser Object Model (BOM).
// alert() performs an action (pops an alert in the browser)

/*
The alert function is built in to the browser.
JavaScript functions must include parentheses, even if there's nothing between them.
When the browser reads the function name and sees the parentheses, it knows to execute the function.

Placing content between the parentheses is called
passing an argument into a function.

; (semicolon) tells the browser that a particular line is completed
and any code after it is a new piece of code.
Each piece of code, separated by semicolons, is known as an expression.

*/
//window.alert("This is an alert! JavaScript is running");

// Creating the "fight" function
// The code between {} curly braces is called a code block.

/*
function fight() {
    window.alert("The fight has begun");
}
fight();
*/

//window.prompt("What is your robot's name?")

/*
A collection of functionality and data that is accessed through one "name"
(for example, window) is an object. To access an object's data, we name
the object, then use a period followed by the property name or function
name we're looking for.
Using a period between the object name and property is called dot notation.
*/

/*
So the window.prompt() instructs the browser to find the window object,
then find and execute the prompt() function that belongs to the window object.
When a function like prompt() belongs to an object, it's called a method.
*/

/*
Even though our JavaScript code can access these properties, the window object
isn't actually part of the JavaScript language. We can use it because browsers
have built this functionality into their software and put it behind the name
window. This is called a web application programming interface (API),
which we'll learn more about throughout this project and in the coming weeks.
*/

//A minimal viable product or MVP is the simplest version of an app
//We approach this project as an MVP

//Starting the PROJECT
//Alert players that they're starting the round.
//window.alert("Welcome to Robot Gladiators!");

//Defining some variables
let playerName = window.prompt("What is your robot's name?");

var playerHealth = 50;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);


/*
A variable (var, let) is a named location for a value that gets stored in
the browser's memory when a program is run. Because the data coming from
the prompt is user-driven, the value is unpredictable. Giving the data
a variable name (in our case, playerName) allows us to refer to it
consistently by just calling on that name.
*/

/*
An alert isn't ideal to test and debug code. console.log() is the prefered
method to test code.
*/
//window.alert(playerName);

console.log("Your robot's name is " + playerName);
/*
In string concatenation, we can write out a string as we typically would,
but in order to include variable data, we need to close the string.
To do that, put a plus sign + after the closing quotation, then write the
variable name.
*/

// console.log object
console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);



// This is a String data type; it must be wrapped in
// double quotes (" ") or single quotes (' ').
var stringDataType = "This is a string, which is a fancy way to say text";

// This is a Number data type; it can be an integer (whole number)
// or have decimals (floated numbers).
var numberIntegerDataType = 10;
var numberFloatDataType = 10.428;

// This is a Boolean data type, which can only be given a value of true or false.
var booleanDataType = true;


//Resuming PROJECT, enemy variables
//Array of robots
let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble',]
let enemyHealth = 20;
let enemyAttack = 12;

/*
JavaScript array is a type of object. It has some useful built-in properties and methods.
E.g. the length property of the Array object contains the number of elements in the array.
*/
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

/*
For loop: a type of statement called control flow that enables us to loop through statements,
like arrays, no matter its length.

for ([initial expression]; [condition]; [increment expression]) {
    statement
}

A control flow is a control structure or compound statement, that determines the order in
which the computer executes statements in a JavaScript file or script, which normally runs
sequentially from the first line to the last line. Control flow statements, such as
conditional statements or for statements, change the control flow based on the
statement's conditions.
    */
for(var i = 0; i < 3; i++) {
    console.log("Counting i's " + i);
    //console.log("Counting i's", i);
}


//Resume PROJECT
let fight = function(enemyName) {

    /*The while loop is a nother type of control flow statement that loops or repeatedly
    executes a statement while a condition remains true. Like the for loop, the while loop
    repeatedly executes a code block only if a condition remains true.
    E.g.
    while([Condition]) {
        statement
    }
    */
   //Added && (and operator)
    while(enemyHealth > 0 && playerHealth > 0) {
        //Ask player if he/she wants to figth.
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "Fight" or "Skip" to choose.');

        //Skip, using or operator || to compare different ways to write skip
        if (promptFight == 'SKIP' || promptFight == 'Skip' || promptFight == 'skip'){
            window.alert(playerName + ' has chosen to skip this fight!');
            //window.confirm is a built-in browser function that asks the user for input and stores their
            //response in a variable. Ir requires a simple "OK" or "Cancel" answer.
            let skipConfirm = window.confirm('Are you sure you would like to quit?');
            //If yes, leave the fight
            if(skipConfirm){
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                playerMoney = playerMoney - 8;
                console.log("playerMoney", playerMoney);
                break;
            }
            //If no, ask again by running fight() function again
            else {
                fight(enemyNames[i]);
            }
        }

        //Fight, using or operator || to compare different ways to write fight
        if (promptFight == 'FIGHT' || promptFight == 'Fight' || promptFight == 'fight'){
            //Substract playerAttack from enemyHealth, update result in enemyHealth
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaning.');

            //Condition used to check if enemy is alive
            if (enemyHealth <=0){
                window.alert(enemyName + ' has died.');
                playerMoney = playerMoney + 20;
                playerHealth = playerHealth - enemyAttack;
                window.alert(playerName + ' has ' + playerHealth + ' health left.');
                break;
            }
            else {
                window.alert(enemyName + ' has ' + enemyHealth + ' health left.');
            }

            //Substract enemyAttack from playerHealth, update result in playerHealth
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaning.');

            //Condition used to check if player is alive
            if (playerHealth <= 0){
                window.alert(playerName + ' has died.');
                /*
                We need to add a way to stop fighting after meeting playerHealth <= 0.
                JavaScript has the keyword 'break' that can be used just for this purpose. The break
                keyword allows us to exit the current loop.
                */
               break;
            }
            else {
                window.alert(playerName + ' has ' + playerHealth + ' health left.');
                fight(enemyNames[i]);
            }
        }

        //Wrong input from user
        else {
            window.alert('You did not select "Fight" or "Skip". Please try again.');
            fight(enemyNames[i]);
        }
    }
}

/*
Pseudocode:
1. Game States
2. WIN player defeats other robots --> fight all robots --> defeat them all
3. LOSE player health is zero or less- Add combatants to the battle using arrays.

Additional Pseudo Code
- Fight enemy-robot combatants using for loops.
- Fight each combatant using function arguments.
- Battle the combatants until defeated using a while loop.
- Improve the player's game experience.
*/

//Resume PROJECT
for(var i = 0; i < enemyNames.length; i++){
    //Using an if statement to check if playerHealth > 0
    if (playerHealth > 0) {
        //Increasing the iterator by one allows the round number to be calculated.
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + " .");
    }
    else{
        window.alert('You have lost your robot in battle! Game Over!"');
        break;
    }

    //Reseting health of different robot enemies
    let pickedEnemy = enemyNames[i];
    enemyHealth = 20;

    debugger;
    //Call fight function with enemy-robot
    fight(pickedEnemy);

    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index.");


}

/*
Arrays are designed to store data as a list. In JavaScript, there are two types of data:
primitives and objects. Primitive data is data that only holds one value, such as a
string, number, or Boolean. Objects are a looser term for a data type that can store
more than one value of data, arrays being one of them.
*/

/*
Primitive data types:
Boolean, true or false (yes/no)
Null, empty or absence of value (0)
Undefined, undefined (?)
Number, numeric value up to 2^53-1
BigInt, Numeric value over 2^53-1
String, textual data that cannot be changed
Symbol, key of an object property
*/

/*
- Pseudocode the steps or the game logic. Pseudocode is a plain-language description
of the steps that an algorithm or application must complete.
*/

/*
There are two ways to create a function in JavaScript:
Function declaration: when we create a function using the function keyword first.
E.g.
function fight() {
  window.alert("Welcome to Robot Gladiators!");
}

Function expression: This is when we create a function by assigning it to a variable.
E.g.
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};
*/

/*
Variable names have different meanings on the left and right of an assignment
operator. Listing the variable on the left side means we'll store data to
that variable, and listing the variable on the right side means we'll use
the actual value that variable holds at that moment.
*/



/* IMPORTANT
Parameters often get confused with arguments because their syntax is similar.
The main distinction between them is their purpose in the function. In the
following function expression, a parameter serves as a variable placeholder
that indicates how the variable will be used in the function. Because the
parameter is only used for the scope of the function, its name isn't
particularly important—but it typically relates to the purpose of the variable,
as you can see in the following code:

var "name" = function (parameter)
var wash = function(soapType) {
 console.log("I wash with " + soapType);
};

When we call the wash() function, we can enter a type of soap into the argument.
The argument is used when a function is called with a value as an input.

"functionName"("argument");
wash("Irish Spring"); //=> I wash with Irish Spring, this will be displayed in the console.
*/