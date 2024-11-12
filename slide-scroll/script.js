const slideImage = document.querySelectorAll('.slide-in')


function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
}

function checkScroll(){
   
   slideImage.forEach(img => {
    const slideAt = (window.scrollY + window.innerHeight)- img.height/2;
    
    const imageBottom = img.offsetTop + img.height;
    const isHalfShown = slideAt > img.offsetTop;
    const isNotScrollpast = window.scrollY < imageBottom
    
   // console.log(imageBottom);
   // console.log(isHalfShown);
   // console.log(isNotScrollpast);
    
    if(isHalfShown && isNotScrollpast){
        img.classList.add('active');
    }else{
        img.classList.remove('active');
    }
   });
}

window.addEventListener('scroll', debounce(checkScroll));

 


