const sketchContainer = document.querySelector('.sketch-container');

// Crée une grille de 16x16
for(i=1;i<=256;i++){
   let div = document.createElement('div');
   div.setAttribute('id',''+i+'');
   sketchContainer.appendChild(div);
}

// Click sur une zone pour colorier la zone en noir
sketchContainer.addEventListener('mouseenter',() => {
   let squares = document.querySelectorAll('.sketch-container > div');
   squares.forEach(square => {
      square.addEventListener('click',() => {
         square.style.background = 'black';
      });
   });
});