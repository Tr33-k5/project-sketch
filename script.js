let canvas = document.querySelector('.canvas');
// Disable drag-and-drop feature on the canvas
document.querySelector('.canvas').ondragstart = function() {
   return false;
};

/* Create a 16x16 canvas */
createCanvas(16);

/* Click on cell to color it in black */
draw();

/* Change canvas resolution */
changeResolution();

// Create canvas with display grid css styles
function createCanvas(res){
   const sheet = new CSSStyleSheet();
   sheet.replaceSync(".canvas {"+
      "grid-template-columns: repeat("+res+", auto);"+
      "grid-template-rows: repeat("+res+", auto);"+
   "}");
   document.adoptedStyleSheets = [sheet];
   for(i=1;i<=(res*res);i++){
      let div = document.createElement('div');
      div.setAttribute('id',''+i+'');
      canvas.appendChild(div);
   }
}

// Erase canvas
function removeCanvas(){
   let divs = document.querySelectorAll('.canvas > div');
   divs.forEach(div => {
      div.remove();
   });
}

// Feature: Change the canvas resolution
function draw(){
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
}

// Feature: Control the canvas resolution
function changeResolution(){
   let inputResolution = document.querySelector('#res');
   inputResolution.addEventListener('change',() => {
      let inputResolutionValue = inputResolution.value;
      removeCanvas();
      createCanvas(inputResolutionValue);
      draw();
   });
}