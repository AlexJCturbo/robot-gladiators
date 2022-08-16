//Starting the PROJECT
/*
Pseudocode:
1. Game States
2. WIN when player defeats other robots --> fight all robots --> defeat them all
3. LOSE when player health is zero or less --> Add combatants to the battle using arrays.

Additional Pseudo Code
- Fight enemy-robot combatants using for loops.
- Fight each combatant using function arguments.
- Battle the combatants until defeated using a while loop.
- Improve the player's game experience.
*/

//Defining some variables
let playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log("Your robot's name is " + playerName);

//Enemy variables and array of robots
let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble',]
let enemyHealth = 50;
let enemyAttack = 12;

//fight function
let fight = function(enemyName) {
    while(enemyHealth > 0 && enemyHealth > 0){
        //Ask player if he/she wants to figth.
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "Fight" or "Skip" to choose.');

        //Skip, using or operator || to compare different ways to write skip
        if (promptFight == 'SKIP' || promptFight == 'Skip' || promptFight == 'skip'){
            window.alert(playerName + ' has chosen to skip this fight!');
            let skipConfirm = window.confirm('Are you sure you would like to quit?');
            //If yes, leave fight
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

        //Player selects to fight
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


//for loop to fight the different enemies
for(var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + " .");
    }
    else {
        window.alert('You have lost your robot in battle! Game Over!"');
        break;
    }

    let enemyPicked = enemyNames[i];
    enemyHealth = 50;
    //debugger;
    fight(enemyPicked);
}
