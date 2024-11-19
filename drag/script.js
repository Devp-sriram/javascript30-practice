const slider = document.querySelector('.items')
let isDown = false 
let startX ;
let scrollLeft ;

slider.addEventListener('mousedown', ()=> { 
  isDown = true 
  slider.classList.add('active');
  startX = e.pageX - slider.offsetX
})
slider.addEventListener('mouseleave',()=>{
  isDown = false 
  slider.classList.remove('active');
})
slider.addEventListener('mouseup', ()=>{
  isDown = false
  slider.classList.remove('active');
})
slider.addEventListener('mousemove', ()=>{
  if(!isDown) return 
  console.count(isDown);
})

