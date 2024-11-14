const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const btn = document.querySelector('.take-photo');


function getVideo(){
  navigator.mediaDevices.getUserMedia({video:true, audio:false,})
  .then(localMediaStream =>{
    video.srcObject = localMediaStream
    video.play();
    }).catch(error=> console.log(error))
}

function paintCanvas(){
 const width = video.videoWidth;
 const height = video.videoHeight;

 canvas.width = width;
 canvas.height = height;

  return setInterval(()=>{
    ctx.drawImage(video,0,0,width,height);
    // taking out
    let pixels = ctx.getImageData(0,0,width,height);
    // messing up 
    pixels = splitRGB(pixels);
    // putting to back
    ctx.putImageData(pixels,0,0);

  },16);

}

function takePhoto(){
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download','handsome');
  link.innerHTML = `<img src='${data}' alt='handsome boy'/>`;
  strip.insertBefore(link,strip.firstChild);
};

function redEffect(pixels){
    
   for(let i=0;i<pixels.data.length;i+=4){
    pixels.data[i] = pixels.data[i] +200 //red    
    pixels.data[i+1] = pixels.data[i]-50 // green 
    pixels.data[i+2] = pixels.data[i]*0.5 //blue
  }

  return pixels
}

function splitRGB(pixels){
    
   for(let i=0;i<pixels.data.length;i+=4){
    pixels.data[i+150] = pixels.data[i] //red    
    pixels.data[i-100] = pixels.data[i+1] // green 
    pixels.data[i+150] = pixels.data[i+2] //blue
  }

  return pixels
}

getVideo();

video.addEventListener('canplay', paintCanvas);
btn.addEventListener('click', takePhoto);

