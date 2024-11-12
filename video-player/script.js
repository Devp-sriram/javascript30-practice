
// get every thing for document
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButton = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//functions
function togglePlay(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}

function updatePlayButton(){
  if(this.paused){
    toggle.textContent ='►'
  }else{
    toggle.textContent ='||';
  }
}

function skip(){
    console.log(this.dataset);
    video.currentTime += parseInt(this.dataset.skip);
}

function handleRangeUpdtate(){
  video[this.name] = this.value // volume and playbackRate update 
  console.log(this.value);
}

function handleProgress(){
  const percentage = (video.currentTime/video.duration)*100;
  progressBar.style.flexBasis = `${percentage}%`
};

function scrub(e){
   const time = (e.offsetX / progressBar.offsetWidth) * video.duration
   video.currentTime = time;
}

// eventListenters
toggle.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('play',updatePlayButton);
video.addEventListener('pause',updatePlayButton);
video.addEventListener('timeupdate', handleProgress);

skipButton.forEach(button => button.addEventListener('click',skip))
ranges.forEach(range => range.addEventListener('click',handleRangeUpdtate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdtate));
let mousedown = false ;

progressBar.addEventListener('click',scrub);
progressBar.addEventListener('mousemove',(e) => {mousedown && scrub(e)});
progressBar.addEventListener('mousedown',()=> mousedown = true);
progressBar.addEventListener('mouseup',()=> mousedown = false);


