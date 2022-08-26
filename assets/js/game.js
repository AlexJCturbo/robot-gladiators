//Defining main variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);
console.log("Your robot's name is " + playerName);

//Enemy variables and array of robots
let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
//var enemyName = "Roborto"
let enemyHealth = 50;
let enemyAttack = 12;

//Fight function
let fight = function(enemyRobotName) {
    //window.alert('Welcome to Robot Gladiators!');

    while(enemyHealth > 0 && playerHealth > 0){
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //If player choses to skip
        if (promptFight === 'SKIP', promptFight === 'Skip', promptFight === 'skip'){
            //Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //If true, leave the fight
            if(confirmSkip) {
                window.alert(playerName + " has decided to skip this fight!")
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log('Player money: ', playerMoney);
                break;

            //Not included in the module example
            } else{
                fight();
            }
        
        //If player choses to fight, then fight
        } else if (promptFight === 'FIGHT' || promptFight === 'Fight' || promptFight === 'fight') {
            //debugger;

            //Substract playerAttack from enemyHealth, update result in enemyHealth
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + ' attacked ' + enemyRobotName + '. ' + enemyRobotName + ' now has ' + enemyHealth + ' health remaning.');

            //Check enemy's health
            if (enemyHealth <= 0) {
                playerHealth = playerHealth - enemyAttack;
                window.alert(enemyRobotName + " has died!");
                playerMoney = playerMoney + 20;

                //Not included in the module example
                window.alert(playerName + " still has " + playerHealth + " health left.");
                console.log(enemyRobotName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaning.');

                //Leave while loop if enemy is dead
                break;

            } else {
                window.alert(enemyRobotName + " still has " + enemyHealth + " health left.");
            }
    
            //Substract enemyAttack from playerHealth, update result in playerHealth
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyRobotName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaning.');

            //Check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                //Leave while loop if player is dead
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }

        //Wrong input from user
         else {
            window.alert('You did not select "Fight" or "Skip". Please try again.');
            fight();
        }
    }
}

//Function to start the game
let startGame = function() {
    //Reset player stats
    playerHealth = 100;
    playerAttack= 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0){
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            let pickedEnemy = enemyNames[i];
            enemyHealth = 50;
            //debugger;

            //Run fight function to start game
            fight(pickedEnemy);
        } else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
    //endGame function after loop ends and player is eaither death or victorious
    endGame();
}

//Function to end the game
let endGame = function() {
    //If player still alive, WIN!
    if(playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".")
    } else {
        window.alert("You've lost your robot in battle.");
    }
    
    let playAgainConfirm = window.confirm('Would you like to play again?');
    if (playAgainConfirm){
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
}

//Start the game when the page loads
startGame();


//Shop


/*
Pseudocode Part 1:
1. Game States
2. WIN when player defeats other robots --> fight all robots --> defeat them all
3. LOSE when player health is zero or less --> Add combatants to the battle using arrays.

Additional Pseudo Code
- Fight enemy-robot combatants using for loops.
- Fight each combatant using function arguments.
- Battle the combatants until defeated using a while loop.
- Improve the player's game experience.

Pseudocode Part 2 ("Play again" and "Shop" features):
1. Create a startGame() function
2. Create an endGame() funtion to display stats, ask to play again and if yes restart game.
3. After skip or defeat an enemy ask player:
    - If want to shop or continue as normal
    - If yes, call shop() function
    - Options of the shop: refill health, upgrade attack, leave
    - If refill, subtract money and increase health
    - If upgrade, subtract money and increase attack power
    - If leave, alert goodbye and exit the function
    - If any other invalid option, call shop() again
*/


/*
//Function to start the game
let startGame = function() {
    //Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //for loop to fight the different enemies
    for(var i = 0; i < enemyNames.length; i++){
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + " .");
            //debugger;
            let enemyPicked = enemyNames[i];
            enemyHealth = 50;

            fight(enemyPicked);
        }
        else {
            window.alert('You have lost your robot in battle! Game Over!"');
            break;
        }
    }
    endGame();
}

//Start the game when the page loads
startGame();

//Function to end the game
let endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");

    let playAgainConfirm = window.confirm('Would you like to play again?');
    if(playAgainConfirm){
        //Reset the game with startGame function
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon.");
    }
}
*/