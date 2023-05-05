const canvas = document.querySelector('.canvas');
const inputResolution = document.querySelector('#res');

/* Disable drag-and-drop feature on the canvas */
document.querySelector('.canvas').ondragstart = function() {
   return false;
}

/* Create a 16x16 canvas */
createNewCanvas(16);

/* Check selected tool*/
checkSelectedTool();

/* Change canvas's resolution if changed */
isResolutionChanged();

/* Clear Canvas if clicked */
isClearButtonClicked()

// Create a canvas using 'display:grid' property
function createNewCanvas(resolution){
   const sheet = new CSSStyleSheet();
   sheet.replaceSync(".canvas {"+
      "grid-template-columns: repeat("+resolution+", auto);"+
      "grid-template-rows: repeat("+resolution+", auto);"+
   "}");
   document.adoptedStyleSheets = [sheet];
   for(i=1;i<=(resolution*resolution);i++){
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

// Remove old canvas, create new canvas, check what tool is selected
function resetCanvas(){
   let resolution = inputResolution.value;
   removeCanvas();
   createNewCanvas(resolution);
   checkSelectedTool();
}

// Feature: Check what tool is selected :
// pencil => color a square
// eraser => erase square color
// tastetherainbow => color a square in a random color
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
         if(toolSelected === 'rainbow'){
            rainbowIsSelected();
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
         if(toolSelected === 'rainbow'){
            rainbowIsSelected();
         }
      });
   });
}

// Feature: Control the canvas resolution
function isResolutionChanged(){
   inputResolution.addEventListener('change',() => {
      resetCanvas();
   });
}

// Feature: Click on cell to color it black
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

// Feature: Click on cell to color it with a random color
function rainbowIsSelected(){
   let brightness = 100;
   // Mouse pointer hover the canvas
   let squares = document.querySelectorAll('.canvas > div');
   squares.forEach(square => {
         square.addEventListener('mousedown',(e) => {
         // If no mouse click or press
         if(e.buttons === 0){ return }
         // On left mouse click
         if(e.button === 0){
            let r,g,b;
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            square.style.background = 'rgb('+r+','+g+','+b+')';
            square.style.filter = 'brightness('+brightness+'%)';
         }
      });
      square.addEventListener('mousemove',(e) => {
         // If no mouse click or press
         if(e.buttons === 0){ return }
         // On left mouse click
         if(e.button === 0){
            let r,g,b;
            r = Math.floor(Math.random() * 255);
            g = Math.floor(Math.random() * 255);
            b = Math.floor(Math.random() * 255);
            square.style.background = 'rgb('+r+','+g+','+b+')';
            square.style.filter = 'brightness('+brightness+'%)';
         }
      });
   });
}

// Feature: Click on clear button to clear the canvas
function isClearButtonClicked(){
   let clearButton = document.getElementById('clear');
   clearButton.addEventListener('click',() => {
      resetCanvas();
   });
}