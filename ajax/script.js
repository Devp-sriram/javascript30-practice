const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint).then(data => data.json()).then(data => cities.push(...data));

// console.log(cities);

function findMatches(wordToMatch,cities){
  return cities.filter(place =>{

    const regex = new RegExp(wordToMatch,'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

function displayResult(){
  const suggestions = document.querySelector('.suggestions');
  
  let result = findMatches(this.value,cities);
  let regex = new RegExp(this.value , 'gi');

  let ui = result.map(place=>{
      let cityName = place.city.replace(regex,`<span class='hl'>${this.value}</span>`);

    return `
    <li>
      <span class='name'>${cityName},${place.state}</span>
      <span class='name'>${place.population}</span>
    </li>
    `
  }).join("")
  suggestions.innerHTML = ui ;
}
document.addEventListener('DOMContentLoaded', function(){

const input = document.querySelector('.search');
  // const suggestions = document.querySelector('.suggestions');
  // suggestions.textContent = displayResult()
input.addEventListener('change', displayResult);
input.addEventListener('keyup', displayResult);

})

