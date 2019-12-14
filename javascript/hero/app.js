/*
Hero's Journey
The hero is on an adventure. 
They must fight three enemies along the way, who have 50 points of health each. 
After the fight 
they will be on the brink of death with a 
health level of 20 out of 100, 
mana of 0 out of 60, 
and an energy of 40 out of 100. 
They will meet an man who happens to be a healer along the way that will sell them a healing potion for 10 gold coins, that restores their health back to full strength. 
The hero will need to rest for 3hrs to restore their mana and energy. 
The hero will battle a giant spider with a sword that does 30 points of damage and requires 10 points of energy, as well as a eldritch blast that does 20 points of damage and requires 20 points of mana. 
The giant spider has a health level of 250 and does 30 points of damage per attack. 
Dodging the giant spider's attack will require 20 points of energy. When the hero defeats the giant spider they will be rewarded 100 gold coins.
*/


let heroWins = false;
let heroHealth = 100;
let heroMana = 60;
let heroEnergy = 100;
let heroDodge = 20;
let heroAccount = 100;

let enemy1 = true;
let enemy2 = true;
let enemy3 = true;

let enemy1Health = 50;
let enemy2Health = 50;
let enemy3Health = 50;

let healer = true;
let healerAccount = 100;
let potionCost = 10;

let fullRestHoursMana = 3;
let fullRestHoursEnergy = 3;

let spider = true;
let spiderHealth = 250;
let spiderDamage = 30;


let swordAttack = 30;
let swordEnergy = 10;

let eldritchAttack = 20;
let eldritchMana = 20;

let winPot = 100;

heroHealth = heroHealth - firstFight;
heroHealth = heroHealth - secondFight;
heroHealth = heroHealth - thirdFight;








