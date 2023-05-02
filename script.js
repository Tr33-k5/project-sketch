const sketchContainer = document.querySelector('.sketch-container');

//Crée une grille de 16x16
for(i=1;i<=256;i++){
   let div = document.createElement('div');
   div.setAttribute('id',''+i+'');
   sketchContainer.appendChild(div);
}