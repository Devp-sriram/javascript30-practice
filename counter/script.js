let countDown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){

  clearInterval(countDown);
  const now  = Date.now();
  const then = now + seconds * 1000
  dispalyEndTime(then);
  displayTimeLeft(seconds)
   countDown = setInterval(()=>{
   const secLeft = Math.round((then - Date.now()) /1000);
    if(secLeft < 1 ){
       clearInterval(countDown);
    }
   displayTimeLeft(secLeft);
  },1000)
}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const display = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
  timerDisplay.textContent =display
  document.title =display 
  console.log(minutes,secondsLeft);
}

function dispalyEndTime(time){
   const end = new Date(time);
   const hours = end.getHours();
   const hoursFmt = hours > 12 ? hours % 12 : hours;
   const minutes = end.getMinutes();
   endTime.textContent = `${hoursFmt}:${minutes < 10 ? "0" : ""}${minutes}`
}

function startTimer(){
   const seconds = parseInt(this.dataset.time);
   timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit',function(e){
 e.preventDefult();
 const mins = this.minutes.value;
 console.log(mins)
 timer(mins * 60);
 this.reset();
});
