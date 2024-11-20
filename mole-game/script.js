  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const startbutton = document.querySelector('.startButton');
  let lastHole;
  let timeUp  = false; 
  let score = 0;

  
function randTime(min,max){
    return Math.round(Math.random() * (max - min) + min)
}

function randHole(holes){
  const idx = Math.floor(Math.random() * holes.length); 
  const hole = holes[idx];
   if(lastHole === hole){
     console.log('same');
     return randHole(holes)
   }
  lastHole = hole;
  return hole
}

function peak(){
 const time  = randTime(200, 1000);
 const hole = randHole(holes);
 hole.classList.add('up');
 setTimeout(()=>{
 hole.classList.remove('up');
 if(!timeUp) peak();
 },time);
 console.log(time,hole);
}

function startGame(){
  scoreBoard.textContent = 0;
  timeUp = false;
  peak();
  setTimeout(()=>{timeUp = true},10000)
}
 
function hit(e){
  e.isTrusted ? score++ : "";
  this.classList.remove('up')  
  scoreBoard.textContent = score
}


startbutton.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click',hit));

