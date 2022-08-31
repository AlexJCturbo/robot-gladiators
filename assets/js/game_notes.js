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
//Alert players that they're starting the game.
window.alert("Robot Gladiators!");

//Defining some variables
//var playerName = window.prompt("What is your robot's name?");
//var playerHealth = 100;
//var playerAttack = 10;
//var playerMoney = 10;


// function to generate a random numeric value
let randomNumber = function(min, max){
    let randomValue = Math.floor(Math.random()*(max - min + 1) + min);

    //As we write our own methods and functions, they can optionally give something back using a return statement.
    return randomValue;
};

/*
The return statement actually serves two purposes. Yes, it returns a value, but it also
ends function execution right then and there. Consider the following example:
    var doubleIt = function(num) {
        console.log("beginning of function");
        var double = num * 2;
        return double;
        console.log("end of function");
    };

    var newNumber = doubleIt(5);            //is now 10

The second console log, "end of function", never happens because the function has returned,
or ended, before it reached that line. It's similar to using a break statement in a for or while loop.
*/

/*
The following code shows an example of a generic function that will catch incorrect responses:
    var test = function() {
        var response = prompt("Question?");
        if (response === "" || response === null) {
            window.alert("You need to provide a valid answer! Please try again."); 
            test();
        }
        return response;
    }

A key statement in this function is the RECURSIVE call, test(), after the alert() in the
conditional code block. This is known as recursive because the function calls itself.
It creates a loop that constantly calls itself as long as the conditional statement remains true.

Like while loops, recursive functions must pay special attention to the conditional statement
to break the loop. Otherwise, a STACK OVERFLOW ERROR will occur, also known as an INFINITE LOOP.
*/


//Function to set name
let getPlayerName = function(){
    let name = '';
    while(name === '' || name === null){
        name = prompt('What is your robot\'s name?');
    }
    console.log("Your robot's name is " + name);
    return name;
}


//Replacing player variables a for player object
let playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,

    //Because reset() is a method that belongs to the playerInfo object, we need a way for the method to self-reference its owner.
    //this makes reference to the object it is part of.
    //Using this gives us access to all of the object's properties and its methods, too!
    //You can think of it as, "this refers to THIS object."
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = randomNumber((10 - 3), 10);
    },
    refillHealth: function(){
        if(this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if(this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }
};
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
console.log("Your robot's name is " + playerInfo.name);


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

console.log("Your robot's name is " + playerInfo.name);
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
let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
//var enemyName = "Roborto"

//By multiplying Math.random()*60, we've now specified a random range from 0 to 59.xx
//Math.random() will never be 1, so we would never get an even 60
//let enemyHealth = Math.floor(Math.random()*60);

//Math.random()*21 will give a random decimal number between 0 and 20.xx.
//Math.floor() will round this number down, so now the range is a whole number between 0 and 20.
//Adding 40 to the generated number we have our upper limits from 20 to 60.
//enemyHealth = Math.floor(Math.random() * 21) + 40;
let enemyHealth = 50;
let enemyAttack = 12;

//Defining enemy object with array of enemy robots
let enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber(10, 14),

        //Objects allow us to scale up the app easier
        //E.g., here we added a new property for this enemy
        shield: {
            type: 'wood',
            streng: 10
        }
    },
    {
        name: 'Amy Android',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Robo Trumble',
        attack: randomNumber(10, 14)
    }
    ];
/*
Even though the data in the array looks different, it's still an array with numerical indexes.
That means the first robot object can be accessed as enemyInfo[0], and getting that
robot's name is as simple as enemyInfo[0].name.
*/

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
//for(var i = 0; i < 3; i++) {
    //console.log("Counting i's " + i);
    //console.log("Counting i's", i);
//}

//Adding a function to handle blank or null responses to the fight-or-skip prompt.
let fightOrSkip = function(){
    //Ask player if they'd like to fight or skip using the fightOrSkip() function
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLowerCase();

    //Conditional Recursive Function Call
    // if (promptFight === "" || promptFight === null) {
    //     window.alert("You need to provide a valid answer! Please try again.");
    //     return fightOrSkip();
    // }

    /*
    There is an alternative shortcut for dealing with non-valid responses: using JavaScript's falsy values.
    Falsy values are values that evaluate to false in a conditional statement.
    In JavaScript, they include 0, null, "", undefined, NaN, and false.
    This shortcut lets you represent all of these non-valid responses in a single expression.

    if the `promptFight` is NOT a valid value, then execute the following statements.
    */
    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    //if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {       //|| promptFight === "SKIP") {      This can be removed if we only check for lower case
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //Subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            shop();
        }
    }
}

//Fight function
//We defined the "enemy" parameter for the function
let fight = function(enemy) {
    console.log(enemy);
    //window.alert('Welcome to Robot Gladiators!');

    //window.alert('Welcome to Robot Gladiators!');
    console.log(enemy.name + " has a total health of " + enemy.health + ".");
    console.log(playerInfo.name + " has a total health of " + playerInfo.health + " and a budget of " + playerInfo.money + ".");

    //To keep track of who goes first
    let isPlayerTurn = true;

    //To make it random we use the Math.random() function
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    /*The while loop is a nother type of control flow statement that loops or repeatedly
    executes a statement while a condition remains true. Like the for loop, the while loop
    repeatedly executes a code block only if a condition remains true.
    E.g.
    while([Condition]) {
        statement
    }
    */
    //Added && (and operator)
    while(enemy.health > 0 && playerInfo.health > 0){
        if(isPlayerTurn) {
        //Ask player if he/she wants to figth.
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        promptFight = promptFight.toLowerCase();

            //Skip, using or operator || to compare different ways to write skip
            if (promptFight === 'skip'){

                //window.confirm is a built-in browser function that asks the user for input and stores their
                //response in a variable. Ir requires a simple "OK" or "Cancel" answer.

                //Confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");

                //If true, leave the fight
                if(confirmSkip) {
                    window.alert(playerInfo.name + " has decided to skip this fight!")
                    // subtract money from playerInfo.money for skipping
                    playerInfo.money = Math.max(0, (playerInfo.money - 10));
                    window.alert(playerInfo.name + ' now has ' + playerInfo.money + ' dollars.')
                    console.log('Player money: ', playerInfo.money);
                    break;
            
            //Not included in the module example
                } else{
                    promptFight;
                }

            //Fight, using or operator || to compare different ways to write fight
            //If player choses to fight, then fight
            } else if (promptFight === 'fight') {
                //debugger;
            
                //Substract playerAttack from enemyHealth, update result in enemyHealth
                //enemyHealth = enemyHealth - playerAttack;

                //If we use something like Math.max(0, variableName), we can ensure that deducted values always stop at zero.
                //enemyHealth = Math.max(0, enemyHealth - playerAttack);

                //Because randomNumber() returns a value, that returned value can be stored in the enemyHealth variable.
                //enemyHealth = Math.max(0, (enemyHealth - playerInfo.attack));
                //Substract playerInfo.attack from enemy.health, update result in enemy.health
                enemy.health = Math.max(0, (enemy.health - playerInfo.attack));
                window.alert("Youhave an attack of " + playerInfo.attack);
                console.log(playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');

                //Check enemy's health
                if (enemy.health <= 0) {
                    //playerInfo.health = Math.max(0, (playerInfo.health - enemy.attack));
                    window.alert(enemy.name + " has died!");
                    playerInfo.money = playerInfo.money + 20;
                    window.alert(playerInfo.name + ' now has ' + playerInfo.money + ' dollars.')

                    if (playerInfo.health > 0){
                        //Not included in the module example
                        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                    }

                    //Leave while loop if enemy is dead
                    break;

                //if enemy.health > 0
                } else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                    //Substract enemy.attack from playerInfo.health, update result in playerInfo.health
                    console.log("Your Enemy has an attack of " + enemy.attack);
                    window.alert("Your Enemy has an attack of " + enemy.attack);
                    playerInfo.health = Math.max(0, (playerInfo.health - enemy.attack));
                    console.log(enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');
                }

                //Check player's health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + " has died!");
                    //Leave while loop if player is dead
                    break;
                } else {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }
            }

            //Wrong input from user
            else {
                window.alert('You did not select "Fight" or "Skip". Please try again.');
                promptFight;
            }
        }


        //For the case Enemy attacks first
        else if (!isPlayerTurn){
            //Substract enemy.attack from playerInfo.health, update result in playerInfo.health
            console.log("Your Enemy has an attack of " + enemy.attack);
            window.alert("Your Enemy has an attack of " + enemy.attack);
            playerInfo.health = Math.max(0, (playerInfo.health - enemy.attack));
            console.log(enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');

            //Check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                //Leave while loop if player is dead

                /*
                We need to add a way to stop fighting after meeting playerInfo.health <= 0.
                JavaScript has the keyword 'break' that can be used just for this purpose. The break
                keyword allows us to exit the current loop.
                */
                //Break --> Leave while loop if player is dead
                break;

            //If player health > 0
            } else {
                window.alert(enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.');
                let promptFight = window.prompt("Would you like to FIGHT back or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
                promptFight = promptFight.toLowerCase();
                
                //If player choses to skip
                if (promptFight === 'skip'){
                    //Confirm player wants to skip
                    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                    
                    //If true, leave the fight
                    if(confirmSkip) {
                        window.alert(playerInfo.name + " has decided to skip this fight!")
                        // subtract money from playerInfo.money for skipping
                        playerInfo.money = Math.max(0, (playerInfo.money - 10));
                        console.log('Player money: ', playerInfo.money);
                        window.alert(playerInfo.name + " has " + playerInfo.money + ' dollars left.')
                        break;
                    } else{
                        promptFight;
                    }

                //If player choses to fight
                } else if (promptFight === 'fight') {
                    //debugger;
                    //Substract playerInfo.attack from enemy.health, update result in enemy.health
                    enemy.health = Math.max(0, (enemy.health - playerInfo.attack));
                    console.log(playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');

                    //Check enemy's health
                    if (enemy.health <= 0) {
                        window.alert(enemy.name + " has died!");
                        playerInfo.money = playerInfo.money + 20;
                        console.log('Player money: ', playerInfo.money);
                        window.alert(playerInfo.name + ' now has ' + playerInfo.money + ' dolars.');
                        //Leave while loop if enemy is dead
                        break;
            
                    //If enemy's health > 0
                    } else {
                        window.alert(enemy.name + " still has " + enemy.health + " health remaining.");
                    }
                
                //Wrong input from user
                } else{
                    window.alert('You did not select "Fight" or "Skip". Please try again.');
                    promptFight;
                }
            }
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

//Function to start the game
let startGame = function() {
    //We need to reset the player stats every time the game starts
    //playerInfo.health = 100;
    //playerInfo.money = 10;
    //playerInfo.attack = randomNumber((playerInfo.attack - 3), playerInfo.attack);

    //We will use the reset() method from the playerInfo object to reset the values of the player
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        //Using an if statement to check if playerInfo.health > 0
        if(playerInfo.health > 0){
                
            //Increasing the iterator by one allows the round number to be calculated.
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            //let pickedEnemy = enemyNames[i];
            
            //Creating enemy object
            let pickedEnemyObject = enemyInfo[i];

            //Reseting health of different robot enemies
            //enemyHealth = Math.floor(Math.random()*21) + 40;

            /*
            Here we are defining enemy's health for the game as a property of the pickedEbenyObject object
            and then we pass this health info into the fight() function using the argument (pickedEnemyObject)
            in the fight function --> fight(pickedEnemyObject)
            */
            pickedEnemyObject.health = randomNumber(40, 60);
            //debugger;

            //Run fight function to start game
            fight(pickedEnemyObject);

            //Addingthe code to access the shop after defeating an enemy or skipping a fight
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                let storeConfirm = window.confirm("Visit the store before the next round?");
                if (storeConfirm){
                    shop();
                }
            }
        //Let the user know his/her robot is dead
        } else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    
        console.log(enemyNames[i]);
        console.log(i);
        console.log(enemyNames[i] + " is at " + i + " index");
    }
    //endGame function after loop ends and player is eaither death or victorious
    endGame();
}

//Function to end the game
let endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    //If player still alive, WIN!
    if(playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle. You have a score of " + playerInfo.money + ".");
    }
    
    //High score
    /*
    If highScore is undefined, then its value is null. So, if we want to set highScore to 0
    if it is undefined, we merely have to test if highScore is null.
    */
    let highScore = localStorage.getItem("highscore");
    if (highScore === null){
        highScore = 0;
    }

    /*
    This type of value check is very common, so there is a shorthand notation called a
    short circuit conditional statement:
        highScore = highScore || 0;
    
    Here we're using truthy and falsy values in a short-circuit evaluation and assignment:
    if the variable on the left of the || is truthy, then use it for the assignment value.
    But if that variable is falsy, then use the value on the right of the || for the
    assignment value.

    So, our code means that if the highScore value is falsy (for example, null), then
    assign zero to highScore. If not, retain whatever value is currently stored in highScore.
    */
    
    if (playerInfo.money > highScore){
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);
        console.log(playerInfo.name + ' has set a new high score of ' + playerInfo.money + '!');
        window.alert(playerInfo.name + ' has set a new high score of ' + playerInfo.money + '!');
    }
    else if (playerInfo.money === highScore){
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);
        console.log('You have tied the highest score of ' + playerInfo.money + '. Great job!');
        window.alert('You have tied the highest score of ' + highScore + '. Great job!');
    }
    else{
        console.log(playerInfo.name + ' did not beat the high score of ' + highScore +'. Keep trying!');
        window.alert(playerInfo.name + ' did not beat the high score of ' + highScore +'. Keep trying!');
    }

    //Play again
    let playAgainConfirm = window.confirm('Would you like to play again?');
    if (playAgainConfirm){
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
}

/*
Using localStorage
localStorage allows us to store data in the browser. localStorage only stores strings.
This means that it forces numbers to become strings E.g.:
    value: 100,     //100 becomes "100"
sessionStorage also allows us to save data.
The difference between the two is that where sessionStorage will persist the data
during the session of the page or while the browser is open, localStorage will
persist the data in the browser until the data is manually deleted. This means
that if you close the browser, the data in sessionStorage will disappear, but
the data in localStorage will persist.
Both sessionStorage and localStorage share the same interface methods, and
both use key-value pairs to store object data. Note that the keys and values will
always be converted into strings as a condition for browser storage.

Use the Web Storage API
Using the browser's storage methods to access and enter the object into the browser's
storage is known as the Web Storage API, E.g.:
    localStorage.setItem("color", "red");

To see if this statement worked, we can use Chrome DevTools, open the Application tab
and select the Local Storage option. In the console we can access the info as following:
    localStorage.getItem("color");              //"red"


*/

//shop function
let shop = function() {
    console.log('Welcome to the shop!');
    let shopOptions = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for 'REFILL', 2 for 'UPGRADE', or 3 for 'LEAVE'.");
    
    //The parseInt() function converts strings to integers.
    shopOptions = parseInt(shopOptions);
    /*
    Instead of using an if statement, let's aplore the switch function.
    Because we only have one variable (shopOptions) that can be multiple values,
    a switch makes sense. The switch function allows us to move between different
    options depending on the selection made.
    E.g.
    var=5
    switch(num){
        case 1:
            console.log('Selected 1');
            break;
        case 2:
            console.log('Selected 2');
            break;
        case 3:
            console.log('Selected 1');
            break;
        default:
            console.log('The variable was something else');
            break;
    }

    Use switch statements when checking a single value against multiple possibilities,
    or cases. In this example, we're defining what should happen when the variable
    num equals 1, 2, 3, or something else (the default case). Each case ends with
    a break to specify that nothing more should happen.
    */
    switch(shopOptions){
        case 1:
            //if (playerInfo.money >= 7) {
                //window.alert("Refilling player's health by 20 for 7 dollars.");
      
                //Increase health and decrease money
                //playerInfo.health = playerInfo.health + 20;
                //playerInfo.money = Math.max(0, (playerInfo.money - 7));
            //} else {
                //window.alert("You don't have enough money!");
            //}

            //We will be using the methods from the playerInfo object to improve the code instead of using all the previous coding
            playerInfo.refillHealth();
            break;

        case 2:
            //if (playerInfo.money >= 7) {
                //window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
                //Increase attack and decrease money
                //playerInfo.attack = playerInfo.attack + 6;
                //playerInfo.money = Math.max(0, (playerInfo.money - 7));
            //} else {
                //window.alert("You don't have enough money!");
            //}
            
            //We will be using the methods from the playerInfo object to improve the code instead of using all the previous coding
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert("Leaving the store.");
      
            //Do nothing, so function will end
            break;
            
        default:
            window.alert("You did not pick a valid option. Try again.");
      
        //Call shop() again so that the player picks a valid option
            shop();
            break;
    }
}

//Start the game when the page loads
startGame();

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

An example using the definition of parameters and arguments:
    addTwoNumbers(number1, number2){        //number1 and number2 are the parameters of the addTwoNumbers function
        return number1 + number2;
    };

    addTwoNumbers(4, 6);                    //4 and 6 are the arguments.


*/

/* IMPORTANT
Two ways to declare functions:

FUNCTION DECLARATION
E.g.
function add(a,b){
    console.log(a+b);
}

FUNCTION EXPRESSION
E.g.
var add = function(){
    console.log(a+b);
}

The difference between these two ways to declare functions is Hoisiting

HOISTING is JavaScript's default behavior of moving declarations to the top of the code.
This means that in JavaScript some functions can be called before they are declared.

With function expression we can use the function no matter where in our code, E.g.
add(5, 6);  //This will log 11.
function add(a,b){
    console.log(a+b);
}

With function expression the order where a function is declared matters, E.g.
add(5, 6);  //This will output an error because JS tries to call the function before it was declared!
var add = function(){
    console.log(a+b);
}


=> Arrow function is similar to function expression
E.g.
const greet = () => "Hello World"
greet() // Hello World

let greet = (x) => console.log("x");
greet("Welcome to Javascript Arrow functions");

let greet = () => console.log("Welcome to Javascript Arrow functions");
greet();

Arrow functions also provide better syntax that is more user-friendly for promises and callbacks.
E.g.

From this sintax:
asyncFunction()
    .then(function () {
    return asyncFunction1();
    })
    .then(function () {
    return asyncFunction2();
    })
    .then(function () {
    // Finish:
    });

To this sintax:
asyncFunction()
    .then(() => asyncFunction1())
    .then(() => asyncFunction2())
    .then(() => finish)
*/


/*
OBJECT-ORIENTED PROGRAMMING

JavaScript Objects
JavaScript objects are written with curly braces {}.
Object properties are written as name:value pairs, separated by commas, E.g.:
    - const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Objects can have properties (Math.PI) and methods/functions (Math.random()).
There are many other built-in JavaScript objects that we'll discover over time,
and we can even make our own custom objects, E.g.:
    var food = {
        name: "Banana",
        type: "fruit",
        calories: 105
    };

object properties (properties may be referred as keys in this case) are defined within using <propertyName>: <propertyValue> syntax and separated by a comma.
The following code shows how to access the property values of a food object:

    console.log(food.name);     // "Banana"
    console.log(food.type);     // "fruit"
    console.log(food.calories); // 105


It is a programming paradigm centered around objects rather than functions.
Object oriented languages are diverse, but the most popular ones are class-based languages in which objects are instances of classes.
Objects contain data, which we also refer to as attributes or properties, and methods. Objects can interact with each other.

JavaScript Objects example
Object:
    -Car
Properties:
    - car.name = Ford
    - car.model = Mustang
    - car.weight = 1200 kg
    - car.color = red
Methods:
    - car.start()
    - car.drive()
    - car.brake()
    - car.stop()
All cars have the same properties, but the property values differ from car to car.
All cars have the same methods, but the methods are performed at different times.

Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to a variable named car, E.g.:
    - const car = {type:"Fiat", model:"500", color:"white"};
The values are written as name:value pairs (name and value separated by a colon).

You define (and create) a JavaScript object with an object literal, E.g.:
    - const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Spaces and line breaks are not important. An object definition can span multiple lines, E.g.:
    - const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    };

Object Properties
The name:values pairs in JavaScript objects are propertyNames: propertyValues, E.g.:
    firstName: "John",      //property name = firstName; propertyValue = John
    lastName: "Doe",        //property name = LastName; propertyValue = Doe
    age: 50,

Adding properties
We can add properties to an object by declaring the object.newProperty, E.g.:
    person.eyeColor = "blue";   //This add the eyeColor property to the object
    console.log(person);        //{firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}

Accessing Object Properties
You can access object properties in two ways:
    - objectName.propertyName
        or
    - objectName['propertyName']


OBJECT METHODS
Objects can also have methods.

IMPORTANT
Methods are actions that can be performed on objects. In other words, FUNCTIONS!
Methods are stored in properties as function definitions, E.g.:

PROPERTY	    PROPERTY VALUE
- firstName	    - John
- lastName	    - Doe
- age	        - 50
- eyeColor	    - blue
- fullName	    - function() {return this.firstName + " " + this.lastName;}

A method is a function stored as a property. E.g.:
    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            return this.firstName + " " + this.lastName;
        }
    };

IMPORTANT
In the example above, this refers to the person object.
I.e. this.firstName means the firstName property of this.
I.e. this.firstName means the firstName property of person.

What is "this"?
In JavaScript, the "this" keyword refers to an object.
Which object depends on how "this" is being invoked (used or called).
The "this" keyword refers to different objects depending on how it is used:
    - In an object method, "this" refers to the object.
    - Alone, "this" refers to the global object.
    - In a function, "this" refers to the global object. 
    - In a function, in strict mode, "this" is undefined.
    - In a function definition, this refers to the "owner" of the function.
    - In an event, "this" refers to the element that received the event.
    - Methods like call(), apply(), and bind() can refer "this" to any object.

NOTE
this is not a variable. It is a keyword. You cannot change the value of this.

Another example of objects, properties and methods:
    let myCar = {
        make: 'toyota',
        model: 'corolla',
        mileage: '15000',
        driveToWork: function(){
            return mileage += 25;
        }
    };

    myCar.driveToWork();        //When we call the driveToWork method it adds 25 miles to the car
    console.log(myCar);         //{make: 'toyota', model: 'corolla', mileage: '15025', driveToWork: [Function: driveToWork]}

Math object
The Math object has many properties and functions attached to it. When a function belongs to an object, we refer to it as a method.
    - console.log(Math.PI);                 //prints 3.141592653589793
    - console.log(Math.round(4.4));         //rounds to the nearest whole number (4)
    - console.log(Math.sqrt(25));           //prints the square root (5)
    - console.log(Math.max(10, 20, 100));   //prints 100
    - console.log(Math.max(0, -50));        //prints 0

Accessing Object Methods
You access an object method with the following syntax:
    - objectName.methodName()
    E.g.:
        - name = person.fullName();

If you access a method without the () parentheses, it will return the function definition, E.g.:
    - name = person.fullName;       will return: function() { return this.firstName + " " + this.lastName; }


IMPORTANT!
DO NOT Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object, E.g.:
    x = new String();        // Declares x as a String object
    y = new Number();        // Declares y as a Number object
    z = new Boolean();       // Declares z as a Boolean object

Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

JavaScript String Methods
¬ String Length E.g.:
    - let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    - let length = txt.length;

¬ Extracting String Parts
There are 3 methods for extracting a part of a string:
    - slice(start, end)
    - substring(start, end)
    - substr(start, length)

¬ Replacing String Content
The replace() method replaces a specified value with another value in a string, E.g.:
    - let text = "Please visit Microsoft!";
    - let newText = text.replace("Microsoft", "W3Schools");
To replace case insensitive, use a regular expression with an /i flag (insensitive), E.g.:
    - let text = "Please visit Microsoft!";
    - let newText = text.replace(/MICROSOFT/i, "W3Schools");

¬ Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase()
A string is converted to lower case with toLowerCase()

¬ JavaScript String trim()
The trim() method removes whitespace from both sides of a string, E.g.:
    - let text1 = "      Hello World!      ";
    - let text2 = text1.trim();
*/