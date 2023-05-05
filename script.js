let canvas = document.querySelector('.canvas');

/* Disable drag-and-drop feature on the canvas */
document.querySelector('.canvas').ondragstart = function() {
   return false;
};

/* Create a 16x16 canvas */
createNewCanvas(16);

/* Check selected tool*/
checkSelectedTool();

/* Change canvas resolution */
changeResolution();

// Create a canvas using 'display:grid' property
function createNewCanvas(res){
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

// Check selected tool :
// pencil => color a square
function checkSelectedTool(){
   let radioButtons = document.querySelectorAll('input[name=tools]');
   radioButtons.forEach(radioButton => {
      let toolSelected = radioButton.value;
      if(radioButton.checked){
         if(toolSelected === 'pencil'){
            pencilIsSelected();
         }
         if(toolSelected === 'eraser'){
            eraserIsSelected();
         }
      }
      radioButton.addEventListener('change',() => {
         toolSelected = radioButton.value;
         if(toolSelected === 'pencil'){
            pencilIsSelected();
         }
         if(toolSelected === 'eraser'){
            eraserIsSelected();
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
      checkSelectedTool();
   });
}

// Feature: Click on cell to color it in black
function pencilIsSelected(){
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

// Feature: Click on cell to erase it
function eraserIsSelected(){
   // Mouse pointer hover the canvas
   let squares = document.querySelectorAll('.canvas > div');
   squares.forEach(square => {
         square.addEventListener('mousedown',(e) => {
         // If no mouse click or press
         if(e.buttons === 0){ return }
         // On left mouse click
         if(e.button === 0){
            square.style.removeProperty('background-color');
         }
      });
      square.addEventListener('mousemove',(e) => {
         // If no mouse click or press
         if(e.buttons === 0){ return }
         // On left mouse click
         if(e.button === 0){
            square.style.removeProperty('background-color');
         }
      });
   });
}