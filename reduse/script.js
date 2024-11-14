const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.map(node=> node.dataset.time)
               .map(timeCode => {
                  const [min,sec] = timeCode.split(':').map(parseFloat);
                   return (min*60+sec)
                }).reduce((total,sec) => total+sec);

let totalSec = seconds;
const hours = Math.floor(totalSec/3600);

totalSec =  totalSec % 3600;
const minutes =Math.floor(totalSec/60);

totalSec  = totalSec % 60;

console.log(`the total duriation is ${hours}:${minutes}:${totalSec}`);




