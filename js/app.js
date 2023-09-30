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
  
  console.log(choixComputer());//il faut faire le log dans la console car l'evenement n'est pas passé

//   console.log(rock);
//   console.log(paper);
//   console.log(scissors);
//   console.log(lizard);
//   console.log(spock);


//  recuperation du clicPlayer

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const btnLizard = document.querySelector(".lizard");
const btnSpock = document.querySelector(".spock");
let playerChoix = 0

btnRock.addEventListener("click",()=>{
   playerChoix = "rock"
   console.log(`valeur de playerChoix dans la fonction click :${playerChoix}`);
   return playerChoix
});
btnPaper.addEventListener("click",()=>{
  playerChoix = "paper"
  console.log(`valeur de playerChoix dans la fonction click :${playerChoix}`);
  return playerChoix
})

console.log(`valeur de playerChoix en dehors du click :${playerChoix}`);

console.log(btnRock);
// console.log(btnPaper);
// console.log(btnScissors);
// console.log(btnLizard);
// console.log(btnSpock);

function game() {
  if(rock===scissors){
    console.log(`la pierre gagne`);
  }if(rock===lizard){
    console.log(`la pierre gagne`);
  }if(paper===rock){
    console.log(`le paiper gagne`);
  }if(paper===spock){
    console.log(`le papier gagne`);
  }if(scissors===lizard){
    console.log(`les ciseaux gagne`);
  }if(scissors===paper){
    console.log(`les ciseaux gange`);
  }if(lizard===spock){
    console.log(`le lezard gagne`);
  }if(lizard===paper){
    console.log(`le lezard gagne`);
  }if(spock===scissors){
    console.log(`spock gagne`);
  }else{
    console.log(`spock gagne`);
  }
  
}