//Master function for game
function playGame(){
numberOfSides = rollDice();

}
//Dice roll function
function rollDie(){
    let result = Math.floor(Math.random()* numberOfSides) + 1;
    return result;
}
//Enemy Generator
function enemyGenerator(){
    let generateEnemy;
    switch(diceRoll(20)){
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;

}
//Character Stats
function characterStats(){
    let playerAttack;
    switch(diceRoll(8)){
        case 1:
        console.log('ATK +2 well.. good luck!')
        playerAttack = 2;
        break;
        case 2:
        console.log('ATK +4 hmmm.. this sucks!')
        playerAttack = 4;
        break;
        case 3:
        console.log('ATK +6 I need to train more!')
        playerAttack = 6;
        break;
        case 4:
        console.log('ATK +8 meh, not bad.')
        playerAttack = 8;
        break;
        case 5:
        console.log('ATK +10 OK! Now we are getting somewhere!')
        playerAttack = 10;
        break;
        case 6:
        console.log('ATK +12 Finally some real damage!')
        playerAttack = 12;
        break;
        case 7:
        console.log('ATK +14 AWWW YEA!!')
        playerAttack = 14;
        break;
        case 8:
        console.log('ATK +16 BRING IT ON!!')
        playerAttack = 16;
        break;
    } return playerAttack;
}



















playGame();