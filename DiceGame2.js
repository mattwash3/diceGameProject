// //Master function for game
function playGame(){
    let playerVitals = characterHp();
    let playerAttack = characterAtk();
    let currentMonster = getMonster();
    battle(playerVitals, currentMonster, playerAttack);
    }

//Dice roll function
function rollDie(numberOfSides){
    let result = Math.floor(Math.random()* numberOfSides) + 1;
    return result;
}

function battle(playerVitals, currentMonster, playerAttack){
    while(playerVitals && currentMonster.hp > 0){
        let bonusValue = bonusMultiplier();
        playerVitality(playerVitals, currentMonster);
        currentMonster = monsterVitality(currentMonster, playerAttack, bonusValue);
    }
}

function bonusMultiplier(){
    let dieValue = rollDie(20);
    if(dieValue == 1 || dieValue == 3 || dieValue == 5 || dieValue == 7 || dieValue == 9 || dieValue ==11 ||
        dieValue == 13 || dieValue == 15 || dieValue == 17 || dieValue == 19){
        return rollDie(4)
        }
}

function playerVitality(playerVitals, currentMonster){
    playerVitals -= currentMonster.atk;
    if(playerVitals <= 0){
        alert("Game Over");
    }
}

function monsterVitality(currentMonster, playerAttack, bonusValue){
    if(bonusValue > 0){
        playerAttack = playerAttack * 2;
    }
    currentMonster.hp -= playerAttack;
    if(currentMonster.hp <= 0){
        return getMonster();
    }
    return currentMonster;
}

//Enemy Generator
function getMonster(){
    let currentMonster;
    switch(rollDie(10)){
        case 1:
        currentMonster = monster1;
        break;
        case 2:
        currentMonster = monster2;
        break;
        case 3:
        currentMonster = monster3;
        break;
        case 4:
        currentMonster = monster4;
        break;
        case 5:
        currentMonster = monster5;
        break;
        case 6:
        currentMonster = monster6;
        break;
        case 7:
        currentMonster = monster7;
        break;
        case 8:
        currentMonster = monster8;
        break;
        case 9:
        currentMonster = monster9;
        break;
        case 10:
        currentMonster = monster10;
        break;
    }
        console.log("You face " + currentMonster.name);
        console.log(currentMonster.hp);
        console.log(currentMonster.atk);
    return currentMonster;
}

//Player ATK
function characterAtk(){
    let playerAttack;
    switch(rollDie(6)){
        case 1:
        console.log('ATK +6 I need to train more!')
        playerAttack = 6;
        break;
        case 2:
        console.log('ATK +8 meh, not bad.')
        playerAttack = 8;
        break;
        case 3:
        console.log('ATK +10 OK! Now we are getting somewhere!')
        playerAttack = 10;
        break;
        case 4:
        console.log('ATK +12 Finally some real damage!')
        playerAttack = 12;
        break;
        case 5:
        console.log('ATK +14 AWWW YEA!!')
        playerAttack = 14;
        break;
        case 6:
        console.log('ATK +16 BRING IT ON!!')
        playerAttack = 16;
        break;
    } 
    console.log(playerAttack);
    return playerAttack;
}

//Player HP
function characterHp(){
    let playerHp;
    switch(rollDie(8)){
        case 1:
        console.log('HP +50 This will be quick..')
        playerHp = 50;
        break;
        case 2:
        console.log('HP +75 Lets get this over with..')
        playerHp = 75;
        break;
        case 3:
        console.log('HP +100 Dodge, dodge, dodge.')
        playerHp = 100;
        break;
        case 4:
        console.log('HP +125')
        playerHp = 125;
        break;
        case 5:
        console.log('HP +150')
        playerHp = 150;
        break;
        case 6:
        console.log('HP +175')
        playerHp = 175;
        break;
        case 7:
        console.log('HP +200')
        playerHp = 200;
        break;
        case 8:
        console.log('HP +250')
        playerHp = 250;
        break;
    } 
    console.log(playerHp);
    return playerHp;
}

var monster1 = {
    name:'Cave Bat',
    hp: 10,
    atk: 2,
};
var monster2 = {
    name:'Snake',
    hp: 15,
    atk: 2,
};
var monster3 = {
    name:'Boar', 
    hp: 20, 
    atk: 3,
};
var monster4 = {
    name:'Wolf', 
    hp: 25, 
    atk: 3,
};
var monster5 = {
    name:'Goblin', 
    hp: 30, 
    atk: 4,
};
var monster6 = {
    name:'Orc', 
    hp: 35, 
    atk: 4,
};
var monster7 = {
    name:'Ogre', 
    hp: 40, 
    atk: 6,
};
var monster8 = {
    name:'Giant', 
    hp: 50, 
    atk: 7,
};
var monster9 = {
    name:'Mini Boss- Rabbit', 
    hp: 100, 
    atk: 10,
};
var monster10 = {
    name:'-Boss- Slime', 
    hp: 150, 
    atk: 12,
};

function changeBackground(){
	document.getElementById("canvas").style.background = url("images/te1zrah.gif");
}


playGame();