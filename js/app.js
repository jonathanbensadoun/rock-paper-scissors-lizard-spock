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
  // console.log(rock);
  // console.log(paper);
  // console.log(scissors);
  // console.log(lizard);
  // console.log(spock);

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
function handleClickRock(){
  playerChoix = "rock"
  console.log(`valeur de playerChoix dans la fonction click :${playerChoix}`);
  return playerChoix
  
  };
  function handleClickPaper() {
    playerChoix = "paper";
    console.log(`valeur de playerChoix dans la fonction click :${playerChoix}`);
    return playerChoix;
  }
  function handleclickScissors(){
    playerChoix = "scissors";
    console.log(`valeur de playerChoix dans la fonction click :${playerChoix}`);
    return playerChoix;
  }
  function handleClickLizard(){
    playerChoix="lizard";
    console.log(`valeur de playerChoix dans la fonction click :${playerChoix}`);
    return playerChoix;
  }
  function handleClickSpock(){
    playerChoix="spock";
    console.log(`valeur de playerChoix dans la fonction click :${playerChoix}`);
    return playerChoix;
  }
btnRock.addEventListener("click",handleClickRock);
btnPaper.addEventListener("click",handleClickPaper);
btnScissors.addEventListener("click",handleclickScissors);
btnLizard.addEventListener("click",handleClickLizard);
btnSpock.addEventListener("click",handleClickSpock);

console.log(`valeur de playerChoix en dehors du click :${playerChoix}`);

btnRock.addEventListener("click",game);
btnPaper.addEventListener("click",game);
btnScissors.addEventListener("click",game);
btnLizard.addEventListener("click",game);
btnSpock.addEventListener("click",game);
// console.log(btnRock);
// console.log(btnPaper);
// console.log(btnScissors);
// console.log(btnLizard);
// console.log(btnSpock);

function game() {
 

  if(rock===scissors&&playerChoix!==""&&choixComputer!=="" ){
    console.log(`la pierre gagne`);
  }if(rock===lizard&&playerChoix!==""&&choixComputer!==""){
    console.log(`la pierre gagne`);
  }if(paper===rock&&playerChoix!==""&&choixComputer!==""){
    console.log(`le papier gagne`);
  }if(paper===spock&&playerChoix!==""&&choixComputer!==""){
    console.log(`le papier gagne`);
  }if(scissors===lizard&&playerChoix!==""&&choixComputer!==""){
    console.log(`les ciseaux gagne`);
  }if(scissors===paper&&playerChoix!==""&&choixComputer!==""){
    console.log(`les ciseaux gange`);
  }if(lizard===spock&&playerChoix!==""&&choixComputer!==""){
    console.log(`le lezard gagne`);
  }if(lizard===paper&&playerChoix!==""&&choixComputer!==""){
    console.log(`le lezard gagne`);
  }if(spock===scissors&&playerChoix!==""&&choixComputer!==""){
    console.log(`spock gagne`);
  }if(spock===rock&&playerChoix!==""&&choixComputer!==""){
    console.log(`spock gagne`);
  }else{
    console.log(`match nul `);
  }
  
}