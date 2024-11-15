
window.SpeechRecognition = window.SpeechRecognition || 
                           window.webkitSpeechRecognition;

const recognation =  new SpeechRecognition();
recognation.interimResults = true;
recognation.lang = 'en-US';

let p  = document.createElement('p');
const words = document.querySelector('.words');

words.appendChild(p);


recognation.addEventListener('result',e =>{
  // console.log(e)
  const transcript = Array.from(e.results)
              .map(result => result[0])
              .map(result => result.transcript)
              .join('');
  p.textContent = transcript;
  if(e.results[0].isFinal){
    p  = document.createElement('p');
    words.appendChild(p);
  }
  console.log(transcript);

});

recognation.addEventListener('end',recognation.start);
recognation.start();



