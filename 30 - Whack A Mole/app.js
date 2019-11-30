const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;
let newHole;
const randomTime = (min, max)=>{
  return Math.round(Math.random()*(max-min)+min)
}
const randomHole = (holes)=>{
  const idx = Math.floor(Math.random()* holes.length);
  const hole = holes[idx];
  if(hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

const peep = ()=>{
  const time = randomTime(200,1500);
  const hole = randomHole(holes);
  newHole = hole
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

const startGame = ()=>{
  scoreBoard.textContent = `0`;
  timeUp = false;
  peep();
  setTimeout(()=> timeUp = true ,15000);
}

const bonk = (e)=>{
  if(!e.isTrusted) return;
  score++
  newHole.classList.remove('up')
  scoreBoard.textContent = score
} 
moles.forEach(mole=> mole.addEventListener('click', bonk))