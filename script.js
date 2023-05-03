const sketchContainer = document.querySelector('.canvas');
// Disable drag-and-drop feature on the canvas
document.querySelector('.canvas').ondragstart = function() {
   return false;
};

// Create a 16x16 grid
for(i=1;i<=256;i++){
   let div = document.createElement('div');
   div.setAttribute('id',''+i+'');
   sketchContainer.appendChild(div);
}

/* Click on cell to color it in black */
// Mouse pointer hover the canvas
let squares = document.querySelectorAll('.canvas > div');
squares.forEach(square => {
   square.addEventListener('mousedown',(e) => {
      // If no mouse click or press
      if(e.buttons === 0){ return }
      // On left mouse click
      if(e.button === 0){
         square.style.background = 'black';
      }
   });
   square.addEventListener('mousemove',(e) => {
      // If no mouse click or press
      if(e.buttons === 0){ return }
      // On left mouse click
      if(e.button === 0){
         square.style.background = 'black';
      }
   });
});