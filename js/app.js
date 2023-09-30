console.log("hello baby !");



/*
- lié les 5 buttons a  const rock-paper-scissors-lizard-spock (player)
- 
- créer un generateur de number au asard de 1 a 5 (computer)
- 
- au clic comparé les valeur cumpter au choix du player 
- 
    - enregistré les resultat dans un objet = > table 
    - afficher un tableau scores .
    - 
- afficher un fenetre le symbole gagnant 
  



  bonus :
  mode F0F
  */

//   créer un generateur de number au asard de 1 a 5 (computer)


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomComputer = (getRandom(1,5));
  console.log(randomComputer);
  let rock = 0;
  let paper = 0;
  let scissors = 0;
  let lizard = 0;
  let spock = 0;
  console.log(rock);
  console.log(paper);
  console.log(scissors);
  console.log(lizard);
  console.log(spock);

  function choixComputer() {
      if(randomComputer===1){
        rock ="rock";
        return rock ;        
      }if (randomComputer ===2){
        paper = "paper";
        return paper;
      }if (randomComputer ===3){
        scissors = "scissors";
        return scissors;
      }if(randomComputer===4){
        lizard = "lizard";
        return lizard;
      }else{
        spock = spock ;
        return spock;
      }
    
  }
  
  console.log(choixComputer());

//   console.log(rock);
//   console.log(paper);
//   console.log(scissors);
//   console.log(lizard);
//   console.log(spock);