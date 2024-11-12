let inputs;

document.addEventListener('DOMContentLoaded', function(){
inputs = document.querySelectorAll('.inbox input[type= "checkbox"]');
inputs.forEach(input => input.addEventListener('click', handleInput));
});

let inBetween  = false;
let lastChecked;

function handleInput(e){
   console.log(e);
    if(e.shiftKey && this.checked){
      inputs.forEach(input =>{
          console.log(input)
          if(input === this || input === lastChecked){
            inBetween = !inBetween;
          }

          if(inBetween){
              input.checked = true;
              console.log('checked')
          }
      }) 
    }
   
   lastChecked = this;
}

