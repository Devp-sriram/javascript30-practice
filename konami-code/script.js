const pressed = [];
const secertWord = 'philiphs';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secertWord.length - 1,pressed.length - secertWord.length);
  pressed.join('') === secertWord ? console.log("cheat activated") : '';

  console.log(pressed);
});


