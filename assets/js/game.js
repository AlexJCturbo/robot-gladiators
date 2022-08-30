//Fight function
let fight = function(enemy) {
    //window.alert('Welcome to Robot Gladiators!');
    console.log(enemy.name + " has a total health of " + enemy.health + ".");
    console.log(playerInfo.name + " has a total health of " + playerInfo.health + " and a budget of " + playerInfo.money + ".");

    while(enemy.health > 0 && playerInfo.health > 0){
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        promptFight = promptFight.toLowerCase();

        //If player choses to skip
        if (promptFight === 'skip'){                //promptFight === 'Skip', promptFight === 'SKIP'
            //Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //If true, leave the fight
            if(confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight!")
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, (playerInfo.money - 10));
                console.log('Player money: ', playerInfo.money);
                break;

            //Not included in the module example
            } else{
                promptFight;
            }
        
        //If player choses to fight, then fight
        } else if (promptFight === 'fight') {       //promptFight === 'Fight' || promptFight === 'FIGHT'
            //debugger;

            //Substract playerInfo.attack from enemy.health, update result in enemy.health
            enemy.health = Math.max(0, (enemy.health - playerInfo.attack));
            console.log(playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaning.');

            //Check enemy's health
            if (enemy.health <= 0) {
                playerInfo.health = Math.max(0, (playerInfo.health - enemy.attack));
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;

                //Not included in the module example
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                console.log(enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaning.');

                //Leave while loop if enemy is dead
                break;

            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
    
            //Substract enemy.attack from playerInfo.health, update result in playerInfo.health
            playerInfo.health = Math.max(0, (playerInfo.health - enemy.attack));
            console.log("Your Enemy has an attack of " + enemy.attack);
            console.log(enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaning.');

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
}

//Random Number function
let randomNumber = function(min, max){
    let randomValue = Math.floor(Math.random()*(max - min + 1) + min);
    return randomValue;
}

//Function to set name
let getPlayerName = function(){
    let name = '';
    while(name === '' || name === null){
        name = prompt('What is your robot\'s name?');
    }
    console.log("Your robot's name is " + name);
    return name;
}

//Defining player object
let playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
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


//Defining enemy object with an array of enemy robots
let enemyInfo = [
    {
        name: 'Roborto',
        attack: randomNumber(10, 14)
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

//Function to start the game
let startGame = function() {
    //Reset player stats usint the reset() method from the playerInfo object
    playerInfo.reset();
    console.log("You have an attack of " + playerInfo.attack);

    for(var i = 0; i < enemyInfo.length; i++) {
        if(playerInfo.health > 0){
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
            //debugger;

            let pickedEnemyObject = enemyInfo[i];
            pickedEnemyObject.health = randomNumber(40, 60);

            //Run fight function to start game
            fight(pickedEnemyObject);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if(playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".")
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
    let shopOptions = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for 'REFILL', 2 for 'UPGRADE', or 3 for 'LEAVE'.");
    shopOptions = parseInt(shopOptions);

    switch(shopOptions){
        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;

        case 3:
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

Fix the following
- Empty player names are accepted (validate player prompts by using the while loop).
- Selecting Cancel in the player-name prompt assigns "null" as the player's name.
- Empty or mixed-case (for example, Skip, SkIp, skiP, etc.) input to the fight-or-skip prompt results in the fight option being chosen.

Add the following new features:
- Ability to save the high score (store data by using the Web Storage API.).
- Randomize who attacks first in each new confrontation (add more variability to the game by using the Math.random() function).
- Simplify the input process for the shop() prompt to reduce the amount of typing needed to reply to prompts.
*/