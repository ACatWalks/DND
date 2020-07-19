class Player{
  constructor(alignment, race, pclass, background){
     this.alignment = selectAlignment(alignment);
     this.race = selectRace(race);
     this.pclass = selectClass(pclass);
     this.background = selectBackground(background);
  }
  roll20(str){
    let newStr = str.split();
    let multiplier = 1;
    if(parseInt(newStr[0])){
      multiplier = parseInt(newStr[0]);
    }
    const d = newStr.findIndex('d');
    let die = parseInt(newStr[d+1]);
    let total = 0;
    for(let i=0; i<multiplier; i++){
      let roll = Math.floor(Math.random()*die);
      total += roll;
    }
    const addend = newStr.findIndex('+');
    if(parseInt(newStr[addend+1])){
      total += parseInt(newStr[addend+1]);
    }
    return total;
  }

}

function selectRace(race){
  let races = ['hill dwarf', 'mountain dwarf', 'high elf', 'wood elf','drow','lightfoot halfling','stout halfling','tiefling','half-orc','half-elf','forest gnome','rock gnome','gold dragonborn','silver dragonborn','bronze dragonborn','brass dragonborn','copper dragonborn','red dragonborn','white dragonborn','black dragonborn','blue dragonborn','green dragonborn','human'];
  let playerRace = races[Math.floor(Math.random()*races.length)];
  return playerRace;
}

function selectClass(pclass){
  let classes = ['berserker','totem warrior','bard: College of Lore','bard: College of Valor','knowledge cleric','life cleric','light cleric','nature cleric','tempest cleric','trickery cleric','war cleric','druid: Circle of Land','druid: Circle of Moon','champion','battlemaster','eldritch knight','monk: Way of the Open Hand','monk: Way of Shadow','monk: Way of Four Elements','paladin: Oath of Divinity','paladin: Oath of Ancients','paladin: Oath of Vengeance','hunter','beast master','thief','assassin','arcane trickster','sorcerer: Draconic Ancestry','sorcerer: Wild Magic','archfey warlock','fiend warlock','great old one warlock','abjurer','conjurer','diviner','enchanter','evocationist','illusionist','necromancer','transmuter'];
  let playerClass = classes[Math.floor(Math.random()*classes.length)];
  return playerClass;
}

function selectBackground(background){
  let backgrounds = ['acolyte','charlatan','criminal','entertainer','folk hero','guild artisan','hermit','noble','outlander','sage','sailor','soldier','urchin'];
  let playerBackground = backgrounds[Math.floor(Math.random()*13)];
  return playerBackground;
}

function selectAlignment(alignment){
  let alignments = ['lawful good','neutral good','chaotic good','lawful neutral','true neutral','chaotic neutral','lawful evil','neutral evil','chaotic evil'];
  let playerAlignment = alignments[Math.floor(Math.random()*9)];
  return playerAlignment;
}

document.addEventListener("DOMContentLoaded", buttonFunction);

function buttonFunction(){
  const btn = document.getElementById("character_creation");
  btn.addEventListener("click",createCharacter);
}



function createCharacter(){
  const playerCharacter = new Player();
  document.getElementById("charcter_announcement").value = 'I am a ' + playerCharacter.alignment + ' ' + playerCharacter.race + ' ' + playerCharacter.pclass + ' with a ' + playerCharacter.background + ' background!';
  console.log('I am a ' + playerCharacter.alignment + ' ' + playerCharacter.race + ' ' + playerCharacter.pclass + ' with a ' + playerCharacter.background + ' background!');
}
