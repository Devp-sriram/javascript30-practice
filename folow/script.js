const triggers = document.querySelectorAll('a');
const highlight  = document.createElement('span')
highlight.classList.add('highlight');
document.body.append(highlight);


function highlightLink(){
  let linkCords = this.getBoundingClientRect();
  console.log(linkCords);

  let coords ={
    width : linkCords.width,
    height : linkCords.height,
    top : linkCords.top + window.scrollY,
    left : linkCords.left + window.scrollX,
  }
  highlight.style.width =`${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform  = `translate(${coords.left}px , ${coords.top}px)`;
}


triggers.forEach(a => a.addEventListener('mouseenter',highlightLink));



