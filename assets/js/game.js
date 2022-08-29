//Defining main variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//console.log(playerName, playerAttack, playerHealth);
console.log("Your robot's name is " + playerName);

//Enemy variables and array of robots
let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
//var enemyName = "Roborto"
let enemyHealth = 50;
let enemyAttack = 12;

//Random Number function
let randomNumber = function(min, max){
    let randomValue = Math.floor(Math.random()*(max - min + 1) + min);
    return randomValue;
}

enemyAttack = randomNumber(10, 14);


//Fight function
let fight = function(enemyRobotName) {
    //window.alert('Welcome to Robot Gladiators!');
    console.log(enemyRobotName + " has a total health of " + enemyHealth + ".");
    console.log(playerName + " has a total health of " + playerHealth + " and a budget of " + playerMoney + ".");

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
                playerMoney = Math.max(0, (playerMoney - 10));
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
            enemyHealth = Math.max(0, (enemyHealth - playerAttack));
            console.log(playerName + ' attacked ' + enemyRobotName + '. ' + enemyRobotName + ' now has ' + enemyHealth + ' health remaning.');

            //Check enemy's health
            if (enemyHealth <= 0) {
                playerHealth = Math.max(0, (playerHealth - enemyAttack));
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
            playerHealth = Math.max(0, (playerHealth - enemyAttack));
            console.log("Your Enemy has an attack of " + enemyAttack);
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
            startGame();
        }
    }
}

//Function to start the game
let startGame = function() {
    //Reset player stats
    playerHealth = 100;
    playerAttack = randomNumber((playerAttack - 3), playerAttack);
    console.log("You have an attack of " + playerAttack);
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0){
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            let pickedEnemy = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            //debugger;

            //Run fight function to start game
            fight(pickedEnemy);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                let storeConfirm = window.confirm("Visit the store before the next round?");
                if (storeConfirm){
                    shop();
                }
            }
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

//shop function
let shop = function() {
    console.log('Welcome to the shop!');
    let shopOptions = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch(shopOptions){
        case 'REFILL':
        case 'Refill':
        case 'refill':
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //Increase health and devrease money
                playerHealth = playerHealth + 20;
                playerMoney = Math.max(0, (playerMoney - 7));
            } else {
                window.alert("You don't have enough money!");
            }
            break;

        case 'UPGRADE':
        case 'Upgrade':
        case 'upgrade':
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //Icrease attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = Math.max(0, (playerMoney - 7));
            break;

        case 'LEAVE':
        case 'Leave':
        case 'leave':

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

Pseudocode Part 3 (Using Objects):
- Create a new feature branch.
- Use the Math object to add randomness to the game.
- Merge and switch branches.
- Convert player and enemy data to custom objects.
- Merge the object branch and update main.
*/