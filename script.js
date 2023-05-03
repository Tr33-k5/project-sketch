const sketchContainer = document.querySelector('.sketch-container');
// Disable drag-and-drop feature on the canvas
document.querySelector('.sketch-container').ondragstart = function() {
   return false;
};

// Create a 16x16 grid
for(i=1;i<=256;i++){
   let div = document.createElement('div');
   div.setAttribute('id',''+i+'');
   sketchContainer.appendChild(div);
}

/* Click on cell to color it in black */
// Mouse pointer enter the grid
sketchContainer.addEventListener('mouseenter',() => {
   let squares = document.querySelectorAll('.sketch-container > div');
   squares.forEach(square => {
      square.addEventListener('mousemove',(e) => {
         // If no mouse click or press
         if(e.buttons === 0){ return }
         // On left mouse click
         if(e.button === 0){
            square.style.background = 'black';
         }
      });
   });
});